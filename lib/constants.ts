/** Canonical origin. Every absolute URL (metadata, sitemap, JSON-LD) derives from this. */
export const SITE_URL = "https://www.dcsisecurity.com";

export const CONTACT = {
  address: "128 W. Lutz Lake Fern Rd, Lutz, FL 33548",
  phone: "(813) 949-6500",
  phoneHref: "tel:8139496500",
  /** E.164 — required format for schema.org / Google Business Profile matching. */
  phoneE164: "+1-813-949-6500",
  fax: "(813) 949-6599",
  email: "info@dcsisecurity.com",
  // The Lutz office sits on the Hillsborough/Pasco line. Leading with one county
  // gave away the Pasco market — Wesley Chapel, Land O' Lakes, Odessa, Trinity —
  // which is both closer to the office and where the new construction is.
  serviceArea: "Hillsborough & Pasco Counties — Venice to Ocala",
  serviceAreaLong:
    "Hillsborough and Pasco Counties, Florida — including Lutz, Wesley Chapel, Land O' Lakes, Odessa, Carrollwood, Westchase, New Tampa, Brandon, and Tampa — with monitoring and scheduled installation across Central Florida from Venice and Bradenton north to Ocala and east to Lakeland and Winter Haven",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=128+W+Lutz+Lake+Fern+Rd+Lutz+FL+33548",
  /**
   * Google Maps "place" embed for the contact page. Uses the keyless /maps?output=embed
   * form so no API key ships to the browser.
   */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=128+W+Lutz+Lake+Fern+Rd,+Lutz,+FL+33548&output=embed",
  /**
   * SET THIS: paste the "Get more reviews" short link from the Google Business
   * Profile dashboard (looks like https://g.page/r/XXXXXXXX/review). Until it is
   * filled in, every review call-to-action stays hidden rather than linking nowhere.
   */
  googleReviewUrl: "",
};

/**
 * SET THESE: search-engine site verification tokens.
 *
 * Bing Webmaster Tools reports nothing — not IndexNow submissions, not index
 * coverage — for a site that isn't verified in the account. IndexNow returning
 * HTTP 200 only means Microsoft accepted the payload; it says nothing about
 * whether the URLs show up in your BWT dashboard. Verification is what connects
 * the two.
 *
 * Bing:   Webmaster Tools → Add a site → "HTML Meta Tag" → copy the `content`
 *         value out of <meta name="msvalidate.01" content="…">.
 * Google: Search Console → Add property → HTML tag → the `content` value.
 *
 * IMPORTANT: verify the property that matches SITE_URL exactly — the www
 * hostname. A property added as the bare apex (dcsisecurity.com) is a different
 * property in both tools and will show an empty report while www collects data.
 * Left blank, no meta tag renders.
 */
export const SEARCH_VERIFICATION = {
  bing: "",
  google: "",
};

/**
 * SET THIS: DCSI's Florida alarm system contractor license number (EF/EC/ES prefix,
 * verifiable at myfloridalicense.com). Florida expects the license number on
 * advertising, and it is a direct trust/E-E-A-T signal. Left blank, nothing renders.
 */
export const LICENSE = {
  number: "",
  label: "FL Alarm System Contractor License",
};

/**
 * SET THESE: real price ranges for the cost guide at /resources/security-system-cost.
 *
 * Deliberately left empty. Publishing invented numbers would either misrepresent
 * what DCSI charges or force the crew to honor a figure nobody agreed to — so the
 * price table stays hidden until real ranges are filled in. The rest of the page
 * (what drives cost, what to ask, what to avoid) publishes and ranks without them.
 *
 * `low`/`high` are whole dollars. Set `unit` to how it's billed.
 */
export interface PriceBand {
  item: string;
  low: number | null;
  high: number | null;
  unit: string;
  note: string;
}

export const PRICING: PriceBand[] = [
  {
    item: "Basic monitored alarm system (installed)",
    low: null,
    high: null,
    unit: "one-time",
    note: "Panel, keypad, entry contacts on main doors, one motion detector, and setup.",
  },
  {
    item: "Whole-home alarm system (installed)",
    low: null,
    high: null,
    unit: "one-time",
    note: "All exterior openings, multiple motions, glass break, smoke/CO, and smartphone control.",
  },
  {
    item: "Alarm monitoring",
    low: null,
    high: null,
    unit: "per month",
    note: "24/7 in-house monitoring with cellular communication. No long-term contract required.",
  },
  {
    item: "Camera system — 4 cameras (installed)",
    low: null,
    high: null,
    unit: "one-time",
    note: "Recorder, four cameras, cabling, mobile app setup, and walkthrough.",
  },
  {
    item: "Camera system — 8 cameras (installed)",
    low: null,
    high: null,
    unit: "one-time",
    note: "Typical coverage for a full perimeter on a standard suburban lot.",
  },
  {
    item: "New construction low voltage pre-wire",
    low: null,
    high: null,
    unit: "per home",
    note: "Security, camera, data, and audio rough-in before drywall. Builder volume pricing available.",
  },
];

/** True once someone has filled in at least one real range above. */
export const HAS_PRICING = PRICING.some((p) => p.low !== null && p.high !== null);

/**
 * SET THESE from the live Google Business Profile once reviews accumulate.
 *
 * Left null deliberately. AggregateRating markup must reflect ratings actually
 * displayed and verifiable — inventing a score or a count is both a Google
 * structured-data violation (manual action risk) and a straightforward
 * misrepresentation. The schema block stays out of the page until these are real.
 *
 * Update the count whenever it moves materially; a stale count is fine, a fake
 * one is not.
 */
export const REVIEWS = {
  ratingValue: null as number | null,
  reviewCount: null as number | null,
};

export const HAS_AGGREGATE_RATING =
  REVIEWS.ratingValue !== null && REVIEWS.reviewCount !== null && REVIEWS.reviewCount > 0;

/**
 * Structured postal address + coordinates, used by the LocalBusiness JSON-LD.
 *
 * VERIFY BEFORE LAUNCH: `latitude`/`longitude` are approximate (geocoded from the
 * street address) and `openingHours` is a placeholder. Both should be copied from
 * the live Google Business Profile so the site and the GBP listing agree — search
 * engines treat a mismatch as a weak signal.
 */
export const BUSINESS = {
  streetAddress: "128 W. Lutz Lake Fern Rd",
  addressLocality: "Lutz",
  addressRegion: "FL",
  postalCode: "33548",
  addressCountry: "US",
  latitude: 28.1512,
  longitude: -82.4617,
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
  ],
  priceRange: "$$",
  /** Add real profile URLs (Google Business, Facebook, BBB, Yelp) — these become sameAs links. */
  sameAs: [] as string[],
};

/**
 * Target markets with a dedicated city page. Ordered by proximity to the Lutz
 * office, which is also roughly the order Google's proximity weighting favors.
 *
 * `communities` are neighborhoods and CDDs within each market. They describe
 * where DCSI *serves*, never where DCSI has worked — no job history is implied.
 * Worth a sanity check against the areas the crew actually covers.
 */
export interface City {
  slug: string;
  name: string;
  county: string;
  zips: string[];
  communities: string[];
  /** One paragraph on what the local housing stock means for security work. */
  marketNote: string;
  /** Drive time from the Lutz office, kept vague enough to stay true in traffic. */
  proximity: string;
  /**
   * `core` = Hillsborough/Pasco, minutes from the office, where "this is our
   * neighborhood" is literally true. `extended` = markets reached by scheduled
   * travel from Lutz. The city template branches on this so an Ocala page never
   * claims the same local presence a Lutz page can.
   */
  tier: "core" | "extended";
  /**
   * Monitoring-specific paragraph. Monitoring is the one service that is genuinely
   * distance-independent — the signal travels over cellular to the Lutz center
   * regardless of where the panel sits — which is why the extended-market pages
   * lead with it rather than with install proximity. Rendered when present.
   */
  monitoringNote?: string;
}

export const CITIES: City[] = [
  {
    slug: "lutz",
    name: "Lutz",
    county: "Hillsborough & Pasco Counties",
    zips: ["33548", "33549", "33558"],
    communities: ["Cheval", "Ladera", "Van Dyke Farms", "Calusa Trace", "Willow Bend", "Heritage Harbor", "Sunset Lakes"],
    marketNote:
      "Lutz is our home market — our office is on Lutz Lake Fern Road. The housing mix runs from gated golf communities like Cheval to acreage properties on well water with long driveways and detached outbuildings. Acreage properties are the ones that most often need more than an off-the-shelf kit: gate intercoms, driveway detection, and cameras with real low-light performance at distance.",
    proximity: "Minutes from our office",
    tier: "core",
  },
  {
    slug: "wesley-chapel",
    name: "Wesley Chapel",
    county: "Pasco County",
    zips: ["33543", "33544", "33545"],
    communities: ["Meadow Pointe", "Seven Oaks", "Union Park", "Epperson", "Watergrass", "Estancia", "The Ridge"],
    marketNote:
      "Wesley Chapel is one of the fastest-growing markets in Florida, and most of it is master-planned CDD communities built in the last twenty years. That means two things: a steady stream of new construction where pre-wire before drywall is far cheaper than retrofitting later, and a large number of CDD boards responsible for gate access, amenity centers, and common-area cameras.",
    proximity: "A short drive northeast",
    tier: "core",
  },
  {
    slug: "land-o-lakes",
    name: "Land O' Lakes",
    county: "Pasco County",
    zips: ["34637", "34638", "34639"],
    communities: ["Connerton", "Bexley", "Del Webb Bexley", "Wilderness Lake Preserve", "Ballantrae", "Suncoast Meadows"],
    marketNote:
      "Land O' Lakes mixes established lakefront homes with newer master-planned development along the Suncoast Parkway corridor. Lakefront and conservation-backed lots have an open rear approach with no street visibility, which changes where cameras and perimeter detection actually need to go — the front-door-camera-only approach leaves the side that matters uncovered.",
    proximity: "A short drive north",
    tier: "core",
  },
  {
    slug: "odessa",
    name: "Odessa",
    county: "Pasco & Hillsborough Counties",
    zips: ["33556"],
    communities: ["Keystone", "Starkey Ranch", "Ivy Lake Estates", "The Eagles", "Asturia"],
    marketNote:
      "Odessa and the Keystone area are largely acreage and equestrian properties on private roads, alongside newer planned development at Starkey Ranch. Large lots mean long cable runs, outbuildings and barns that need their own coverage, and entry gates set well back from the house — work that needs trenching and conduit, not adhesive-mount consumer cameras.",
    proximity: "A short drive west",
    tier: "core",
  },
  {
    slug: "carrollwood",
    name: "Carrollwood",
    county: "Hillsborough County",
    zips: ["33618", "33624"],
    communities: ["Original Carrollwood", "Carrollwood Village", "Lake Carroll", "Northdale"],
    marketNote:
      "Carrollwood is established Tampa suburb — much of the housing stock dates to the 1960s through 1980s. Older homes frequently still have a legacy hardwired alarm panel in a closet, often from a company that no longer services it. In a lot of cases the existing sensors and wiring are reusable and only the panel and communicator need replacing, which is considerably cheaper than a full new system.",
    proximity: "A short drive south",
    tier: "core",
  },
  {
    slug: "new-tampa",
    name: "New Tampa",
    county: "Hillsborough County",
    zips: ["33647"],
    communities: ["Tampa Palms", "Hunter's Green", "West Meadows", "Cross Creek", "Arbor Greene", "K-Bar Ranch", "Grand Hampton"],
    marketNote:
      "New Tampa is dense, gated, HOA-governed development — Tampa Palms and Hunter's Green among the largest. These communities run gate access, amenity centers, and common-area cameras as association infrastructure, which is a different buying process from a single homeowner: board approval, documented proposals, and equipment that a management company can administer without a service call.",
    proximity: "A short drive southeast",
    tier: "core",
  },
  {
    slug: "westchase",
    name: "Westchase",
    county: "Hillsborough County",
    zips: ["33626"],
    communities: ["West Park Village", "The Bridges", "Harbor Links", "Radcliffe", "Countryway"],
    marketNote:
      "Westchase is a planned community of tightly spaced homes with narrow side yards and alley-loaded garages. Close spacing means camera placement has to be deliberate — a wide-angle camera aimed carelessly points straight into a neighbor's window, which is both a privacy problem and a wasted view. Correct field-of-view planning matters more here than camera count.",
    proximity: "A short drive southwest",
    tier: "core",
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    zips: ["33510", "33511"],
    communities: ["Bloomingdale", "Providence Lakes", "Brandon Valrico", "Lakewood Ridge"],
    marketNote:
      "Brandon combines a dense residential base with one of the larger retail and commercial corridors in Hillsborough County. Commercial work here is a real share of what we do: storefront and back-office camera coverage, employee access control, and monitored fire and burglary systems for small businesses along the SR-60 and Brandon Boulevard corridors.",
    proximity: "East of Tampa",
    tier: "core",
  },

  // ---------------------------------------------------------------------------
  // Extended markets — the Venice ⇄ Winter Haven ⇄ Ocala footprint.
  //
  // These are reached by scheduled travel, not by "we're around the corner," so
  // every one of them leads with monitoring (which genuinely does not care how
  // far the panel is from Lutz) and is explicit about install/service being
  // scheduled. Nothing here claims a second office or a local crew.
  // ---------------------------------------------------------------------------
  {
    slug: "riverview",
    name: "Riverview",
    county: "Hillsborough County",
    zips: ["33569", "33578", "33579"],
    communities: ["Panther Trace", "South Fork", "Summerfield", "Rivercrest", "Boyette Creek", "Winthrop Village"],
    marketNote:
      "Riverview is one of the fastest-growing corners of Hillsborough County, and almost all of it is recent master-planned development off Boyette and US-301. Homes built in the last fifteen years usually already have a builder-grade alarm panel in a closet — often installed by a national brand that signed the homeowner to a multi-year monitoring agreement at closing. In most cases the existing sensors and wiring are perfectly good, and the only thing that needs to change is the panel's communicator and who answers when it trips.",
    monitoringNote:
      "Most Riverview monitoring calls we take are takeovers, not new installs: the builder's alarm contract has run its term and the homeowner wants out of an auto-renewing agreement without ripping the system off the wall. We can take over the majority of panels already in Riverview homes, swap the communicator to cellular, and monitor the account from our own center in Lutz — no long-term contract required.",
    proximity: "About 40 minutes southeast",
    tier: "extended",
  },
  {
    slug: "plant-city",
    name: "Plant City",
    county: "Hillsborough County",
    zips: ["33563", "33565", "33566", "33567"],
    communities: ["Walden Lake", "Turkey Creek", "Country Hills", "Historic Downtown", "Varrea", "Cork"],
    marketNote:
      "Plant City runs from a walkable historic downtown to working agricultural acreage within a few miles of it, and the two need very different systems. Downtown and Walden Lake are conventional residential work. The agricultural side — packing houses, equipment barns, produce coolers, and gated field access off the county roads — is closer to commercial work: long cable runs, outbuildings that need their own coverage, and cameras that have to hold up outdoors in Florida heat and humidity.",
    monitoringNote:
      "For growers and small commercial operators in Plant City, the monitoring question is usually about more than burglary — a monitored system can also watch cooler temperature, freezer failure, and power loss on equipment that costs real money when it goes unnoticed overnight. Those alerts run through the same 24/7 in-house center as the burglar alarm, and reach a real person rather than only a phone notification nobody hears.",
    proximity: "About 40 minutes east",
    tier: "extended",
  },
  {
    slug: "zephyrhills",
    name: "Zephyrhills",
    county: "Pasco County",
    zips: ["33540", "33541", "33542", "33544"],
    communities: ["Betmar Acres", "Silverado Ranch", "Abbott Square", "Zephyr Lakes", "Downtown Zephyrhills", "Chapel Pines"],
    marketNote:
      "Zephyrhills has a large seasonal population — a substantial share of the housing stock sits empty for months at a time while owners are north. An empty house is the case where monitoring stops being a nicety: nobody is there to notice a broken window, a failed A/C in August, or a water leak under a sink until someone comes back in the fall. The rest of the market is a mix of older in-town homes and newer development pushing out along SR-54 and Eiland Boulevard.",
    monitoringNote:
      "Snowbird accounts are the most common monitoring setup we build in Zephyrhills. A monitored system on a seasonally empty house should do more than detect a break-in: low-temperature and water sensors, A/C and power-loss supervision, and a cellular communicator that reports its own failure, so an unplugged phone line or a dead battery doesn't leave the house silently unprotected for four months. Our center is staffed 24/7 in Lutz, and we can add a call list that reaches a local keyholder before it reaches you in Michigan.",
    proximity: "About 30 minutes east",
    tier: "extended",
  },
  {
    slug: "spring-hill",
    name: "Spring Hill",
    county: "Hernando County",
    zips: ["34606", "34607", "34608", "34609"],
    communities: ["Timber Pines", "Sterling Hill", "Silverthorn", "Villages at Avalon", "Wellington at Seven Hills", "Pristine Place"],
    marketNote:
      "Spring Hill is one of the largest residential markets on the Nature Coast, built out over decades as individual homes on a platted grid rather than as a handful of master-planned communities. That means enormous variety in age and construction: 1970s block homes with no wiring in the walls next door to 2020 builds with a structured panel in the garage. There is also a large 55-plus population, and personal medical alert and panic buttons tied into the alarm system come up as often as burglary coverage does.",
    monitoringNote:
      "The Suncoast Parkway puts Spring Hill within a straightforward run of our Lutz office, so installations and service calls here are routine rather than exceptional. Medical alert and panic monitoring is a real share of what we do in this market — a pendant or wall button that reaches our own 24/7 center, on the same account and the same bill as the burglar alarm, instead of a separate subscription to a company that has never seen the house.",
    proximity: "About 45 minutes north",
    tier: "extended",
  },
  {
    slug: "brooksville",
    name: "Brooksville",
    county: "Hernando County",
    zips: ["34601", "34602", "34604", "34613", "34614"],
    communities: ["Southern Hills Plantation", "Hernando Oaks", "Cascades at Southern Hills", "Trillium", "Historic Downtown", "Glen Lakes"],
    marketNote:
      "Brooksville is the rural counterweight to Spring Hill: rolling terrain, acreage and equestrian properties on private drives, and gated golf communities like Southern Hills Plantation. Acreage changes the whole design. The house is set back from the road, there are outbuildings and barns worth covering, the gate is a quarter mile from the front door, and cellular signal at the panel location is worth checking before anyone promises a system will report reliably.",
    monitoringNote:
      "On rural Brooksville properties the weak link is almost never the sensors — it is the path the alarm signal takes out of the house. Copper phone lines are disappearing, and a cable-modem VoIP line goes down with the power. We spec cellular communicators with verified signal at the actual panel location and supervised check-ins, so our center in Lutz knows within minutes if a Brooksville system has gone quiet instead of finding out at the next inspection.",
    proximity: "About an hour north",
    tier: "extended",
  },
  {
    slug: "ocala",
    name: "Ocala",
    county: "Marion County",
    zips: ["34470", "34471", "34472", "34474", "34476", "34480", "34481", "34482"],
    communities: ["On Top of the World", "Stone Creek", "Ocala Preserve", "Golden Ocala", "Country Club of Ocala", "Marion Oaks", "Silver Springs Shores"],
    marketNote:
      "Ocala is horse country, and the property type drives the work. Farms and training facilities have barns, tack rooms, equipment sheds, and long gated drives — high-value contents spread across buildings that are nowhere near the house. Alongside that sit some of the largest active-adult communities in Florida, On Top of the World and Stone Creek among them, where the buying pattern is closer to what we see in Tampa's HOA and CDD communities: association boards, documented proposals, and amenity-center coverage.",
    monitoringNote:
      "We install in Ocala and we monitor it. Monitoring does not depend on distance — an alarm signal from Marion County reaches our 24/7 center in Lutz over cellular in seconds, exactly like one from down the street, and the people who answer it work for DCSI rather than a wholesale center that has never heard of your account. Ocala is the northern edge of our footprint, so installations and service calls are scheduled rather than same-day, and we tell you that timeline up front instead of after you have signed.",
    proximity: "About 90 minutes north",
    tier: "extended",
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    county: "Polk County",
    zips: ["33801", "33803", "33805", "33809", "33810", "33811", "33813"],
    communities: ["Grasslands", "Oakbridge", "Lake Morton", "Christina", "Highland City", "Providence", "Carillon Lakes"],
    marketNote:
      "Lakeland sits on the I-4 corridor between Tampa and Orlando, which has made it a distribution and light-industrial hub as much as a residential market. Commercial work here is substantial: warehouse and yard camera coverage, employee access control on dock and office doors, and monitored fire and burglary systems for tenants along the Polk Parkway and US-98. On the residential side, the historic districts around Lake Morton and Lake Hollingsworth are pre-war homes where wiring has to be run without tearing up plaster and original trim.",
    monitoringNote:
      "For Lakeland commercial accounts the value of monitoring is usually in what it records rather than what it catches — open and close reporting tells you when the building was actually unlocked and by whose code, and a supervised system flags a failure to close at night before the building sits open until morning. All of it is handled by our own team in Lutz, on a single account with the cameras and access control, rather than split across three vendors and three invoices.",
    proximity: "About an hour east",
    tier: "extended",
  },
  {
    slug: "winter-haven",
    name: "Winter Haven",
    county: "Polk County",
    zips: ["33880", "33881", "33884"],
    communities: ["Lake Ashton", "Cypresswood", "Traditions", "Ruby Lake", "Garden Grove", "Lucerne Park", "Chain of Lakes"],
    marketNote:
      "Winter Haven is built around the Chain of Lakes, and lakefront changes the security problem in a specific way: the back of the property is open water with no street visibility, no neighbors overlooking it, and a dock that is often the most valuable thing on the lot. A front-door camera covers none of that. There is also a large seasonal and active-adult population in communities like Lake Ashton and Traditions, with the same empty-house exposure that runs through the rest of Polk County in the summer.",
    monitoringNote:
      "Lakefront and seasonal homes in Winter Haven are the clearest case for monitoring over a self-watched camera app. Nobody watches a phone notification at 3 a.m., and nobody is watching at all when the house is empty from May to October. A monitored system puts a person in Lutz on the signal every hour of the year, with water, low-temperature, and power-loss sensors reporting on the same account — the failures that actually cost money on a lake house.",
    proximity: "About 75 minutes east",
    tier: "extended",
  },
  {
    slug: "bradenton",
    name: "Bradenton",
    county: "Manatee County",
    zips: ["34201", "34202", "34205", "34207", "34209", "34210", "34211", "34212"],
    communities: ["Lakewood Ranch", "Palma Sola", "River Strand", "Greyhawk Landing", "Perico Island", "Lakewood National", "Village of the Arts"],
    marketNote:
      "Bradenton spans two very different markets. West of US-41 toward Anna Maria Island is older coastal housing with salt exposure that eats cheap outdoor hardware — camera housings, gate operators, and contacts all need to be specified for a marine environment or they fail in a couple of seasons. East of I-75, Lakewood Ranch is one of the largest master-planned developments in the country: gated villages, amenity centers, and association boards running exactly the kind of gate access and common-area camera infrastructure we handle for HOAs and CDDs in Tampa.",
    monitoringNote:
      "Coastal Manatee County adds a monitoring case that inland markets don't have: storm season. A monitored system with cellular reporting and a supervised backup battery keeps reporting when the power and the internet are down, which is precisely when an evacuated neighborhood is emptiest. Our center in Lutz is staffed through the storm, and Bradenton accounts are handled by the same team that handles Hillsborough — not handed off to a wholesale center.",
    proximity: "About an hour south",
    tier: "extended",
  },
  {
    slug: "venice",
    name: "Venice",
    county: "Sarasota County",
    zips: ["34275", "34285", "34292", "34293"],
    communities: ["Venice Island", "Wellen Park", "Sarasota National", "Venetian Golf & River Club", "Pelican Pointe", "Nokomis", "Osprey"],
    marketNote:
      "Venice is the southern end of our footprint and one of the most seasonal markets in it. A large share of homes on Venice Island and in the golf communities inland are second residences occupied part of the year, and the newer growth at Wellen Park is still actively building out — which is the window where pre-wire before drywall costs a fraction of retrofitting later. Coastal exposure applies here as it does in Manatee County: outdoor equipment has to be specified for salt air, not just for rain.",
    monitoringNote:
      "For a Venice home that sits empty half the year, monitoring is the entire point of the system — there is no one home to hear a siren. We build these accounts around cellular reporting, supervised check-ins that flag a system gone silent, and environmental sensors for water, low temperature, and power loss, with a call list that reaches a local keyholder first. The signal reaches our 24/7 center in Lutz in seconds regardless of distance, and we install and service Venice systems ourselves rather than subcontracting the work to whoever is nearest.",
    proximity: "About 90 minutes south",
    tier: "extended",
  },
];

/** Home markets — minutes from the Lutz office. */
export const CORE_CITIES = CITIES.filter((c) => c.tier === "core");

/** Markets reached by scheduled travel; monitoring-led rather than proximity-led. */
export const EXTENDED_CITIES = CITIES.filter((c) => c.tier === "extended");

/**
 * Flat city-name list used in copy and in the LocalBusiness `areaServed` graph.
 * Deduped — Riverview and Zephyrhills graduated to full city pages, and emitting a
 * name twice in `areaServed` is a malformed graph, not a stronger signal.
 */
export const SERVICE_AREAS = Array.from(
  new Set([
    ...CITIES.map((c) => c.name),
    "Tampa",
    "Trinity",
    "Temple Terrace",
    "Town 'n' Country",
    "Valrico",
    "Dade City",
    "Sarasota",
    "North Port",
    "Bartow",
    "Auburndale",
    "Haines City",
    "Hudson",
    "Inverness",
    "The Villages",
    "Clermont",
  ]),
);

/**
 * Ordered by how much of the work actually happens there. Hillsborough and Pasco
 * lead — the office sits on the line between them — followed by the counties the
 * Venice-to-Ocala corridor runs through.
 */
export const SERVICE_COUNTIES = [
  "Hillsborough County",
  "Pasco County",
  "Pinellas County",
  "Hernando County",
  "Polk County",
  "Manatee County",
  "Sarasota County",
  "Marion County",
];

export const COMPANY = {
  name: "DCSI, Inc.",
  legalName: "DCSI, Inc.",
  tagline: "Security & Sound",
  fullName: 'DCSI, Inc. "Security & Sound"',
  founded: "2004",
  description:
    "DCSI, Inc. is a full-service security and sound company based in Lutz, Florida, serving Hillsborough and Pasco Counties. Founded in 2004, DCSI designs and installs residential and commercial alarm systems, CCTV camera systems, gate and access control, home theater and whole-home audio, and structured wiring, backed by 24/7 in-house alarm monitoring.",
};

/**
 * Name variants people actually type when they mean this company.
 *
 * The legal name is DCSI, Inc., but the four-letter form gets dropped constantly —
 * on the phone, on referrals, and in search. Someone who half-remembers "the DCS
 * people in Lutz" needs to land here, not on a competitor. These feed the
 * LocalBusiness `alternateName` graph and the /dcs brand cluster.
 *
 * IMPORTANT: this claims the name only as a variant of DCSI, Inc. of Lutz, FL.
 * Unrelated companies operate under "DCS" elsewhere, and nothing on the /dcs
 * pages should read as a claim on their business — see
 * /dcs/what-does-dcs-stand-for, which says so explicitly.
 */
export const DCS_ALIASES = [
  "DCS",
  "DCS Security",
  "DCS Security & Sound",
  "DCS Alarm",
  "DCS Inc.",
  "DCSI",
  "DCSI Security",
  "DCSI Security & Sound",
];

/**
 * SET THESE once you confirm which app the panels you install actually use
 * (Total Connect 2.0, Alarm.com, or whatever ships with the current panel line).
 *
 * Left blank deliberately. /dcs/app-and-login is the page a locked-out customer
 * lands on at 11pm, and sending them to the wrong app store listing wastes the
 * one thing they don't have — time. Blank, the page explains how to identify the
 * app from the panel and gives them the office number instead.
 */
export const CUSTOMER_PORTAL = {
  /** e.g. "Total Connect 2.0" */
  appName: "",
  /** Web login URL for the same platform. */
  loginUrl: "",
  appStoreUrl: "",
  playStoreUrl: "",
};

export const HAS_PORTAL = Boolean(CUSTOMER_PORTAL.appName);

/**
 * The /dcs brand cluster. One hub plus nine pages, each answering a distinct
 * question someone searching the DCS name is actually asking — who the company
 * is, what it installs, how to reach it, and what to do when the panel beeps.
 *
 * Order is the order they render on the hub and in the sitemap.
 */
export interface DcsPage {
  slug: string;
  /** Short label for the hub grid and cross-links. */
  label: string;
  /** One line describing what the page answers. */
  blurb: string;
}

export const DCS_PAGES: DcsPage[] = [
  {
    slug: "security-systems",
    label: "DCS Security Systems",
    blurb:
      "What a DCS alarm system includes, how an install actually runs, and what the equipment does.",
  },
  {
    slug: "alarm-monitoring",
    label: "DCS Alarm Monitoring",
    blurb:
      "The in-house monitoring center in Lutz — what happens in the first ninety seconds after a signal.",
  },
  {
    slug: "cameras",
    label: "DCS Camera Systems",
    blurb:
      "CCTV and IP cameras, recording and retention, remote viewing, and video verification of alarms.",
  },
  {
    slug: "commercial",
    label: "DCS Commercial Security",
    blurb:
      "Business alarm systems, access control, gates, and community security for HOAs and CDDs.",
  },
  {
    slug: "contact",
    label: "DCS Phone Number & Office",
    blurb:
      "Phone, email, address, hours, and which number to call for a new quote versus an existing system.",
  },
  {
    slug: "customer-service",
    label: "DCS Customer Service",
    blurb:
      "Already have a DCS system: service calls, false alarms, call-list changes, moving, and trouble codes.",
  },
  {
    slug: "app-and-login",
    label: "DCS App & Remote Access",
    blurb:
      "Arming from your phone, finding which app your panel uses, and what to do when a login fails.",
  },
  {
    slug: "reviews",
    label: "Is DCS Legitimate?",
    blurb:
      "How to verify any Florida alarm company — license lookup, physical address, and who answers the alarm.",
  },
  {
    slug: "what-does-dcs-stand-for",
    label: "What Does DCS Stand For?",
    blurb:
      "The name, where it comes from, and the many unrelated things also called DCS.",
  },
];

export const NAV_SERVICES = [
  { label: "Security & Monitoring", href: "/services/security-monitoring" },
  { label: "Camera Systems", href: "/services/camera-systems" },
  { label: "New Construction", href: "/services/new-construction" },
  { label: "HOA & CDD Services", href: "/services/hoa-cdd" },
  { label: "Home Theater & AV", href: "/services/home-theater" },
  { label: "Whole-Home Audio", href: "/services/whole-home-audio" },
  { label: "Structured Wiring & Smart Home", href: "/services/structured-wiring" },
];

export const NAV_RESOURCES = [
  // Sitewide entry point into the /dcs cluster. It leads because someone who
  // arrived here searching the short name needs to find the explanation without
  // reading a whole menu.
  { label: "DCS Security (DCSI)", href: "/dcs" },
  { label: "Security System Cost Guide", href: "/resources/security-system-cost" },
  { label: "Choosing a Monitoring Company", href: "/resources/choosing-a-monitoring-company" },
  { label: "HOA & CDD Board Guide", href: "/resources/hoa-board-security-guide" },
  { label: "Builder Pre-Wire Guide", href: "/resources/builder-prewire-guide" },
  { label: "Burglar Alarm FAQ", href: "/resources/burglar-alarm-faq" },
  { label: "Burglary Statistics", href: "/resources/burglary-statistics" },
  { label: "Safety Tips", href: "/resources/safety-tips" },
];

export const SERVICES = [
  {
    icon: "Shield",
    title: "Security Systems",
    description:
      "Custom residential & commercial alarm systems with 24/7 in-house monitoring.",
    href: "/services/security-monitoring",
  },
  {
    icon: "Camera",
    title: "Camera Systems",
    description:
      "CCTV, DVR, and remote mobile viewing — watch your property from anywhere.",
    href: "/services/camera-systems",
  },
  {
    icon: "Building2",
    title: "New Construction",
    description:
      "Low voltage pre-wire for builders and developers in Hillsborough County.",
    href: "/services/new-construction",
  },
  {
    icon: "Users",
    title: "HOA & CDD Services",
    description:
      "Gate access, common area cameras, and community-wide monitoring for HOAs and CDDs.",
    href: "/services/hoa-cdd",
  },
  {
    icon: "Projector",
    title: "Home Theater & AV",
    description:
      "Projectors, media walls, and surround sound — designed for your room and calibrated on site.",
    href: "/services/home-theater",
  },
  {
    icon: "Speaker",
    title: "Whole-Home Audio",
    description:
      "Multi-room and outdoor audio with independent zones, controlled from your phone.",
    href: "/services/whole-home-audio",
  },
  {
    icon: "Network",
    title: "Structured Wiring & Smart Home",
    description:
      "CAT6 to a central panel, whole-home Wi-Fi design, smart locks, and thermostats.",
    href: "/services/structured-wiring",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "DCSI installed a home security system for my family last summer. They were a pleasure to work with; they really listened to what our safety concerns were and then made recommendations that were specific to us.",
    name: "Miranda Kelly",
  },
  {
    quote:
      "Nelson is someone I have enjoyed doing business with for over eight years. I trust him implicitly and have always received the best value and service available.",
    name: "Bryan Thomas",
  },
  {
    quote:
      "Nelson was extremely knowledgeable and professional. The technician was professional and timely. The system is easy to use and gives my family a feeling of safety and security.",
    name: "Paris",
  },
  {
    quote:
      "DCSI Security has helped me with my home security needs. They have always been prompt, courteous, professional and reliable. I have referred many of my family and friends.",
    name: "Verified Customer",
  },
];
