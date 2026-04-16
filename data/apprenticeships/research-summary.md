# Apprenticeship Data Research Summary

**Date:** 2026-04-15
**Area:** Kirklees / Huddersfield (HD1), West Yorkshire, UK
**Purpose:** Power the "Apprenticeship Opportunity Scanner" demo for Kirklees College

---

## Data Sources & What Was Collected

### 1. Find an Apprenticeship (FAA) - Live Vacancy Data
- **Source:** https://www.findapprenticeship.service.gov.uk/
- **Method:** Web scraping of search results + individual vacancy pages (30-mile radius of HD1 1DY)
- **Records:** 91 live apprenticeship vacancies
- **Fields:** vacancy ID, title, employer, location, wage, training course, level, duration, start date, closing date, positions available, training provider, description, URL
- **Format:** JSON (`faa_vacancies_final.json`) and CSV (`faa_vacancies.csv`)
- **Richness:** HIGH - real employer names, locations, wages, course details
- **Key Stats:**
  - 83 unique employers
  - Level breakdown: Level 2 (31), Level 3 (50), Level 4 (4), Level 5 (4), Level 6 (2)
  - Top courses: Early Years Educator L3 (11), Business Administrator L3 (9), Dental Nurse L3 (7), Customer Service Practitioner L2 (6)
  - Notable employers: Kirklees College, WSP UK Limited, Nufarm UK Limited, Perrys Group

#### FAA API Notes
- The public-facing search at `/apprenticeships` is server-rendered HTML (not a JSON API)
- A developer API exists at https://developer.apprenticeships.education.gov.uk/ but requires registration and API key
- The Display Vacancy Advert API (v2) allows filtering by location, sector, level - must migrate to v2 by 1 April 2026
- Rate limit: 150 requests per 5 minutes
- API version must be specified via `X-version` header

### 2. IfATE / Skills England - Apprenticeship Standards
- **Source:** https://www.instituteforapprenticeships.org/api/apprenticeshipstandards (now Skills England)
- **Method:** Direct JSON API (public, no auth required)
- **Records:** 1,839 total standards; 640 relevant to Kirklees economy (filtered to active standards in relevant routes)
- **Fields:** reference number, LARS code, title, level, route/sector, typical duration, max funding, overview of role, typical job titles, keywords, occupational summary, KSBs (knowledge, skills, behaviours), entry requirements, qualifications
- **Format:** Full dataset `ifate_standards.json` (68 MB), curated `ifate_relevant_standards.json` (370 KB), CSV `ifate_standards.csv` (73 KB)
- **Richness:** VERY HIGH - comprehensive standard specifications with full KSB frameworks
- **Key Routes:**
  - Engineering & Manufacturing: 433 standards
  - Health & Science: 279
  - Construction & Built Environment: 265
  - Creative & Design: 123
  - Agriculture, Environmental & Animal Care: 111
  - Legal, Finance & Accounting: 110
  - Business & Administration: 104

### 3. Explore Education Statistics (EES) - National & Regional Statistics
- **Source:** https://explore-education-statistics.service.gov.uk/find-statistics/apprenticeships
- **Method:** Next.js page data extraction + fast-track table API
- **Records:** 92 sector-level time series records (2002-2024), 30 level time series records
- **Fields:** time period, geographic level, location, sector/subject area, apprenticeship level, starts count, achievements count, participation
- **Format:** JSON files (`ees_sector_stats.json`, `ees_level_stats.json`, `ees_sector_fasttrack.json`, `ees_level_fasttrack.json`)
- **Richness:** MEDIUM-HIGH - national aggregates with sector and level breakdowns over 20+ years
- **Notes:**
  - Release ID: `462edbbd-6f41-40ca-b054-4e07f76ea292` (latest release)
  - 2024-25 release also available (ID: `cd40bdd7-0927-4ccd-8197-37668e1da233`)
  - Bulk CSV download available but files are very large (50MB+)
  - Featured tables available via fast-track API for specific breakdowns
  - Data tables builder at https://explore-education-statistics.service.gov.uk/data-tables/apprenticeships allows custom queries

### 4. West Yorkshire Combined Authority (WYCA)
- **Source:** https://www.westyorks-ca.gov.uk/
- **Status:** Skills/training page returned 404 (site may have been restructured)
- **Alternative:** WYCA publishes skills reports and labour market intelligence periodically - check https://www.westyorks-ca.gov.uk/growing-the-economy/ for current links

### 5. ESFA Data
- **Source:** Via Explore Education Statistics data catalogue
- **Status:** Data catalogue page accessible but specific API endpoints returned 404
- **Available via:** The EES platform above (which publishes ESFA apprenticeship data)

---

## File Inventory

| File | Size | Description |
|------|------|-------------|
| `faa_vacancies_final.json` | 116 KB | 91 live vacancies near Huddersfield with full details |
| `faa_vacancies.csv` | 37 KB | CSV version of vacancy data |
| `ifate_standards.json` | 68 MB | Complete IfATE/Skills England standards database (1,839 standards) |
| `ifate_relevant_standards.json` | 370 KB | Curated standards relevant to Kirklees (640 standards) |
| `ifate_standards.csv` | 73 KB | CSV of relevant standards (key fields only) |
| `ees_sector_stats.json` | 33 KB | Apprenticeship starts by sector (time series) |
| `ees_level_stats.json` | 15 KB | Apprenticeship starts by level (time series) |
| `ees_sector_fasttrack.json` | 60 KB | Full sector table data with metadata |
| `ees_level_fasttrack.json` | 26 KB | Full level table data with metadata |
| `ees_subject_meta.json` | 8 KB | Filter/dimension metadata for EES queries |
| `ees_table_starts_by_sector.json` | 170 KB | Raw EES table page data (sector) |
| `ees_table_starts_by_level.json` | 136 KB | Raw EES table page data (level) |

---

## Recommendations for the Demo

1. **Primary vacancy feed:** Use `faa_vacancies_final.json` for live vacancy display. Set up periodic scraping or register for the FAA Developer API for real-time data.

2. **Standards matching:** Use `ifate_relevant_standards.json` to match vacancies to apprenticeship standards and show career pathway information (KSBs, typical job titles, funding).

3. **Market context:** Use EES statistics to show sector trends and growth areas for apprenticeships nationally and in Yorkshire.

4. **API access:** Register at https://developer.apprenticeships.education.gov.uk/ for the official Display Vacancy Advert API v2 to get structured JSON data without scraping.

5. **Refresh frequency:** FAA vacancies change daily; IfATE standards update monthly; EES statistics update quarterly.

---

## API Endpoints Reference

| API | URL | Auth | Format |
|-----|-----|------|--------|
| IfATE Standards | `https://www.instituteforapprenticeships.org/api/apprenticeshipstandards` | None | JSON |
| FAA Developer API | `https://developer.apprenticeships.education.gov.uk/` | API Key required | JSON |
| Skills England Occ Maps | `https://occupational-maps.skillsengland.education.gov.uk/public-api/` | Unknown | JSON |
| EES Fast-track Tables | `https://explore-education-statistics.service.gov.uk/data-tables/fast-track/{tableId}` | None (page data) | HTML+JSON |
| EES Release Files | `https://content.explore-education-statistics.service.gov.uk/api/releases/{releaseId}/files` | None | JSON/CSV |
