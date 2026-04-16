// Builds comparison.json — Bradford subject areas vs Kirklees courses.
// For each Bradford subject, we use a curated keyword signature to find
// matching Kirklees courses (by title + overview + qualification text).
// Output: data/competitor-courses/comparison.json
//
// Status semantics:
//   pure_gap     — Bradford has courses, Kirklees has 0 matches
//   depth_gap    — Both have courses, but Kirklees has fewer or thinner level coverage
//   parity       — Roughly comparable
//   kirklees_leads — Kirklees has more courses or deeper coverage
//   no_signal    — Bradford subject has 0 courses (shouldn't happen but guard)

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SUBJECT_KEYWORDS = {
  'Art & Design': ['art', 'design', 'graphic', 'illustration'],
  'Automotive & Motor Vehicle': ['motor vehicle', 'automotive', 'mechanic', 'auto repair'],
  'Business': ['business', 'accountancy', 'aat', 'bookkeep', 'enterprise', 'administration', 'leadership'],
  'Catering & Hospitality': ['catering', 'hospitality', 'chef', 'culinary', 'patisserie', 'professional cook'],
  'Construction': ['construction', 'carpentry', 'bricklaying', 'plastering', 'joinery', 'plumbing', 'site supervis', 'wood occupations'],
  'Dentistry': ['dental', 'dentistry', 'oral health'],
  'Digital': ['digital', 'computing', 'ict ', 'coding', 'cyber', 'software', 'web develop', 'data analy', 'esports'],
  'Early Years & Childcare': ['early years', 'childcare', 'children and young', 'children & young', 'cypw'],
  'Engineering': ['engineering', 'welding', 'manufacturing', 'fabrication', 'mechatronic', 'cnc', 'maintenance operations', 'instrumentation'],
  'English & Maths': ['english', 'maths', 'mathematics', 'functional skills', 'literacy', 'numeracy', 'gcse english', 'gcse maths'],
  'Fashion & Textiles': ['fashion', 'textile', 'tailoring', 'costume', 'garment'],
  'Hair, Beauty & Barbering': ['hair', 'hairdressing', 'beauty', 'barbering', 'beautician', 'nail tech', 'make up', 'make-up'],
  'Health & Social Care': ['health and social care', 'health & social care', 'nursing', 'midwifery', 'social care', 'healthcare', 'health care', 'adult care'],
  'Languages': ['spanish', 'french', 'german', 'italian', 'mandarin', 'modern foreign language'],
  'Margaret McMillan School of Education': ['teacher education', 'teaching assistant', 'pgce', 'education and training', 'cert ed', 'qts', 'school direct'],
  'Media & Photography': ['media', 'photography', 'film', 'video production', 'broadcast'],
  'Music': ['music ', 'musician', 'sound recording', 'audio production', 'music technology', 'music performance'],
  'Ophthalmics': ['ophthalmic', 'optical', 'dispensing optician', 'optometr'],
  'Performing Arts': ['performing arts', 'drama', 'theatre', 'dance', 'acting', 'musical theatre'],
  'Pharmacy': ['pharmacy', 'pharmaceutical', 'medicines counter', 'medicines optimisation', 'dispens'],
  'Preparing for Learning & Work – Foundation Learning': ['foundation learning', 'employability', 'skills for life', 'pre-vocational', 'prep for work', 'work skills', 'vocational pathway', 'xplorer'],
  'Science': ['science', 'biology', 'chemistry', 'physics', 'forensic', 'applied science', 'lab technician'],
  'Sports & Fitness': ['sport', 'fitness', 'coaching', 'personal train', 'gym ', 'football', 'rugby'],
  'Travel & Tourism': ['travel', 'tourism', 'aviation', 'airline'],
  'Uniformed Public Services': ['uniformed', 'public services', 'protective services', 'police', 'military', 'fire service']
};

// Special-case false-positive removal — keywords that match other things
const FALSE_POSITIVE_FILTERS = {
  'Art & Design': (text) => /martial art/i.test(text),
  'Music': (text) => /must be /i.test(text),
  'Languages': () => false,
  'Construction': (text) => /reconstruct/i.test(text),
};

function loadCourses() {
  const bradford = JSON.parse(
    readFileSync(join(__dirname, 'bradford', 'courses.json'), 'utf8')
  );
  const kirkleesRaw = JSON.parse(
    readFileSync(join(__dirname, 'kirklees', 'courses.json'), 'utf8')
  );
  // Dedup by slug, keeping the latest cohort
  const bySlug = new Map();
  for (const c of kirkleesRaw) {
    if (!c.url_slug) continue;
    const existing = bySlug.get(c.url_slug);
    if (!existing || (c.cohort || '') > (existing.cohort || '')) {
      bySlug.set(c.url_slug, c);
    }
  }
  return { bradford, kirklees: Array.from(bySlug.values()) };
}

function searchableText(c, fields) {
  return fields
    .map((f) => (c[f] || '').toString().toLowerCase())
    .join(' \n ');
}

// Build word-boundary regex for each keyword (escaping regex chars).
// Multi-word keywords match the literal phrase with whitespace flexibility.
function buildKeywordRegexes(keywords) {
  return keywords.map((kw) => {
    const escaped = kw
      .toLowerCase()
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\s+/g, '\\s+');
    return new RegExp(`\\b${escaped}\\b`, 'i');
  });
}

const SUBJECT_REGEXES = Object.fromEntries(
  Object.entries(SUBJECT_KEYWORDS).map(([k, kws]) => [k, buildKeywordRegexes(kws)])
);

function matchesSubject(text, subject) {
  const filter = FALSE_POSITIVE_FILTERS[subject];
  if (filter && filter(text)) return false;
  const regexes = SUBJECT_REGEXES[subject] || [];
  return regexes.some((rx) => rx.test(text));
}

function levelRank(level) {
  if (!level) return -1;
  const m = level.match(/level\s*(\d)/i);
  if (m) return parseInt(m[1]);
  if (/entry/i.test(level)) return 0;
  if (/apprentice|higher skills/i.test(level)) return 4; // approximate
  return -1;
}

function deepestLevel(courses) {
  if (!courses.length) return null;
  return Math.max(...courses.map((c) => levelRank(c.level)));
}

function classify(brCount, kkCount, brMaxLevel, kkMaxLevel) {
  if (brCount === 0) return 'no_signal';
  if (kkCount === 0) return 'pure_gap';
  // Kirklees significantly larger
  if (kkCount >= brCount * 1.5) return 'kirklees_leads';
  // Kirklees significantly smaller
  if (kkCount * 1.5 < brCount) return 'depth_gap';
  // Level depth — if Kirklees doesn't reach Bradford's max level
  if (brMaxLevel > kkMaxLevel + 1) return 'depth_gap';
  if (kkMaxLevel > brMaxLevel + 1) return 'kirklees_leads';
  return 'parity';
}

function buildSubjectMatch(subject, bradford, kirklees) {
  const brCourses = bradford
    .filter((c) => c.subject_area === subject)
    .map((c) => ({
      title: c.title,
      level: c.level || 'Unknown',
      qualification: c.qualification || '',
      url: c.url,
      duration: c.duration || '',
      study_mode: c.study_mode || '',
    }));

  const kkMatched = kirklees
    .filter((c) => {
      const text = searchableText(c, ['title', 'qualification', 'overview']);
      return matchesSubject(text, subject);
    })
    .map((c) => ({
      title: c.title,
      level: c.level || 'Unknown',
      qualification: c.qualification || '',
      url: c.url,
      duration: c.duration || '',
      attendance: c.attendance || '',
      study_area: c.study_area || '',
    }));

  // Dedup Kirklees matches by title (in case multiple subjects match the same course)
  const kkUnique = Array.from(
    new Map(kkMatched.map((c) => [c.title, c])).values()
  );

  const brMaxLevel = deepestLevel(brCourses);
  const kkMaxLevel = deepestLevel(kkUnique);

  const status = classify(
    brCourses.length,
    kkUnique.length,
    brMaxLevel,
    kkMaxLevel
  );

  return {
    subject,
    bradford_count: brCourses.length,
    kirklees_count: kkUnique.length,
    bradford_max_level: brMaxLevel,
    kirklees_max_level: kkMaxLevel,
    status,
    bradford_courses: brCourses.sort((a, b) => levelRank(a.level) - levelRank(b.level) || a.title.localeCompare(b.title)),
    kirklees_courses: kkUnique.sort((a, b) => levelRank(a.level) - levelRank(b.level) || a.title.localeCompare(b.title)),
  };
}

function main() {
  const { bradford, kirklees } = loadCourses();

  // Distinct Bradford subjects
  const subjects = Array.from(new Set(bradford.map((c) => c.subject_area).filter(Boolean))).sort();

  const subjectMatches = subjects.map((s) => buildSubjectMatch(s, bradford, kirklees));

  // Headline counts
  const totals = {
    bradford_total: bradford.length,
    kirklees_total: kirklees.length,
    bradford_subjects: subjects.length,
    pure_gaps: subjectMatches.filter((s) => s.status === 'pure_gap').length,
    depth_gaps: subjectMatches.filter((s) => s.status === 'depth_gap').length,
    parity: subjectMatches.filter((s) => s.status === 'parity').length,
    kirklees_leads: subjectMatches.filter((s) => s.status === 'kirklees_leads').length,
  };

  // Identify Kirklees-unique subjects (very rough — courses that didn't match any Bradford subject)
  const allMatchedKirkleesUrls = new Set();
  subjectMatches.forEach((s) => s.kirklees_courses.forEach((c) => allMatchedKirkleesUrls.add(c.url)));
  const unmatchedKirklees = kirklees
    .filter((c) => !allMatchedKirkleesUrls.has(c.url))
    .map((c) => ({
      title: c.title,
      level: c.level || 'Unknown',
      qualification: c.qualification || '',
      url: c.url,
      study_area: c.study_area || '',
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  const out = {
    generated_at: new Date().toISOString(),
    totals,
    subject_matches: subjectMatches.sort((a, b) => {
      // Order: pure_gap → depth_gap → parity → kirklees_leads
      const order = { pure_gap: 0, depth_gap: 1, parity: 2, kirklees_leads: 3, no_signal: 4 };
      const d = order[a.status] - order[b.status];
      if (d !== 0) return d;
      return b.bradford_count - a.bradford_count;
    }),
    kirklees_unmatched: unmatchedKirklees,
    notes: [
      'Subject anchoring uses Bradford\'s 25 subject areas as the taxonomy.',
      'Kirklees courses are matched via keyword search across title + qualification + overview text.',
      'A Kirklees course may match multiple Bradford subjects. The unmatched list shows courses that fall outside Bradford\'s taxonomy entirely (often Kirklees specialisms like Animal Care, Process Manufacturing).',
      'Status: pure_gap = Bradford teaches it, Kirklees has no matches; depth_gap = both teach it but Kirklees has materially fewer courses or shallower level coverage; parity = comparable; kirklees_leads = Kirklees has more or deeper.',
    ],
  };

  writeFileSync(join(__dirname, 'comparison.json'), JSON.stringify(out, null, 2));
  // Console summary
  console.log('Built comparison.json');
  console.log('Totals:', JSON.stringify(totals, null, 2));
  console.log('\nSubject status breakdown:');
  for (const s of out.subject_matches) {
    console.log(`  [${s.status.padEnd(14)}]  ${s.subject.padEnd(50)}  Br ${s.bradford_count}  Kk ${s.kirklees_count}`);
  }
  console.log(`\nKirklees-only courses (no Bradford-subject match): ${unmatchedKirklees.length}`);
}

main();
