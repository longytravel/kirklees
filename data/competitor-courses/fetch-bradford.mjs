// Bradford College course scraper
// Source: https://www.bradfordcollege.ac.uk/courses-sitemap.xml
// Output: data/competitor-courses/bradford/courses.json + scrape-report.json

import { writeFileSync, mkdirSync } from 'node:fs';
import { load } from 'cheerio';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, 'bradford');
mkdirSync(OUT_DIR, { recursive: true });

const UA = 'KirkleesResearchBot/0.1 (+contact: longytravel@gmail.com)';
const CONCURRENCY = 4;
const DELAY_MS = 250;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchText(url, attempt = 1) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'text/html' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } catch (e) {
    if (attempt < 3) {
      await sleep(1000 * attempt);
      return fetchText(url, attempt + 1);
    }
    throw e;
  }
}

async function getCourseUrls() {
  const xml = await fetchText('https://www.bradfordcollege.ac.uk/courses-sitemap.xml');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  return urls.filter(u => u !== 'https://www.bradfordcollege.ac.uk/courses/' && u.includes('/courses/'));
}

function extractCourse(html, url) {
  const $ = load(html);
  const rec = { url, provider: 'Bradford College' };

  rec.title = $('h1[itemprop="name"]').first().text().trim() || $('h1').first().text().trim();

  // Breadcrumb → subject area
  const bcLinks = $('#breadcrumbs a').toArray().map(a => ({ href: $(a).attr('href'), text: $(a).text().trim() }));
  const subjBc = bcLinks.find(l => l.href && l.href.includes('/subject-areas/'));
  rec.subject_area = subjBc ? subjBc.text : null;
  rec.subject_area_url = subjBc ? subjBc.href : null;

  // Qualification gained
  const qual = $('.qual-gained').text().replace(/\s+/g, ' ').replace(/Qualification Gained:\s*/i, '').trim();
  rec.qualification = qual || null;

  // Badge meta fields: <span class="badge">…<strong>…<i/>&nbsp; LABEL</strong>VALUE…</span>
  const meta = {};
  $('span.badge').each((_, el) => {
    const $el = $(el);
    const label = $el.find('strong').text().replace(/\s+/g, ' ').trim().replace(/^[^a-zA-Z]+/, '');
    // Full text minus the label text
    const full = $el.text().replace(/\s+/g, ' ').trim();
    const value = full.slice(label.length).trim();
    if (label) meta[label.toLowerCase().replace(/\s+/g, '_')] = value;
  });
  rec.level = meta.study_level || null;
  rec.course_type = meta.course_type || null;
  rec.duration = meta.duration || null;
  rec.start_date = meta.start_date || null;
  rec.study_mode = meta.study_mode || null;
  rec.location = meta.location ? meta.location.replace(/\s+Learn more.*$/i, '').trim() : null;
  rec.raw_badges = meta;

  // Overview
  rec.overview = $('div[itemprop="description"]').text().replace(/\s+/g, ' ').trim() || null;

  // Accordion sections: h2.accordion-header with button text, body in .accordion-body
  const sections = {};
  $('.accordion-item').each((_, item) => {
    const $item = $(item);
    const heading = $item.find('.accordion-header button, .accordion-header').first().text().replace(/\s+/g, ' ').trim();
    if (!heading) return;
    const body = $item.find('.accordion-body').first().text().replace(/\s+/g, ' ').trim();
    const key = heading.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    if (key && body) sections[key] = body;
  });
  rec.what_you_will_learn = sections.what_you_will_learn || null;
  rec.modules = sections.modules || null;
  rec.assessment = sections.assessment || null;
  rec.work_experience = sections.work_experience || null;
  rec.progression = sections.progression || null;
  rec.entry_requirements = sections.entry_requirements || sections.how_to_apply || null;
  rec.fees = sections.fees || sections.fees_funding || null;
  rec.raw_sections = sections;

  // Leaflet / course id
  const leafletLink = $('a[href*="course-leaflet.php"]').attr('href');
  if (leafletLink) {
    const m = leafletLink.match(/id=(\d+)/);
    rec.course_leaflet_url = leafletLink;
    rec.external_id = m ? m[1] : null;
  }

  // Apply URL
  const applyLink = $('a[href*="ontrackprospect"], a#track_applynow').attr('href');
  rec.apply_url = applyLink || null;
  if (applyLink) {
    const m = applyLink.match(/UIOIds_InList=(\d+)/);
    if (m) rec.offering_id = m[1];
  }

  // Tags / related subject areas
  const tags = [];
  $('a[href*="/subject-areas/"]').each((_, a) => { const t = $(a).text().trim(); if (t && !tags.includes(t)) tags.push(t); });
  rec.tags = tags;

  rec.scraped_at = new Date().toISOString();
  return rec;
}

async function main() {
  const start = Date.now();
  console.log('Fetching Bradford sitemap...');
  const urls = await getCourseUrls();
  console.log(`Found ${urls.length} course URLs.`);

  const results = [];
  const errors = [];
  let done = 0;

  async function worker(queue) {
    while (queue.length) {
      const url = queue.shift();
      try {
        const html = await fetchText(url);
        results.push(extractCourse(html, url));
      } catch (e) {
        errors.push({ url, error: String(e) });
      }
      done++;
      if (done % 20 === 0) console.log(`  ${done}/${urls.length}  (errors: ${errors.length})`);
      await sleep(DELAY_MS);
    }
  }

  const queue = [...urls];
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));

  results.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  writeFileSync(join(OUT_DIR, 'courses.json'), JSON.stringify(results, null, 2));

  // Field coverage report
  const fields = ['title','subject_area','qualification','level','course_type','duration','start_date','study_mode','location','overview','what_you_will_learn','modules','assessment','work_experience','progression','entry_requirements','fees','external_id','apply_url','offering_id'];
  const coverage = {};
  for (const f of fields) {
    const n = results.filter(r => r[f] != null && r[f] !== '').length;
    coverage[f] = { count: n, pct: results.length ? +(100 * n / results.length).toFixed(1) : 0 };
  }
  const report = {
    provider: 'Bradford College',
    source_sitemap: 'https://www.bradfordcollege.ac.uk/courses-sitemap.xml',
    urls_found: urls.length,
    scraped_ok: results.length,
    errors: errors.length,
    error_details: errors.slice(0, 20),
    coverage,
    duration_sec: Math.round((Date.now() - start) / 1000),
    generated_at: new Date().toISOString()
  };
  writeFileSync(join(OUT_DIR, 'scrape-report.json'), JSON.stringify(report, null, 2));
  console.log('\n=== DONE ===');
  console.log(JSON.stringify(report, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
