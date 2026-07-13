// Ping IndexNow (Bing, Yandex, Seznam, …) with every URL from the live sitemap.
// Bing's index also feeds ChatGPT Search and Perplexity, so this helps AI agents too.
//
// Run AFTER deploying to production:  npm run indexnow
// (The key file public/<KEY>.txt must be live at https://codage.hr/<KEY>.txt)

const HOST = 'codage.hr';
const KEY = '710caab854f648a7d30f6d001181c944';

const sitemapUrl = `https://${HOST}/sitemap.xml`;
const res = await fetch(sitemapUrl);
if (!res.ok) {
    console.error(`Could not fetch ${sitemapUrl}: ${res.status}`);
    process.exit(1);
}
const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (urlList.length === 0) {
    console.error('No <loc> URLs found in sitemap.');
    process.exit(1);
}

const ping = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList,
    }),
});

console.log(`IndexNow: ${ping.status} ${ping.statusText}  (${urlList.length} URLs)`);
urlList.forEach((u) => console.log('  •', u));
process.exit(ping.ok ? 0 : 1);
