/**
 * Pings IndexNow (Bing, Yandex, Seznam, Naver) with URLs from the live sitemap.
 *
 * IndexNow is push-based: instead of waiting for a crawl, you tell the engines
 * what changed. Bing matters more than its market share suggests here because it
 * feeds ChatGPT search results.
 *
 *   npm run indexnow                          # every URL in the sitemap
 *   npm run indexnow -- /service-areas/ocala  # just these paths
 *
 * The key file must already be live at the site root, or the API returns 403.
 * Deploy first, then run this.
 *
 * WHAT A 200 DOES AND DOESN'T MEAN
 * A 200 means the payload was well-formed and the key validated. It does not
 * mean the URLs were crawled, indexed, or that they'll appear in Bing Webmaster
 * Tools. BWT reports nothing at all for a site that isn't verified in your
 * account — and a property added as the apex (dcsisecurity.com) is a *different*
 * property from the www hostname this script submits under. If BWT looks empty,
 * check verification and the property hostname before suspecting this script.
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

// 2. Build the URL list. Explicit paths win; otherwise pull straight from the
//    live sitemap so the two can't drift.
const args = process.argv.slice(2).filter((a) => !a.startsWith("-"));
let urlList;

if (args.length) {
  urlList = args.map((a) => new URL(a, ORIGIN).toString());
  const foreign = urlList.filter((u) => new URL(u).host !== HOST);
  if (foreign.length) fail(`These URLs aren't on ${HOST}: ${foreign.join(", ")}`);
  console.log(`✓ ${urlList.length} URL(s) from the command line`);
} else {
  const smRes = await fetch(`${ORIGIN}/sitemap.xml`).catch(() => null);
  if (!smRes || !smRes.ok) fail(`Could not fetch ${ORIGIN}/sitemap.xml`);
  const xml = await smRes.text();
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urlList.length) fail("Sitemap contained no <loc> entries.");
  console.log(`✓ ${urlList.length} URLs from sitemap.xml`);
}

// 3. Submit. api.indexnow.org fans out to every participating engine, but Bing's
//    own endpoint is what populates the IndexNow report inside Bing Webmaster
//    Tools — submitting to both is the difference between "Microsoft accepted it"
//    and "it shows up in the dashboard you're actually looking at".
const ENDPOINTS = [
  ["IndexNow (all engines)", "https://api.indexnow.org/IndexNow"],
  ["Bing direct", "https://www.bing.com/indexnow"],
];

const EXPLAIN = {
  200: "URLs submitted successfully.",
  202: "Accepted — key validation pending.",
  400: "Bad request: invalid format.",
  403: "Forbidden: key not found at keyLocation, or it doesn't match.",
  422: "Unprocessable: URLs don't belong to this host, or the key doesn't match the schema.",
  429: "Too many requests — slow down and retry later.",
};

const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList });
let anyOk = false;

for (const [label, endpoint] of ENDPOINTS) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  }).catch((e) => ({ status: 0, text: async () => String(e) }));

  const ok = res.status === 200 || res.status === 202;
  anyOk ||= ok;
  console.log(
    `\n${ok ? "✓" : "✗"} ${label} → ${res.status} ${EXPLAIN[res.status] ?? "(unexpected status)"}`,
  );
  if (!ok) console.error(`  ${(await res.text().catch(() => "")).slice(0, 300)}`);
}

if (!anyOk) fail("Every endpoint rejected the submission.");

console.log(`\n✓ Submitted ${urlList.length} URLs as ${HOST}.

  Next: Bing Webmaster Tools → the property for ${ORIGIN} → IndexNow.
  Submissions can take 24–72h to appear there, and only ever appear if that
  exact hostname is a verified property in your account. Indexing is a separate
  decision Bing makes later — IndexNow only invites the crawl.
`);
