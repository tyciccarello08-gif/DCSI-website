import Image from "next/image";
import Link from "next/link";
import { KeyRound, Smartphone, DoorOpen, Phone, ScrollText, Clock } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/access-control";

export const metadata = pageMetadata({
  title: "Access Control & Gate Systems in Tampa Bay",
  description:
    "Fob, card, keypad, and phone-based access control for doors and gates, gate operators, and telephone-entry intercoms. Installed and serviced by DCSI of Lutz, FL.",
  path: PATH,
});

const COMPONENTS = [
  {
    icon: KeyRound,
    title: "Fobs, Cards & Keypads",
    body: "Credentials issued per person, so access can be revoked for one without changing it for everyone. Keypad PINs where a credential isn't practical.",
  },
  {
    icon: Smartphone,
    title: "Mobile Credentials",
    body: "Unlock from a phone, and issue temporary access to a contractor or guest from the app — with an expiry instead of a code that lives forever.",
  },
  {
    icon: DoorOpen,
    title: "Electric Strikes & Maglocks",
    body: "Door hardware matched to the frame and the fire code, with request-to-exit and fail-safe or fail-secure behavior chosen deliberately.",
  },
  {
    icon: Phone,
    title: "Gate Entry & Intercoms",
    body: "Telephone-entry and video intercoms at gates and lobbies, so a visitor calls the resident or office directly rather than waiting at a closed gate.",
  },
  {
    icon: ScrollText,
    title: "Audit Logs",
    body: "Every entry recorded by credential and time. When something goes missing, you start from a list of who was actually inside rather than a guess.",
  },
  {
    icon: Clock,
    title: "Schedules",
    body: "Doors that unlock for business hours and lock themselves after, and credential groups that only work on the days a vendor is supposed to be there.",
  },
];

const FAQS = [
  {
    q: "What is the difference between keyless entry and access control?",
    a: "A keyless lock replaces a key with a code or app on one door. Access control manages many doors and many people from one place: each person has their own credential, each door has its own schedule, every entry is logged, and access can be revoked instantly without touching the hardware.",
  },
  {
    q: "Fobs, cards, or phone credentials — which is best?",
    a: "It depends on who is using them. Fobs and cards are durable, cheap to replace, and work for anyone, which is why they remain standard for gates and employee doors. Phone credentials are convenient and easy to issue remotely but depend on a charged phone. Most systems we install support both, so the choice can be made per person.",
  },
  {
    q: "Can you install or replace a gate operator?",
    a: "Yes. We install and service gate operators, loop detectors, safety edges and photo eyes, and the access control and intercom at the gate. Gate work usually involves trenching and conduit for power and data, which we handle as part of the job rather than leaving to a separate contractor.",
  },
  {
    q: "Can access control tie into our cameras and alarm?",
    a: "Yes. When the access system, the cameras, and the alarm come from one installer, a door-forced or held-open event can arm a camera clip and notify the monitoring center, and the alarm can disarm by schedule or by credential.",
  },
  {
    q: "Do you do access control for HOAs and CDDs?",
    a: "Yes — community gates, amenity centers, pools, and fitness rooms are a large part of our access control work. Our HOA and CDD page covers how boards scope and approve those projects.",
  },
];

export default function AccessControlPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(PATH), faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Access Control & Gates", path: PATH }]} />}
        title="Access Control & Gate Systems"
        subtitle="Doors and gates that know who opened them. Credentials per person, schedules per door, and audit logs you can pull yourself — installed and serviced by our own technicians."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
                Why Access Control
              </span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">
              Keys Don&apos;t Have a Log
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-5">
              A physical key can be copied, lent, and never returned, and a shared gate code
              eventually belongs to everyone who ever delivered a package. Access control replaces
              both with credentials you issue, schedule, and revoke — and a record of every use.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed">
              We install it for businesses, residential communities, and private estates, from a
              single office door to a community entrance with resident lanes, visitor intercom,
              and cameras on both.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/images/gate-access-control.jpg", alt: "Access-controlled community entry gate installed by DCSI" },
              { src: "/images/gate-operator-control-board.jpg", alt: "Gate operator control board during installation" },
              { src: "/images/gate-lock-hardware.jpg", alt: "Electric lock hardware on a pedestrian gate" },
              { src: "/images/gate-post-conduit-cabling.jpg", alt: "Conduit and cabling run into a gate post" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl border border-border">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            What We Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPONENTS.map((c) => (
              <div key={c.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <c.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{c.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-10 max-w-3xl">
            Running a community gate or amenity center? See{" "}
            <Link href="/services/hoa-cdd" className="text-accent hover:underline">
              HOA &amp; CDD security
            </Link>{" "}
            and the{" "}
            <Link href="/resources/hoa-board-security-guide" className="text-accent hover:underline">
              board guide to community security projects
            </Link>
            . For a business, access control usually goes in alongside a{" "}
            <Link href="/services/commercial-security" className="text-accent hover:underline">
              commercial alarm and camera system
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="Access Control Questions" />
      </section>

      <CTABanner
        headline="Every Door, One System"
        body="Tell us how many doors and gates, and who needs to get through them. We'll come out, walk it, and quote it in writing."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
