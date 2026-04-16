import https from 'https';
import fs from 'fs';
import path from 'path';

const outDir = 'C:/Users/ROG/Projects/kirklees/data/jobs-skills';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
  // BRES detailed SIC sections A-U for Kirklees
  { name: 'nomis-bres-sic-sections.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_189_1.data.csv?geography=E08000034&industry=150994945,150994946,150994947,150994948,150994949,150994950,150994951,150994952,150994953,150994954,150994955,150994956,150994957,150994958,150994959,150994960,150994961,150994962,150994963,150994964,150994965&employment_status=1&measures=20100&time=latest' },
  // APS - try the actual APS dataset NM_17_5 with different variable codes
  // Employment rate 16-64
  { name: 'nomis-aps-emprate.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.data.csv?geography=E08000034&cell=403899905&measures=20100,20701&time=latest' },
  // Try NM_17_1 instead (older APS format)
  { name: 'nomis-aps-v2.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_17_1.data.csv?geography=E08000034&variable=45,84,720,721,722,723,724&measures=20100,20701&time=latest' },
  // Business counts by industry
  { name: 'nomis-business-counts.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_142_1.data.csv?geography=E08000034&industry=150994945...150994965&employment_sizeband=0&legal_status=0&measures=20100&time=latest' },
  // Claimant count with correct geography type
  { name: 'nomis-claimant-v2.csv', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_162_1.data.csv?geography=1820328028&sex=7&age=0&measure=1&measures=20100&time=latest' },
];

async function main() {
  for (const src of sources) {
    try {
      const data = await fetchUrl(src.url);
      const filePath = path.join(outDir, src.name);
      fs.writeFileSync(filePath, data);
      const size = Buffer.byteLength(data, 'utf8');
      const lines = data.split('\n');
      console.log(`${size > 0 ? 'OK' : 'EMPTY'}: ${src.name} (${size} bytes, ${lines.length} lines)`);
      if (size > 0 && lines.length > 1) {
        // Show header + first 2 data rows
        console.log(lines.slice(0, Math.min(3, lines.length)).join('\n'));
      }
      console.log('---');
    } catch (e) {
      console.log(`FAIL: ${src.name}: ${e.message}`);
    }
  }
}
main();
