import HomeClient from "@/components/HomeClient";
import JsonLd from "@/components/JsonLd";
import { CONTACT, TESTIMONIALS } from "@/lib/constants";
import { ORG_ID, abs, pageMetadata } from "@/lib/seo";

// The page itself is a server component purely so it can export metadata and
// structured data; all of the animated UI lives in HomeClient.
export const metadata = pageMetadata({
  // The root layout's title template only applies to child segments, so the home
  // page carries the brand suffix itself.
  title: "Security Systems & Cameras in Tampa, FL | DCSI Inc.",
  description:
    "Security systems, cameras, and sound across Hillsborough & Pasco Counties, FL. 24/7 in-house monitoring since 2004. Free quote: (813) 949-6500.",
  path: "/",
});

/** Customer testimonials, marked up so review snippets can surface in search and AI answers. */
const reviewSchema = TESTIMONIALS.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": ORG_ID },
  author: { "@type": "Person", name: t.name },
  reviewBody: t.quote,
}));

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${abs("/")}#webpage`,
  url: abs("/"),
  name: "Security Systems & Cameras in Tampa, FL | DCSI Inc.",
  description:
    "DCSI Inc. is a Lutz, FL security and sound company installing alarm systems, CCTV cameras, gate access control, and structured wiring across Hillsborough and Pasco Counties, with 24/7 in-house monitoring.",
  isPartOf: { "@id": ORG_ID },
  about: { "@id": ORG_ID },
  primaryImageOfPage: { "@type": "ImageObject", url: abs("/images/happy-family.webp") },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#dcsi-hero-headline", "#dcsi-hero-subtitle"],
  },
  significantLink: [abs("/contact"), CONTACT.mapsUrl],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homeSchema, ...reviewSchema]} />
      <HomeClient />
    </>
  );
}
