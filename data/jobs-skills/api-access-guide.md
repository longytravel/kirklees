# Job Vacancy API Access Guide for Kirklees/Huddersfield

## 1. Reed API (Recommended - Free)

**Base URL:** `https://www.reed.co.uk/api/1.0/`

### Getting an API Key
1. Visit https://www.reed.co.uk/developers/jobseeker
2. Click "Register" to create a developer account
3. You will receive an API key via email
4. Use the API key as the username in HTTP Basic Authentication (password is blank)

### Authentication
```bash
# The API key is used as the username with Basic Auth (no password)
curl -u "YOUR_API_KEY:" "https://www.reed.co.uk/api/1.0/search?locationName=Huddersfield"
```

### Search Endpoint
```
GET https://www.reed.co.uk/api/1.0/search
```

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| keywords | Search keywords |
| locationName | Location (e.g., "Huddersfield") |
| distanceFromLocation | Radius in miles (default: 10) |
| permanent | true/false |
| contract | true/false |
| temp | true/false |
| partTime | true/false |
| fullTime | true/false |
| minimumSalary | e.g., 20000 |
| maximumSalary | e.g., 30000 |
| postedByRecruitmentAgency | true/false |
| postedByDirectEmployer | true/false |
| graduate | true/false |
| resultsToTake | Max 100 results per request |
| resultsToSkip | For pagination |

### Example: Huddersfield Jobs
```bash
curl -u "YOUR_API_KEY:" \
  "https://www.reed.co.uk/api/1.0/search?locationName=Huddersfield&distanceFromLocation=15&resultsToTake=100"
```

### Job Detail Endpoint
```
GET https://www.reed.co.uk/api/1.0/jobs/{jobId}
```

**Returns:** Full job description, salary (yearly min/max), contract type, expiration date, external URL.

---

## 2. Adzuna API (Free Tier Available)

**Base URL:** `https://api.adzuna.com/v1/api/jobs/gb/`

### Getting an API Key
1. Visit https://developer.adzuna.com/signup
2. Register for a free account
3. You receive an `app_id` and `app_key`

### Search Endpoint
```
GET https://api.adzuna.com/v1/api/jobs/gb/search/{page}
```

### Example
```bash
curl "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&where=Huddersfield&distance=15&results_per_page=50"
```

### Salary Data Endpoint
```
GET https://api.adzuna.com/v1/api/jobs/gb/history
```
Returns historical salary data - useful for labour market intelligence.

### Labour Market Intelligence
Adzuna also offers enterprise-level data including:
- Historical job data
- Standardised job titles and skills
- Full job details
Contact: https://www.adzuna.co.uk/hire/labour-market-intelligence

---

## 3. DWP Find a Job

**URL:** https://findajob.dwp.gov.uk/

- No public API available for programmatic access
- Web search only: `https://findajob.dwp.gov.uk/search?loc=Huddersfield&pp=25`
- Blocked by Cloudflare when accessed via curl; requires browser session
- Best used for manual searching or browser automation

---

## 4. Current Huddersfield/Kirklees Job Market Snapshot (April 2026)

From Reed.co.uk (scraped 2026-04-15):
- **239 jobs** currently listed in Huddersfield area
- **167 permanent**, 46 temporary, 26 contract positions
- **232 full-time**, 20 part-time
- **Top sectors:** Education (45), Engineering (35), Healthcare (25), Finance (20), Construction (18), Manufacturing (15), IT (12)

---

## 5. NOMIS Labour Market Data

For official ONS labour market statistics:

**Correct Kirklees geography code: 1774190688** (type 423, county/unitary as of April 2023)

Note: The previously used code 1946157188 maps to Dudley, not Kirklees. The E08000034 GSS code works in URL paths but not as a `geography=` parameter value for data queries.

### Working API URLs

**Claimant Count:**
```
https://www.nomisweb.co.uk/api/v01/dataset/NM_162_1.data.csv?geography=1774190688&date=latest&gender=0&age=0&measure=1,2,3,4&measures=20100
```

**APS Employment:**
```
https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.data.csv?geography=1774190688&date=latest&variable=18,45,84,111,248,249&measures=20599,20100
```

**APS Qualifications:**
```
https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.data.csv?geography=1774190688&date=latest&variable=290,291,292,346,1180,1181,1182&measures=20599,20100
```

Note: NVQ qualification variables (290-299, 346) are currently suppressed for Kirklees due to small sample sizes. Training variables (1180-1182) do return data.

### Key Kirklees Statistics (Latest)
- Claimant count: 13,090 (4.7% of working-age population) - Feb 2026
- Employment rate: 74.9% (aged 16-64) - Oct 2024-Sep 2025
- Unemployment rate: 4.6% (aged 16-64) - Oct 2024-Sep 2025
- Economic activity rate: 78.5% (aged 16-64)
- Economic inactivity: 21.5% (aged 16-64)
- Employees: 66.2%, Self-employed: 8.6%
- Job-related training (last 4 weeks): 17.9% of employees
