import https from 'https';
import fs from 'fs';
import path from 'path';

const API_KEY = 'c20f591a-ac18-442d-81b2-8b3aaf699e1c';
const BASE_DIR = path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Z]:)/, '$1');

function fetchPage(skip) {
  return new Promise((resolve, reject) => {
    const url = `https://www.reed.co.uk/api/1.0/search?locationName=Huddersfield&distanceFromLocation=15&resultsToTake=100&resultsToSkip=${skip}`;
    const options = {
      headers: { 'Authorization': 'Basic ' + Buffer.from(API_KEY + ':').toString('base64') }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function main() {
  const allJobs = [];
  const totalResults = 4631;

  for (let skip = 0; skip < totalResults; skip += 100) {
    const page = Math.floor(skip / 100) + 1;
    try {
      const data = await fetchPage(skip);
      const results = data.results || data;
      allJobs.push(...results);
      console.log(`Page ${page}: ${results.length} jobs (total so far: ${allJobs.length})`);
      // Small delay to be respectful
      await new Promise(r => setTimeout(r, 200));
    } catch (e) {
      console.log(`Page ${page} failed: ${e.message}`);
      break;
    }
  }

  // Save combined file
  const outPath = path.join(BASE_DIR, 'reed-all-huddersfield-combined.json');
  fs.writeFileSync(outPath, JSON.stringify({ totalResults: allJobs.length, fetchedAt: new Date().toISOString(), results: allJobs }, null, 2));
  console.log(`\nSaved ${allJobs.length} jobs to reed-all-huddersfield-combined.json`);

  // Quick stats
  const salaryJobs = allJobs.filter(j => j.minimumSalary > 0);
  const avgMin = salaryJobs.reduce((s, j) => s + j.minimumSalary, 0) / salaryJobs.length;
  const avgMax = salaryJobs.reduce((s, j) => s + j.maximumSalary, 0) / salaryJobs.length;
  console.log(`Jobs with salary data: ${salaryJobs.length}`);
  console.log(`Average salary range: £${Math.round(avgMin).toLocaleString()} - £${Math.round(avgMax).toLocaleString()}`);

  // Top employers
  const employers = {};
  allJobs.forEach(j => { employers[j.employerName] = (employers[j.employerName] || 0) + 1; });
  const topEmployers = Object.entries(employers).sort((a, b) => b[1] - a[1]).slice(0, 20);
  console.log('\nTop 20 employers:');
  topEmployers.forEach(([name, count]) => console.log(`  ${name}: ${count} jobs`));

  // Top locations
  const locations = {};
  allJobs.forEach(j => { locations[j.locationName] = (locations[j.locationName] || 0) + 1; });
  const topLocations = Object.entries(locations).sort((a, b) => b[1] - a[1]).slice(0, 15);
  console.log('\nTop locations:');
  topLocations.forEach(([name, count]) => console.log(`  ${name}: ${count} jobs`));
}

main().catch(console.error);
