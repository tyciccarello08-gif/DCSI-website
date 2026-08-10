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
  serviceArea: "Hillsborough & Pasco Counties, FL",
  serviceAreaLong:
    "Hillsborough and Pasco Counties, Florida — including Lutz, Wesley Chapel, Land O' Lakes, Odessa, Carrollwood, Westchase, New Tampa, Brandon, and Tampa",
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
  },
];

/** Flat city-name list used in copy and in the LocalBusiness `areaServed` graph. */
export const SERVICE_AREAS = [
  ...CITIES.map((c) => c.name),
  "Tampa",
  "Trinity",
  "Riverview",
  "Temple Terrace",
  "Town 'n' Country",
  "Zephyrhills",
];

/** Hillsborough and Pasco lead — the office sits on the line between them. */
export const SERVICE_COUNTIES = ["Hillsborough County", "Pasco County", "Pinellas County"];

export const COMPANY = {
  name: "DCSI, Inc.",
  legalName: "DCSI, Inc.",
  tagline: "Security & Sound",
  fullName: 'DCSI, Inc. "Security & Sound"',
  founded: "2004",
  description:
    "DCSI, Inc. is a full-service security and sound company based in Lutz, Florida, serving Hillsborough and Pasco Counties. Founded in 2004, DCSI designs and installs residential and commercial alarm systems, CCTV camera systems, gate and access control, home theater and whole-home audio, and structured wiring, backed by 24/7 in-house alarm monitoring.",
};

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
