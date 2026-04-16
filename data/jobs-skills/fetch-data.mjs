import https from 'https';
import fs from 'fs';
import path from 'path';

const outDir = 'C:/Users/ROG/Projects/kirklees/data/jobs-skills';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

const sources = [
  { name: 'nomis-employment-rate.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.data.csv?geography=E08000034&variable=45&measures=20100,20701&time=latest' },
  { name: 'nomis-unemployment-rate.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.data.csv?geography=E08000034&variable=84&measures=20100,20701&time=latest' },
  { name: 'nomis-qualifications.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.data.csv?geography=E08000034&variable=720,721,722,723,724&measures=20100,20701&time=latest' },
  { name: 'nomis-bres-sectors.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_189_1.data.csv?geography=E08000034&industry=37748736...37748745&employment_status=1&measures=20100&time=latest' },
  { name: 'nomis-claimant-count.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_162_1.data.csv?geography=E08000034&sex=7&age=0&measure=1&measures=20100&time=latest' },
  { name: 'nomis-earnings.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_30_1.data.csv?geography=E08000034&sex=7&item=2&pay=7&measures=20100&time=latest' },
  { name: 'lsip-west-yorkshire-2023.pdf', url: 'https://democracy.kirklees.gov.uk/documents/s53797/Appendix%20C%20-LSIP_West_Yorkshire_2023.pdf' },
  { name: 'lsip-progress-report-2025.pdf', url: 'https://wnychamber.co.uk/wp-content/uploads/2025/06/West-Yorkshire-LSIP-Progress-Report-June-2025-REPORT-and-ROADMAP-PUBLISH.pdf' },
  { name: 'lsip-fund-brochure-2024.pdf', url: 'https://wnychamber.co.uk/wp-content/uploads/2025/02/WYCC-Local-Skills-Improvement-Fund-2024-BROCHURE-WEB.pdf' },
];

async function main() {
  for (const src of sources) {
    try {
      const data = await fetchUrl(src.url);
      const filePath = path.join(outDir, src.name);
      fs.writeFileSync(filePath, data);
      const size = fs.statSync(filePath).size;
      const preview = src.name.endsWith('.csv') ? data.split('\n').slice(0, 3).join('\n') : `[Binary PDF, ${size} bytes]`;
      console.log(`OK: ${src.name} (${size} bytes)`);
      console.log(preview);
      console.log('---');
    } catch (e) {
      console.log(`FAIL: ${src.name}: ${e.message}`);
    }
  }
}
main();
