// Kirklees College course scraper
// Source: https://www.kirkleescollege.ac.uk/kc_courses-sitemap.xml
// Output: data/competitor-courses/kirklees/courses.json + scrape-report.json

import { writeFileSync, mkdirSync } from 'node:fs';
import { load } from 'cheerio';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, 'kirklees');
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
  const xml = await fetchText('https://www.kirkleescollege.ac.uk/kc_courses-sitemap.xml');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

function parseUrlMeta(url) {
  // e.g. https://www.kirkleescollege.ac.uk/courses-for-16-18/Animal_Management_Level_3/26-27/
  const m = url.match(/kirkleescollege\.ac\.uk\/([^/]+)\/([^/]+)\/([^/]+)\/?$/);
  if (!m) return { study_area: null, slug: null, cohort: null };
  return { study_area_path: m[1], slug: m[2], cohort: m[3] };
}

const STUDY_AREA_LABELS = {
  'courses-for-16-18': 'College 16-18',
  'courses-for-adult-learners': 'Adult Learning',
  'courses-for-apprenticeships': 'Apprenticeships',
  'courses-for-employers': 'Employers',
  'higher-skills-courses': 'HE & Higher Skills',
  'short-courses': 'Short Courses'
};

function extractCourse(html, url) {
  const $ = load(html);
  const rec = { url, provider: 'Kirklees College' };

  const urlMeta = parseUrlMeta(url);
  rec.study_area = STUDY_AREA_LABELS[urlMeta.study_area_path] || urlMeta.study_area_path;
  rec.url_slug = urlMeta.slug;
  rec.cohort = urlMeta.cohort;

  // Title
  rec.title = $('.entry-content h1').first().text().trim() || $('h1').first().text().trim();

  // Qualification: first H3 inside entry-content that isn't a boilerplate label
  const entryH3s = $('.entry-content h3').toArray().map(h => $(h).text().trim()).filter(Boolean);
  const isBoilerplate = (t) => /^(share|follow us|level\s*\d|core skills)/i.test(t);
  rec.qualification = entryH3s.find(h => !isBoilerplate(h)) || null;
  rec.level_badge = entryH3s.find(h => /^level\s*\d/i.test(h)) || null;

  // Level: try URL slug, then H3 badge, then course code pattern, then study-area fallback
  const slugLevelMatch = (urlMeta.slug || '').match(/Level[_\s-]?(\d)/i);
  if (slugLevelMatch) rec.level = `Level ${slugLevelMatch[1]}`;
  else if (rec.level_badge) rec.level = rec.level_badge;
  else if (/apprentice/i.test(urlMeta.slug || '') || urlMeta.study_area_path === 'courses-for-apprenticeships') rec.level = 'Apprenticeship';
  else if (urlMeta.study_area_path === 'higher-skills-courses') rec.level = 'Higher Skills';
  else if (urlMeta.study_area_path === 'short-courses') rec.level = 'Short Course';
  else rec.level = null;

  // Metadata <b>Label</b> - Value  — scoped to widgets so we skip boilerplate <b> in footer
  const meta = {};
  $('.elementor-widget-html .elementor-widget-container').each((_, el) => {
    const $el = $(el);
    const $b = $el.find('b').first();
    if (!$b.length) return;
    const label = $b.text().trim();
    if (!label || label.length > 40) return;
    const full = $el.text().replace(/\s+/g, ' ').trim();
    const afterLabel = full.slice(full.indexOf(label) + label.length).replace(/^[\s\-–:]+/, '').trim();
    if (afterLabel) meta[label.toLowerCase().replace(/\s+/g, '_')] = afterLabel;
  });
  rec.attendance = meta.attendance || null;
  rec.duration = meta.duration || null;
  rec.start_date = meta.start_date || null;
  rec.location = meta.where || null;
  rec.raw_meta = meta;

  // Overview: collect text-editor widgets that appear between h2 "Course Overview"
  // and the next h2. Deduplicate paragraphs (mobile+desktop render duplicates).
  const overviewParts = [];
  const seen = new Set();
  const allHeadings = $('h2').toArray();
  const overviewH2Index = allHeadings.findIndex(h => /course overview/i.test($(h).text()));
  if (overviewH2Index !== -1) {
    const startH2 = allHeadings[overviewH2Index];
    const nextH2 = allHeadings[overviewH2Index + 1] || null;
    // Build set of positions between these two h2s
    const allNodes = $('*').toArray();
    const startIdx = allNodes.indexOf(startH2);
    const endIdx = nextH2 ? allNodes.indexOf(nextH2) : allNodes.length;
    $('[data-widget_type="text-editor.default"]').each((_, el) => {
      const pos = allNodes.indexOf(el);
      if (pos > startIdx && pos < endIdx) {
        const text = $(el).text().replace(/\s+/g, ' ').trim();
        if (text && text.length > 20 && !seen.has(text)) {
          seen.add(text);
          overviewParts.push(text);
        }
      }
    });
  }
  rec.overview = overviewParts.length ? overviewParts.join(' ') : null;

  // Accordion sections
  const accordion = {};
  $('.elementor-accordion-item').each((_, item) => {
    const title = $(item).find('.elementor-accordion-title, .elementor-tab-title').first().text().replace(/\s+/g, ' ').trim();
    const content = $(item).find('.elementor-tab-content').first().text().replace(/\s+/g, ' ').trim();
    if (title) {
      const key = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
      accordion[key] = content || null;
    }
  });
  rec.entry_requirements = accordion.entry_requirements || null;
  rec.fees_funding = accordion.fees_funding || null;
  // "Course Progression" is the progression slot
  rec.progression = accordion.course_progression || accordion.progression || null;
  // "Career Progression" = career_opportunities
  rec.career_opportunities = accordion.career_progression || accordion.career_opportunities || accordion.careers || null;
  // "Assessment methods" (with typo variant "Assesment methods")
  rec.assessment = accordion.assessment_methods || accordion.assesment_methods || accordion.assessment || null;
  rec.qualification_awarding_body = accordion.qualification_awarding_body || null;
  rec.additional_information = accordion.additional_information || null;
  rec.raw_accordion = accordion;

  // Offering / course codes in apply boxes
  const appBoxes = [];
  $('.appbtn-data').each((_, box) => {
    const $box = $(box);
    const code = $box.find('h3').first().text().trim();
    const campus = $box.find('h4').first().text().trim();
    const applyHref = $box.find('a[href*="OfferingID"]').attr('href') || null;
    const offeringId = applyHref ? (applyHref.match(/OfferingID=(\d+)/) || [])[1] : null;
    appBoxes.push({ code, campus, apply_url: applyHref, offering_id: offeringId });
  });
  rec.course_instances = appBoxes;
  if (appBoxes[0]) {
    rec.course_code = appBoxes[0].code || null;
    rec.primary_offering_id = appBoxes[0].offering_id || null;
  }

  // Meta description (fallback short description)
  rec.meta_description = $('meta[name="description"]').attr('content') || null;

  rec.scraped_at = new Date().toISOString();
  return rec;
}

async function main() {
  const start = Date.now();
  console.log('Fetching Kirklees sitemap...');
  const urls = await getCourseUrls();
  console.log(`Found ${urls.length} course URLs.`);

  // Bucket by study area for report
  const byStudyArea = {};
  urls.forEach(u => {
    const p = parseUrlMeta(u).study_area_path;
    byStudyArea[p] = (byStudyArea[p] || 0) + 1;
  });

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
      if (done % 25 === 0) console.log(`  ${done}/${urls.length}  (errors: ${errors.length})`);
      await sleep(DELAY_MS);
    }
  }

  const queue = [...urls];
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));

  results.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  writeFileSync(join(OUT_DIR, 'courses.json'), JSON.stringify(results, null, 2));

  const fields = ['title','study_area','cohort','qualification','level','attendance','duration','start_date','location','overview','entry_requirements','fees_funding','progression','career_opportunities','assessment','qualification_awarding_body','course_code','primary_offering_id'];
  const coverage = {};
  for (const f of fields) {
    const n = results.filter(r => r[f] != null && r[f] !== '').length;
    coverage[f] = { count: n, pct: results.length ? +(100 * n / results.length).toFixed(1) : 0 };
  }
  const report = {
    provider: 'Kirklees College',
    source_sitemap: 'https://www.kirkleescollege.ac.uk/kc_courses-sitemap.xml',
    urls_found: urls.length,
    urls_by_study_area: byStudyArea,
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
