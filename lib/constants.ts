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
  /**
   * SET THIS: the public link to the Google Business Profile — the page where
   * people *read* the reviews (Share → copy link on the Maps listing). Different
   * from googleReviewUrl above, which opens the "write a review" box. The star
   * rating badge links here; until it's set, the badge falls back to mapsUrl.
   */
  googleProfileUrl: "",
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
  /**
   * Slugs of other city pages that are really neighborhoods of this one. The
   * Tampa page uses it to link down to South Tampa, New Tampa, and the rest, so
   * the parent page and its sub-areas reinforce each other instead of competing.
   */
  neighborhoodPages?: string[];
  /**
   * Overrides the default "<title>" when it would collide with another page.
   * Tampa needs it: the default matches the home page title word for word, and
   * two pages with one title split the ranking between them.
   */
  seoTitle?: string;
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
  {
    slug: "trinity",
    name: "Trinity",
    county: "Pasco County",
    zips: ["34655"],
    communities: ["Heritage Springs", "Trinity Oaks", "Champions Club", "Thousand Oaks", "Longleaf", "Fox Wood"],
    marketNote:
      "Trinity is mostly gated golf and planned communities built along SR-54 and Little Road from the late 1990s on, which means a lot of houses with an alarm panel the builder put in a closet twenty-odd years ago. Those systems were wired properly at the time and the sensors usually still work — what has aged out is the communicator. Panels that reported over a landline or a 3G radio are frequently not reporting to anyone at all, and the homeowner finds out only when something happens.",
    proximity: "About 25 minutes west",
    tier: "core",
  },
  {
    slug: "temple-terrace",
    name: "Temple Terrace",
    county: "Hillsborough County",
    zips: ["33617", "33637"],
    communities: ["Historic Temple Terrace", "Temple Terrace Golf & Country Club", "Riverhills", "Lettuce Lake", "Hillsborough River frontage"],
    marketNote:
      "Temple Terrace packs three different housing stocks into a small city: 1920s Mediterranean Revival homes in the historic core, mid-century ranch houses on the river, and a large rental market around the University of South Florida. The historic homes need wiring run without opening plaster. The rentals need something else entirely — a system a landlord can re-key between tenants by changing user codes rather than calling a technician, and cameras on entrances that respect a tenant's privacy inside.",
    proximity: "About 25 minutes southeast",
    tier: "core",
  },
  {
    slug: "town-n-country",
    name: "Town 'n' Country",
    county: "Hillsborough County",
    zips: ["33615", "33634", "33635"],
    communities: ["Bay Port Colony", "Rocky Point", "Sweetwater", "Memorial Highway corridor", "Hillsborough Avenue corridor"],
    marketNote:
      "Town 'n' Country is one of the largest unincorporated communities in Florida, and most of it is 1960s-to-1980s concrete block housing with no low voltage wiring in the walls. That makes wireless sensors the practical choice for most retrofits here, with a hardwired panel location chosen for cellular signal rather than convenience. Bay Port Colony and the Rocky Point waterfront add docks and seawalls to cover, and the office and light-industrial parks near the airport are a steady source of commercial camera and access control work.",
    proximity: "About 25 minutes southwest",
    tier: "core",
  },
  {
    slug: "south-tampa",
    name: "South Tampa",
    county: "Hillsborough County",
    zips: ["33606", "33609", "33611", "33629"],
    communities: ["Hyde Park", "Palma Ceia", "Davis Islands", "Bayshore Beautiful", "Ballast Point", "Sunset Park", "Harbour Island"],
    marketNote:
      "South Tampa is two markets at once. Hyde Park and the older parts of Palma Ceia are early-1900s bungalows and revival homes where wiring has to be fished without damaging plaster or trim, and where visible exterior hardware is worth being deliberate about. Meanwhile teardowns across Palma Ceia, Sunset Park, and Bayshore Beautiful are replacing those houses with new construction — the one moment when pre-wiring security, cameras, audio, and data costs a fraction of retrofitting. On Davis Islands and along Bayshore, storm surge is a design input: panels, recorders, and power supplies belong above the flood line, not on a garage floor.",
    proximity: "About 35 minutes south",
    tier: "core",
  },
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    // City of Tampa ZIPs outside the neighborhoods that already have their own
    // page (South Tampa, New Tampa, Temple Terrace, Town 'n' Country).
    zips: ["33602", "33603", "33604", "33605", "33607", "33610", "33612", "33613", "33614"],
    communities: ["Seminole Heights", "Tampa Heights", "Downtown & Channel District", "Ybor City", "Westshore", "West Tampa", "Forest Hills", "Lowry Park", "USF area"],
    marketNote:
      "Tampa itself is several different jobs under one name. Seminole Heights and Tampa Heights are 1910s-to-1920s bungalows, mostly wood frame on a crawlspace, where wiring can usually be run from underneath without opening walls, and where porch and alley approaches matter more than the front door. Downtown, the Channel District, and Westshore are condos and offices, where the building or association controls what can be drilled, which points toward wireless sensors, interior cameras, and access control that ties into the building's own entry system. Ybor City and the commercial corridors along Kennedy, Dale Mabry, and Florida Avenue are storefronts, bars, and restaurants that need cameras covering registers and back doors, alarms with open and close reporting, and recorders that keep footage long enough for an insurance claim.",
    proximity: "About 30 minutes south",
    tier: "core",
    seoTitle: "Tampa Security Systems, Cameras & Alarm Monitoring",
    neighborhoodPages: ["south-tampa", "new-tampa", "carrollwood", "town-n-country", "temple-terrace", "westchase"],
  },
  {
    slug: "valrico",
    name: "Valrico",
    county: "Hillsborough County",
    zips: ["33594", "33596"],
    communities: ["Bloomingdale", "River Hills", "Buckhorn", "Diamond Hill"],
    marketNote:
      "Valrico sits east of Brandon where the subdivisions start giving way to acreage. The 1980s-to-2000s neighborhoods around Bloomingdale and Buckhorn often have a builder-installed alarm panel whose communicator has aged out, which makes them good candidates for a takeover instead of a new system. Further east the lots get bigger, with detached garages, workshops, and gates set back from the road, and those need cameras with real range at night and wiring run to outbuildings rather than a doorbell camera and a hope.",
    proximity: "About 40 minutes southeast",
    tier: "core",
  },
  {
    slug: "citrus-park",
    name: "Citrus Park",
    county: "Hillsborough County",
    zips: ["33625"],
    communities: ["Fawn Ridge", "Citrus Park Village", "Gunn Highway corridor", "Sheldon Road corridor", "Ehrlich Road corridor"],
    marketNote:
      "Citrus Park sits between Carrollwood and Westchase and was built out mostly from the 1980s through the 2000s — subdivisions off Gunn Highway, Sheldon, and Ehrlich Road rather than one master-planned community. A lot of those houses still have the alarm panel the builder or first owner put in, wired to every door and often every window, and reporting over a phone line that no longer exists. The wiring is usually the valuable part; replacing the panel and communicator and keeping the sensors is typically far cheaper than starting over. The retail and office corridor around the Citrus Park mall adds steady small-business camera and alarm work.",
    proximity: "About 20 minutes southwest",
    tier: "core",
  },
  {
    slug: "seffner",
    name: "Seffner",
    county: "Hillsborough County",
    zips: ["33584", "33550", "33592", "33527"],
    communities: ["Mango", "Thonotosassa", "Dover", "Kingsway Road area", "US-92 corridor"],
    marketNote:
      "Seffner and the unincorporated areas around it — Mango, Thonotosassa, Dover — are where Hillsborough turns semi-rural between Brandon and Plant City. Lots are larger, a lot of homes have a detached garage, a shop, or a barn, and properties along the US-92 and I-4 corridors include contractors' yards and small light-industrial buildings with equipment and vehicles parked outside overnight. That work is about range and outbuildings: cameras that identify a person at the far end of a driveway at night, and cable or conduit run to the buildings that hold the expensive things.",
    proximity: "About 35 minutes southeast",
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
  {
    slug: "dade-city",
    name: "Dade City",
    county: "Pasco County",
    zips: ["33523", "33525"],
    communities: ["Historic Downtown Dade City", "Lake Jovita", "San Antonio", "St. Leo", "Richland", "Lacoochee"],
    marketNote:
      "East Pasco is the county's rural side — ranches, former citrus groves, and homes on acreage along the ridge, with a small historic downtown and the golf community at Lake Jovita. On acreage the house is rarely the only thing worth protecting: equipment barns, workshops, and a gate at the road all need coverage, and long distances between buildings mean the cabling plan matters as much as the camera choice.",
    monitoringNote:
      "Rural Dade City properties are where communication path decides whether monitoring works at all. Copper lines out here are being retired, power drops in summer storms, and cellular signal varies from one end of a property to the other. We test signal at the actual panel location before specifying a communicator, and every account is supervised, so our center in Lutz knows within minutes if a Dade City system has stopped checking in — instead of finding out after a break-in.",
    proximity: "About 40 minutes northeast",
    tier: "extended",
  },
  {
    slug: "palm-harbor",
    name: "Palm Harbor",
    county: "Pinellas County",
    zips: ["34683", "34684", "34685"],
    communities: ["Lansbrook", "Highland Lakes", "Crystal Beach", "Ozona", "Innisbrook", "Lake Tarpon shoreline"],
    marketNote:
      "Palm Harbor is north Pinellas built out mostly between the 1970s and the 1990s, so the typical home has an alarm panel that is old enough to have outlived its original company. Lake Tarpon frontage in Lansbrook and the Gulf side at Crystal Beach and Ozona put open water at the back of the lot, and the golf condos at Innisbrook have a large share of part-time owners — both cases where cameras on the front door miss the approach that matters.",
    monitoringNote:
      "Most Palm Harbor monitoring work starts with a panel that is already on the wall. Many were installed by companies that have since been bought out, merged, or left the area, and the account was passed to a monitoring center the homeowner has never spoken to. We can usually take those panels over, replace an aging landline or 3G communicator with LTE cellular, and move the account to our own 24/7 center in Lutz with no long-term contract.",
    proximity: "About 35 minutes west",
    tier: "extended",
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    county: "Pinellas County",
    zips: ["33755", "33756", "33759", "33761", "33763", "33764", "33765", "33767"],
    communities: ["Countryside", "Clearwater Beach", "Island Estates", "Sand Key", "Morningside", "Downtown Clearwater"],
    marketNote:
      "Clearwater runs from beachfront condos and vacation rentals on Clearwater Beach and Sand Key to established inland neighborhoods like Countryside and a long commercial corridor on US-19. The beach side has two specific problems: salt air that destroys outdoor hardware not rated for it, and short-term rentals where the owner needs coverage of entrances and parking without any camera inside the unit — which the major rental platforms prohibit anyway. Inland, the work looks like the rest of Tampa Bay: retrofits of older panels and camera systems for small businesses.",
    monitoringNote:
      "For Clearwater rental and second-home owners, the useful features are the ones you can run from somewhere else: user codes issued and revoked per guest from a phone, arming reports that show the unit was actually locked up at checkout, and water and power-loss sensors that catch the failures that cost money between bookings. All of it reports to our own center in Lutz, staffed 24/7, on the same account as the cameras.",
    proximity: "About 45 minutes southwest",
    tier: "extended",
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    county: "Sarasota County",
    zips: ["34231", "34232", "34233", "34236", "34238", "34239", "34240", "34242"],
    communities: ["Downtown Sarasota", "Siesta Key", "Lido Key", "Bird Key", "Palmer Ranch", "The Meadows", "Gulf Gate"],
    marketNote:
      "Sarasota mixes downtown high-rise condominiums, barrier-island homes on Siesta, Lido, and Bird Key, and large inland developments like Palmer Ranch. Condo towers are association work — lobby and garage access control, elevator and amenity cameras, and proposals that go before a board — while the islands bring the same salt-air and storm-surge constraints as the rest of the coast. A high share of homes in every part of the market are seasonal.",
    monitoringNote:
      "In Sarasota the monitored system is often the only thing watching the house for half the year. We build those accounts around cellular reporting with supervised check-ins, environmental sensors for water, low temperature, and power loss, and a call list that reaches a local keyholder before it reaches an owner who is out of state. Signals reach our 24/7 center in Lutz in seconds, and installation and service are scheduled from Lutz by our own technicians.",
    proximity: "About 75 minutes south",
    tier: "extended",
  },
  {
    slug: "apollo-beach",
    name: "Apollo Beach",
    county: "Hillsborough County",
    zips: ["33572"],
    communities: ["MiraBay", "Waterset", "Symphony Isles", "Andalucia", "Covington Park", "Apollo Beach canal homes"],
    marketNote:
      "Apollo Beach is two markets on one peninsula. The original canal neighborhoods are waterfront homes with docks, boat lifts, and seawalls — the back of the lot faces open water, there is no street visibility, and the boat is often worth more than anything inside. Newer master-planned communities like MiraBay and Waterset add gated entries, amenity centers, and association boards. Both sit low and close to Tampa Bay, so storm surge and salt air are design inputs: recorders and power supplies above the flood line, outdoor hardware rated for a marine environment.",
    monitoringNote:
      "On a canal home the monitoring that matters most covers what a front-door camera can't: the dock, the lift, and the seawall approach, with cameras that hand a verified intrusion to a person rather than a motion alert to a phone. Our 24/7 center in Lutz handles Apollo Beach accounts directly, and cellular reporting with a supervised backup battery keeps the system talking through the outages that follow a storm, when evacuated neighborhoods are emptiest.",
    proximity: "About 50 minutes south",
    tier: "extended",
  },
  {
    slug: "sun-city-center",
    name: "Sun City Center",
    county: "Hillsborough County",
    zips: ["33573", "33570", "33598"],
    communities: ["Sun City Center", "Kings Point", "Del Webb Southshore Falls", "Valencia Lakes", "Ruskin", "Wimauma"],
    marketNote:
      "Sun City Center is one of the largest 55-plus communities in Florida, and the surrounding area around Ruskin and Wimauma has added several more. That shapes the work: a burglar alarm is often the smaller part of the request, and medical alert pendants, wall-mounted emergency buttons, and a system that is simple to arm without a phone app come up just as often. Many homes are also seasonal, which brings the same water, A/C, and power-loss concerns as any empty Florida house.",
    monitoringNote:
      "Medical and panic monitoring is the reason a lot of Sun City Center residents call us. A pendant or wall button reaches our own 24/7 center in Lutz on the same account as the burglar alarm, and the call list can put a neighbor or nearby family member ahead of an out-of-town child. We install and service these systems ourselves on a scheduled basis from Lutz, and walk through the panel in person so it gets used rather than left disarmed.",
    proximity: "About an hour south",
    tier: "extended",
  },
  {
    slug: "new-port-richey",
    name: "New Port Richey",
    county: "Pasco County",
    zips: ["34652", "34653", "34654", "34668"],
    communities: ["Downtown New Port Richey", "Gulf Harbors", "Seven Springs", "Magnolia Valley", "Jasmine Estates", "Port Richey"],
    marketNote:
      "New Port Richey is west Pasco's older coastal core: a revitalized downtown along the Pithlachascotee River, 1960s-to-1980s block homes with no low voltage wiring in the walls, and canal communities like Gulf Harbors with direct Gulf access. Retrofits here are mostly wireless sensors on a cellular panel, with camera coverage aimed at docks and canal-side yards. The US-19 corridor is a long stretch of small businesses — storefronts, restaurants, and service shops — that need cameras on registers and rear doors and alarms with open and close reporting.",
    monitoringNote:
      "A large share of New Port Richey alarm panels were installed decades ago by companies that no longer exist under the same name, and many still try to report over a copper line or a 3G radio that has been shut off. We can usually take those panels over, swap in an LTE communicator, and move the account to our own 24/7 center in Lutz — no long-term contract, and installation and service scheduled from our office.",
    proximity: "About 45 minutes west",
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
    "Oldsmar",
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
  { label: "Commercial Security", href: "/services/commercial-security" },
  { label: "Access Control & Gates", href: "/services/access-control" },
  { label: "Monitoring Takeover", href: "/services/alarm-monitoring-takeover" },
];

/**
 * Every guide under /resources. One list drives the /resources hub and the
 * sitemap (including each guide's real lastmod), so a new article can't ship
 * without showing up in both.
 *
 * `published`/`modified` are when the content was written and last materially
 * changed. They feed Article schema and the sitemap; bump `modified` only when
 * the text actually changes, not on every deploy.
 */
export interface Resource {
  slug: string;
  title: string;
  blurb: string;
  category: "Buying & Cost" | "Monitoring" | "Florida Homes" | "Cameras" | "Boards & Builders" | "Basics";
  published: string;
  modified: string;
}

export const RESOURCES: Resource[] = [
  {
    slug: "security-system-cost",
    title: "How Much Does a Home Security System Cost in Tampa?",
    blurb: "What drives the price of an alarm system and monitoring, and the contract terms that cost buyers the most.",
    category: "Buying & Cost",
    published: "2026-08-10",
    modified: "2026-08-10",
  },
  {
    slug: "wired-vs-wireless-alarm-systems",
    title: "Wired vs. Wireless Alarm Systems for Florida Homes",
    blurb: "Why block construction changes the answer, and when a hybrid system is the right call.",
    category: "Buying & Cost",
    published: "2026-10-24",
    modified: "2026-10-24",
  },
  {
    slug: "diy-vs-professional-security",
    title: "DIY vs. Professionally Installed Security Systems",
    blurb: "What a self-install kit does well, where it falls short, and the questions that decide which one fits.",
    category: "Buying & Cost",
    published: "2026-10-29",
    modified: "2026-10-29",
  },
  {
    slug: "choosing-a-monitoring-company",
    title: "How to Choose an Alarm Monitoring Company",
    blurb: "In-house vs. wholesale monitoring, contract length, equipment ownership, and communication path.",
    category: "Monitoring",
    published: "2026-08-10",
    modified: "2026-08-10",
  },
  {
    slug: "landline-alarm-upgrade",
    title: "Is Your Alarm Still on a Landline or 3G? How to Tell",
    blurb: "Copper retirement and the 3G shutdown left many panels reporting to no one. How to check yours.",
    category: "Monitoring",
    published: "2026-10-24",
    modified: "2026-10-24",
  },
  {
    slug: "false-alarm-prevention",
    title: "How to Prevent False Alarms (and the Fees That Follow)",
    blurb: "The handful of causes behind most false alarms, and the settings and habits that stop them.",
    category: "Monitoring",
    published: "2026-10-24",
    modified: "2026-10-24",
  },
  {
    slug: "switching-alarm-companies",
    title: "How to Switch Alarm Companies Without Replacing Your System",
    blurb: "Reading the contract, giving notice, locked panels, and what a monitoring takeover actually involves.",
    category: "Monitoring",
    published: "2026-10-29",
    modified: "2026-10-29",
  },
  {
    slug: "medical-alert-alarm-systems",
    title: "Medical Alert Through Your Home Alarm System",
    blurb: "Pendants, wall buttons, and two-way voice on the same monitored system — and what to ask before you buy.",
    category: "Monitoring",
    published: "2026-10-29",
    modified: "2026-10-29",
  },
  {
    slug: "hurricane-season-security",
    title: "Hurricane Season Security Checklist for Florida Homes",
    blurb: "Keeping an alarm and cameras working through an outage, an evacuation, and the week after a storm.",
    category: "Florida Homes",
    published: "2026-10-24",
    modified: "2026-10-24",
  },
  {
    slug: "vacant-home-security",
    title: "Snowbird & Vacant Home Security Checklist",
    blurb: "What a seasonally empty Florida house needs beyond a burglar alarm — water, temperature, and power.",
    category: "Florida Homes",
    published: "2026-10-24",
    modified: "2026-10-24",
  },
  {
    slug: "how-many-security-cameras",
    title: "How Many Security Cameras Does a House Need?",
    blurb: "Counting cameras by approach rather than by wall, plus PoE vs. Wi-Fi, resolution, and retention.",
    category: "Cameras",
    published: "2026-10-24",
    modified: "2026-10-24",
  },
  {
    slug: "security-camera-footage-retention",
    title: "How Long Do Security Cameras Keep Footage?",
    blurb: "Working out recorder storage from bitrate, continuous vs. motion recording, and how many days you need.",
    category: "Cameras",
    published: "2026-10-29",
    modified: "2026-10-29",
  },
  {
    slug: "hoa-board-security-guide",
    title: "HOA & CDD Board Guide to Community Security",
    blurb: "How association and district boards should scope, budget, and procure gate and camera projects.",
    category: "Boards & Builders",
    published: "2026-08-10",
    modified: "2026-08-10",
  },
  {
    slug: "builder-prewire-guide",
    title: "Builder's Guide to Low Voltage Pre-Wire",
    blurb: "When to schedule rough-in, base package scope, buyer upgrades, and fewer warranty callbacks.",
    category: "Boards & Builders",
    published: "2026-08-10",
    modified: "2026-08-10",
  },
  {
    slug: "burglar-alarm-faq",
    title: "Burglar Alarm FAQ — How Alarm Systems Work",
    blurb: "What happens when an alarm trips, what monitoring covers, permits, and power-outage behavior.",
    category: "Basics",
    published: "2026-03-24",
    modified: "2026-08-10",
  },
  {
    slug: "pet-friendly-alarm-systems",
    title: "Pet-Friendly Alarm Systems: Motion Sensors and Dogs",
    blurb: "How pet-immune motion detectors work, their weight limits, and layouts that keep pets from tripping the alarm.",
    category: "Basics",
    published: "2026-10-29",
    modified: "2026-10-29",
  },
  {
    slug: "safety-tips",
    title: "8 Home Security Tips You Can Act On Today",
    blurb: "No-cost steps that make a house a harder target — lighting, locks, sliding doors, and habits.",
    category: "Basics",
    published: "2026-03-24",
    modified: "2026-08-10",
  },
  {
    slug: "burglary-statistics",
    title: "Burglary Statistics — Why Home Security Matters",
    blurb: "National and Florida property crime figures, each attributed to its source.",
    category: "Basics",
    published: "2026-03-24",
    modified: "2026-08-10",
  },
];

export const resourceBySlug = (slug: string) => {
  const r = RESOURCES.find((x) => x.slug === slug);
  if (!r) throw new Error(`No resource registered for ${slug}`);
  return r;
};

export const NAV_RESOURCES = [
  // Sitewide entry point into the /dcs cluster. It leads because someone who
  // arrived here searching the short name needs to find the explanation without
  // reading a whole menu.
  { label: "DCS Security (DCSI)", href: "/dcs" },
  // The hub carries every guide, so the menu can stay short and lead with the
  // highest-intent ones instead of growing with each new article.
  { label: "All Guides & Resources", href: "/resources" },
  { label: "Security System Cost Guide", href: "/resources/security-system-cost" },
  { label: "Choosing a Monitoring Company", href: "/resources/choosing-a-monitoring-company" },
  { label: "Landline & 3G Alarm Upgrade", href: "/resources/landline-alarm-upgrade" },
  { label: "Hurricane Season Checklist", href: "/resources/hurricane-season-security" },
  { label: "HOA & CDD Board Guide", href: "/resources/hoa-board-security-guide" },
  { label: "Builder Pre-Wire Guide", href: "/resources/builder-prewire-guide" },
  { label: "Burglar Alarm FAQ", href: "/resources/burglar-alarm-faq" },
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
      "IP cameras, NVR recording, and phone viewing — watch your property from anywhere.",
    href: "/services/camera-systems",
  },
  {
    icon: "Building2",
    title: "New Construction",
    description:
      "Low voltage pre-wire for builders and developers across Hillsborough and Pasco.",
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
  {
    icon: "Store",
    title: "Commercial Security",
    description:
      "Business alarms with open/close reporting, storefront and warehouse cameras, and employee access.",
    href: "/services/commercial-security",
  },
  {
    icon: "KeyRound",
    title: "Access Control & Gates",
    description:
      "Fobs, keypads, and phone credentials for doors and gates — with audit logs you can run yourself.",
    href: "/services/access-control",
  },
  {
    icon: "RefreshCw",
    title: "Monitoring Takeover",
    description:
      "Keep the sensors already on your walls and move the account to our in-house monitoring.",
    href: "/services/alarm-monitoring-takeover",
  },
];

/**
 * "What do you need?" options on every quote form. The API validates against this
 * same list, so adding an option here is the only change needed.
 */
export const FORM_SERVICES = [
  "Security Systems & Monitoring",
  "Monitoring Takeover (Existing System)",
  "Camera Systems (CCTV)",
  "Commercial Security",
  "Access Control / Intercom",
  "HOA / CDD Community Security",
  "New Construction Low Voltage",
  "Home Theater",
  "Whole-Home Audio",
  "Structured Wiring / Smart Home",
  "Flat Panel TV Installation",
  "Other",
] as const;

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
];
