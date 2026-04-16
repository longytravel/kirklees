import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const outDir = 'C:/Users/ROG/Projects/kirklees/data/jobs-skills';

function fetchUrl(url) {
  const mod = url.startsWith('https') ? https : http;
  return new Promise((resolve, reject) => {
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const loc = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        return fetchUrl(loc).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      res.on('error', reject);
    }).on('error', reject);
  });
}

const sources = [
  // APS employment/unemployment - try different dataset and params
  { name: 'nomis-aps-employment.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.data.csv?geography=E08000034&cell=403899649&measures=20100,20701&time=latest' },
  // Try labour market profile overview
  { name: 'nomis-labour-profile.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.data.csv?geography=E08000034&variable=18,45,84,111,720,721,722,723,724&measures=20100,20701&time=latest' },
  // BRES by broad industry - use SIC section codes
  { name: 'nomis-bres-by-industry.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_189_1.data.csv?geography=E08000034&industry=37748737,37748738,37748739,37748740,37748741,37748742,37748743,37748744,37748745&employment_status=1&measures=20100&time=latest' },
  // Claimant count - different params
  { name: 'nomis-claimant-count2.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_162_1.data.csv?geography=E08000034&sex=7&age=0&measure=1&measures=20100&time=2024-01,2024-02,2024-03,2024-04,2024-05,2024-06,2024-07,2024-08,2024-09,2024-10,2024-11,2024-12' },
  // Population estimates
  { name: 'nomis-population.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_31_1.data.csv?geography=E08000034&sex=7&age=0&measures=20100&time=latest' },
  // Jobs density
  { name: 'nomis-jobs-density.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_57_1.data.csv?geography=E08000034&item=1,3&measures=20100&time=latest' },
];

async function main() {
  for (const src of sources) {
    try {
      const data = await fetchUrl(src.url);
      const filePath = path.join(outDir, src.name);
      fs.writeFileSync(filePath, data);
      const size = Buffer.byteLength(data, 'utf8');
      if (size > 0) {
        const lines = data.split('\n');
        console.log(`OK: ${src.name} (${size} bytes, ${lines.length} lines)`);
        console.log(lines.slice(0, 3).join('\n'));
      } else {
        console.log(`EMPTY: ${src.name}`);
      }
      console.log('---');
    } catch (e) {
      console.log(`FAIL: ${src.name}: ${e.message}`);
    }
  }
}
main();
