# Kirklees College Demo — Build Session Handover

## Context

**Date:** 16 April 2026
**Client:** Kirklees College (https://www.kirkleescollege.ac.uk/)
**Purpose:** A representative from Kirklees College is visiting. We're demonstrating vibe coding by building a working prototype live during their visit. They pick ONE idea from a menu of 5 (or suggest their own), and we build it while they tour / attend meetings. We then walk through what we've built together.

**Live site:** https://kirklees.vercel.app
**Repo:** https://github.com/longytravel/kirklees
**Vercel project:** marks-projects-724fd891/kirklees (auto-deploys on push to main)

---

## What's Already Done

### 1. Presentation Website (DEPLOYED)
- `/` — Landing page pitching vibe coding, the 5 demo options, and "bring your own idea"
- `/how-it-works` — Leave-behind explaining BMAD, AI agents, Claude Code, costs, comparison with traditional dev
- Branded with Kirklees College colours, logo, and typography
- Deployed to Vercel, auto-deploys on `git push`

### 2. Branding Extracted
All in `data/branding/`:
- `logo.svg` — Master logo (SVG)
- `favicon.svg` — Chevron icon (SVG)
- `what-will-you-be-logo.svg` — Campaign logo
- `brand-guide.md` — Full colour palette, fonts, Tailwind theme config

**Key colours:**
| Role | Hex |
|------|-----|
| Navy (primary) | `#00264a` |
| Teal (accent/CTA) | `#00abc1` |
| Green (secondary) | `#63ac5f` |
| Logo teal | `#096080` |

**Font:** Avenir (proprietary) — we use Nunito Sans from Google Fonts as web substitute.

### 3. Data Gathered (ALL in `data/` folder)

This is the critical asset. All data is downloaded and ready to use regardless of which option they pick.

#### `data/jobs-skills/` — Labour Market Intelligence
| File | Description | Rows/Size |
|------|-------------|-----------|
| `reed-all-huddersfield-combined.json` | **4,631 live job vacancies** — title, employer, salary, description, location | ~40MB |
| `reed-engineering.json` | Engineering jobs (100 of 613 total) | 87KB |
| `reed-healthcare.json` | Healthcare jobs (100 of 467 total) | 87KB |
| `reed-construction.json` | Construction jobs (100 of 360 total) | 87KB |
| `reed-apprenticeships.json` | Apprenticeship vacancies (100 of 212 total) | 87KB |
| `reed-digital-it.json` | Digital/IT jobs (29 total) | 25KB |
| `reed-dewsbury.json` | Dewsbury area jobs (100 of 3,421 total) | 87KB |
| `nomis-bres-sic-sections.csv` | Employment by sector — 21 SIC sections, Kirklees 2024 | 42 rows |
| `nomis-bres-by-industry.csv` | Employment by broad industry | 18 rows |
| `nomis-bres-sectors.csv` | BRES sector totals | 2 rows |
| `nomis-business-counts.csv` | Business counts by sector | 22 rows |
| `nomis-earnings.csv` | Median annual salary: £30,238 | 1 row |
| `nomis-population.csv` | Population: 447,847 | 1 row |
| `nomis-jobs-density.csv` | 183,000 total jobs, density 0.66 | 2 rows |
| `nomis-claimant-count.csv` | 13,090 claimants, 4.7% rate (Feb 2026) | 5 rows |
| `nomis-aps-employment.csv` | Employment rate 74.9%, unemployment 4.6% | 7 rows |
| `nomis-qualifications.csv` | Training data (17.9% received job-related training) | 8 rows |
| `apprenticeships-kirklees-2025-26.csv` | **Kirklees apprenticeship stats** — starts, achievements, participation by level | 288 rows |
| `lsip-west-yorkshire-2023.pdf` | West Yorkshire Local Skills Improvement Plan | 2MB |
| `lsip-progress-report-2025.pdf` | LSIP progress report | 1MB |
| `lsip-fund-brochure-2024.pdf` | LSIP fund brochure | 4MB |
| `api-access-guide.md` | How to use Reed and Adzuna APIs | — |
| `fetch-all-reed.mjs` | Script to re-fetch all Reed data (run with `node`) | — |

**Reed API key:** `c20f591a-ac18-442d-81b2-8b3aaf699e1c` (free tier, basic auth with key as username, empty password)

**NOMIS API:** Free, no key required. Kirklees geography code: `1774190688` (type 423). Use `E08000034` for metadata lookups only.

#### `data/apprenticeships/` — Apprenticeship Intelligence
| File | Description | Rows/Size |
|------|-------------|-----------|
| `faa_vacancies_final.json` | **91 live apprenticeship vacancies** near Huddersfield — employer, location, wage, level, course | 116KB |
| `faa_vacancies.csv` | CSV version of above | 37KB |
| `ifate_relevant_standards.json` | **640 apprenticeship standards** relevant to Kirklees economy — with KSBs, funding, job titles | 370KB |
| `ifate_standards.json` | Complete IfATE database (1,839 standards) | 66MB |
| `ifate_standards.csv` | CSV of relevant standards | 73KB |
| `ees_sector_stats.json` | Apprenticeship starts by sector, 2002-2024 time series | 92 records |
| `ees_level_stats.json` | Apprenticeship starts by level, time series | 30 records |
| `ees_sector_fasttrack.json` | Full sector table with metadata | 60KB |
| `ees_level_fasttrack.json` | Full level table with metadata | 26KB |

**Key apprenticeship numbers (Kirklees 2025/26):**
- 1,980 starts | 810 achievements | 5,730 participating
- By level: 390 Intermediate, 850 Advanced, 730 Higher

#### `data/competitor-courses/` — Competitor Intelligence
| File | Description |
|------|-------------|
| `competitor-profiles.json` | **8 competitor institutions** — courses, Ofsted, student numbers, marketing, campuses |
| `ofsted-comparison.json` | Side-by-side Ofsted ratings (2 Outstanding, 6 Good) |
| `competitive-analysis.json` | Gaps, threats, overlap matrix, catchment competition levels |
| `research-summary.md` | Narrative summary |

**Key competitors:** Greenhead College (Outstanding, 99% A-level pass rate), Huddersfield New College (Good), Calderdale College (Good, Outstanding apprenticeships), Bradford College (Good, Apprenticeship Provider of the Year 2026), Wakefield College, Leeds City College, Barnsley College (Outstanding)

**Identified curriculum gaps:** Dental Nursing, Pharmacy, Textiles/Fashion, Performing Arts, Law, Counselling/Psychology

**Kirklees unique strengths:** Only T Level provider in Kirklees (8 programmes), specialist Engineering/Construction/Animal Care centres, dual-town presence (Huddersfield + Dewsbury)

#### `data/reviews-sentiment/` — Reputation Intelligence
| File | Description |
|------|-------------|
| `kirklees-college-reviews.json` | Reviews from Trustpilot, RateMyApprenticeship (8.9/10, 83 reviews), WhatUni, UniCompare, Glassdoor (3.0/5 employer) |
| `competitor-reviews.json` | Sentiment profiles for Greenhead, Huddersfield New, Calderdale, Bradford |
| `fe-choices-achievement-data.json` | FE Choices data sources (learner satisfaction survey discontinued) |
| `research-summary.md` | Narrative summary |

**Key sentiment:** Positive overall (7.5/10 estimate). Top themes: staff quality, facilities, apprenticeships. Main weakness: attendance/punctuality (Ofsted noted). Social: Facebook 14K, Instagram 8.3K.

#### `data/public-stats/` — Demographics & Deprivation
| File | Description | Rows |
|------|-------------|------|
| `imd2019_kirklees.csv` | **IMD deprivation by LSOA** — income, employment, education, health, crime, housing, living environment | 259 |
| `imd2019_all_scores.csv` | National IMD dataset (for benchmarking) | 32,844 |
| `census2021_kirklees_age.csv` | Age breakdown (26,867 aged 15-19) | 38 |
| `census2021_kirklees_ethnicity.csv` | Ethnicity (70.5% White British) | 40 |
| `census2021_kirklees_qualifications.csv` | Qualifications and economic activity (56.1% econ. active) | 62 |
| `census2021_kirklees_density.csv` | Population density by area | 1,888 |
| `kirklees_college_ofsted_2023.pdf` | Full Ofsted inspection report | — |

#### `docs/` — Existing College Documents
- `kirklees-accountability-2025-26.pdf` — College accountability agreement
- `kirklees-financial-statements-2023-24.docx` — Financial statements

#### `idea-deep-dives/` — Previous Research
- `kirklees-service-opportunity-longlist-report-2026-03-01.html` — 15-idea longlist with build blueprints, data scoring, and comparison matrix

---

## The 5 Demo Options

When they pick one, here's what to build and which data to use:

### Option 1: Local Skills Demand Dashboard
**Data:** `reed-all-huddersfield-combined.json` + `nomis-bres-sic-sections.csv` + `nomis-earnings.csv` + `apprenticeships-kirklees-2025-26.csv` + LSIP PDFs
**Build:** Dashboard with job vacancy trends by sector, salary distribution chart, top employers table, skills word cloud from job descriptions, sector employment pie chart. Compare what employers want (from jobs) vs what the college teaches (from competitor-profiles.json Kirklees entry).
**Key insight to surface:** Manufacturing is 15.4% of Kirklees employment (25,000 jobs) — much higher than national average. Engineering has 613 live vacancies. Digital/IT only has 29 — is that a gap or a reality?

### Option 2: Apprenticeship Opportunity Scanner
**Data:** `faa_vacancies_final.json` + `reed-apprenticeships.json` + `ifate_relevant_standards.json` + `apprenticeships-kirklees-2025-26.csv` + `ees_sector_stats.json`
**Build:** Map of live vacancies, employer list with partnership status, standards coverage matrix, level breakdown chart, time series trend, top apprenticeship courses table.
**Key insight to surface:** Level 3 dominates (50 of 91 vacancies). Top courses: Early Years Educator, Business Administrator, Dental Nurse. Bradford won National Provider of the Year — what's Kirklees's counter-strategy?

### Option 3: Competitor Course Tracker
**Data:** `competitor-profiles.json` + `ofsted-comparison.json` + `competitive-analysis.json` + `competitor-reviews.json`
**Build:** Competitor comparison matrix, Ofsted ratings table, subject overlap heatmap, catchment map, gap analysis cards, marketing message comparison.
**Key insight to surface:** Kirklees is the ONLY T Level provider in the borough — huge differentiator. But Greenhead (Outstanding, 99% pass) dominates academic pathways. 6 curriculum gaps no competitor fills.

### Option 4: Widening Participation Radar
**Data:** `imd2019_kirklees.csv` + `census2021_kirklees_*.csv` + campus locations
**Build:** Deprivation heatmap by LSOA, demographic breakdown charts, campus accessibility overlay, ward-level comparison tables, education skills sub-domain analysis, children & young people deprivation view.
**Key insight to surface:** Some Kirklees LSOAs are in the most deprived 10% nationally (decile 1, IMD score 52.7). Cross-reference with campus locations to show reach gaps. Age 15-19 cohort is 26,867 — that's the addressable market.
**Note:** For a map, use Leaflet.js with LSOA boundaries from ONS Open Geography Portal (https://geoportal.statistics.gov.uk/).

### Option 5: Student Sentiment Monitor
**Data:** `kirklees-college-reviews.json` + `competitor-reviews.json` + `fe-choices-achievement-data.json`
**Build:** Sentiment dashboard with platform-by-platform ratings, theme analysis (word clouds or categorised cards), competitor benchmark bar chart, Ofsted strengths/weaknesses cards, social media metrics, review timeline.
**Key insight to surface:** RateMyApprenticeship 8.9/10 (Top 5 nationally) is a massive strength being under-promoted. Glassdoor 3.0/5 as employer suggests internal culture issues. Attendance is the main Ofsted concern.

### Option 6: Their Own Idea
If they bring their own idea, use BMAD:
1. Invoke `bmad-agent-analyst` (Mary) to research and scope
2. Use `bmad-brainstorming` to explore the idea
3. Create a product brief with `bmad-product-brief`
4. Build with `bmad-quick-dev` or the full BMAD dev cycle

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.5 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Hosting | Vercel (auto-deploys from main) |
| Data | Static JSON/CSV files in `data/` |
| Fonts | Nunito Sans (Google Fonts — Avenir substitute) |

## Project Structure
```
kirklees/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Landing page (the pitch)
│   ├── layout.tsx         # Root layout with fonts
│   ├── globals.css        # Tailwind + Kirklees theme + animations
│   └── how-it-works/
│       └── page.tsx       # BMAD/methodology leave-behind page
├── src/components/
│   └── kirklees-ui.tsx    # Shared components (nav, footer, chevron, divider)
├── public/
│   ├── kirklees-logo.svg  # College logo
│   └── favicon.svg        # Chevron favicon
├── data/                   # ALL gathered data (not deployed to Vercel)
│   ├── jobs-skills/       # Reed API jobs, NOMIS stats, LSIP PDFs, apprenticeship stats
│   ├── apprenticeships/   # gov.uk vacancies, IfATE standards, EES time series
│   ├── competitor-courses/ # 8 competitor profiles, Ofsted, gap analysis
│   ├── reviews-sentiment/ # Reviews from 5 platforms, competitor sentiment
│   ├── public-stats/      # IMD deprivation, Census 2021, Ofsted report
│   └── branding/          # Logo SVGs, colour palette, brand guide
├── docs/                   # College documents (accountability, financials)
├── idea-deep-dives/        # Previous research report
└── HANDOVER.md            # This file
```

## Commands
```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npx vercel --yes --scope marks-projects-724fd891 --prod   # Deploy to production
```

## Key Decisions for Tomorrow

1. **When they pick an option:** Create a new route (e.g., `/dashboard`) for the demo build. Keep the presentation pages intact.
2. **Data loading:** For the prototype, import JSON directly or use Next.js API routes. No database needed for demo.
3. **Charts:** Use Recharts (install with `npm install recharts`) — works well with Next.js and is fast to set up.
4. **Maps (if Option 4):** Use `react-leaflet` + `leaflet`. LSOA boundaries available from ONS as GeoJSON.
5. **Speed over polish:** The demo impact comes from "you built this while I was in a meeting," not from pixel perfection. Get data on screen fast, polish if time allows.
6. **Show the AI conversation:** If possible, have Claude Code visible on a second screen so they can see the vibe coding happening live. That's the real demo.

## What to Say Tomorrow

**Key message:** "This isn't a vendor pitch. This is a capability demonstration. We're showing you that with a $100/month AI subscription and the right methodology, any organisation can build custom tools in hours instead of months — without needing a development team."

**Don't say:** "We'll have it finished before you leave." (We might, but don't promise it.)

**Do say:** "We'll start building it now and you'll see real progress. We can continue refining it after today."
