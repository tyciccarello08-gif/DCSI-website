/**
 * Pings IndexNow (Bing, Yandex, Seznam, Naver) with every URL in the sitemap.
 *
 * IndexNow is push-based: instead of waiting for a crawl, you tell the engines
 * what changed. Bing matters more than its market share suggests here because it
 * feeds ChatGPT search results.
 *
 *   npm run indexnow
 *
 * The key file must already be live at the site root, or the API returns 403.
 * Deploy first, then run this.
 */

const KEY = "be22a144153c4ea7aa6f291fb0ed210d";
const HOST = "www.dcsisecurity.com";
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;

const fail = (msg) => {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
};

// 1. Confirm the key file is actually reachable — this is the failure that
//    produces a confusing 403 from the API rather than a clear error.
const keyRes = await fetch(KEY_LOCATION).catch(() => null);
if (!keyRes || !keyRes.ok) {
  fail(`Key file not reachable at ${KEY_LOCATION} (${keyRes ? keyRes.status : "no response"}).\n  Deploy the site before running this.`);
}
const keyBody = (await keyRes.text()).trim();
if (keyBody !== KEY) {
  fail(`Key file at ${KEY_LOCATION} contains "${keyBody}", expected "${KEY}".`);
}
console.log(`✓ key file verified at ${KEY_LOCATION}`);

// 2. Pull the URL list straight from the live sitemap so the two can't drift.
const smRes = await fetch(`${ORIGIN}/sitemap.xml`).catch(() => null);
if (!smRes || !smRes.ok) fail(`Could not fetch ${ORIGIN}/sitemap.xml`);
const xml = await smRes.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) fail("Sitemap contained no <loc> entries.");
console.log(`✓ ${urlList.length} URLs from sitemap.xml`);

// 3. Submit.
const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

const EXPLAIN = {
  200: "URLs submitted successfully.",
  202: "Accepted — key validation pending.",
  400: "Bad request: invalid format.",
  403: "Forbidden: key not found at keyLocation, or it doesn't match.",
  422: "Unprocessable: URLs don't belong to this host, or the key doesn't match the schema.",
  429: "Too many requests — slow down and retry later.",
};

console.log(`\nIndexNow responded ${res.status}: ${EXPLAIN[res.status] ?? "(unexpected status)"}`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text().catch(() => ""));
  process.exit(1);
}
console.log(`\n✓ Submitted ${urlList.length} URLs.\n`);
