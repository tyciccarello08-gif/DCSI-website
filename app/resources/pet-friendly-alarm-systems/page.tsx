import Link from "next/link";
import { Dog, Cat, Eye, Layers, Sofa, Siren } from "lucide-react";
import ArticleByline from "@/components/ArticleByline";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

const SLUG = "pet-friendly-alarm-systems";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Pet-Friendly Alarm Systems: Motion Sensors & Pets",
  description:
    "How pet-immune motion detectors work, what their weight ratings mean, and alarm layouts that keep dogs and cats from setting off false alarms.",
  path: PATH,
  type: "article",
});

const TIPS = [
  {
    icon: Dog,
    title: "Match the rating to the pet",
    body: "Pet-immune motion detectors are rated by animal weight — common ratings are around 40, 55, or 80 pounds. The rating assumes a pet moving on the floor. A large dog, or two medium dogs moving together, may exceed it.",
  },
  {
    icon: Cat,
    title: "Plan for climbers",
    body: "Weight ratings don't help with a cat on a bookshelf or a dog on the back of a couch. Anything that puts the animal up in the detector's upper field of view can trip it regardless of size.",
  },
  {
    icon: Eye,
    title: "Aim away from stairs",
    body: "A detector that looks up a staircase sees a pet climbing at the same height as a person. Point motion detectors so stairs, lofts, and catwalks are out of their view.",
  },
  {
    icon: Sofa,
    title: "Watch the furniture",
    body: "Rearranging a room can put a cat tree or a high-backed chair right in front of a sensor that used to be fine. Recheck placement after a move-around.",
  },
  {
    icon: Layers,
    title: "Lean on the perimeter",
    body: "Door and window contacts don't care about pets at all. A system built mostly on the perimeter, with glass-break detectors covering windows, can leave interior motion off — or limited to rooms the pets don't use.",
  },
  {
    icon: Siren,
    title: "Use partitions or zones",
    body: "Many panels can arm some areas and not others. Keep the garage, a bonus room, or the upstairs armed while the room where the dog sleeps stays out of the motion coverage.",
  },
];

const FAQS = [
  {
    q: "Will my dog set off my alarm system?",
    a: "A standard motion detector will usually detect a dog. A pet-immune motion detector, correctly rated for the animal's weight and mounted at the manufacturer's height, is designed to ignore it. Door and window contacts and glass-break detectors aren't affected by pets at all.",
  },
  {
    q: "How do pet-immune motion sensors work?",
    a: "They're designed and mounted so that a warm body low to the floor and below a set size doesn't produce enough of a signal to trigger an alarm, while an adult moving through the room does. Mounting height and aim matter as much as the sensor itself, which is why manufacturers specify both.",
  },
  {
    q: "What if my cat climbs on furniture?",
    a: "That's the most common reason pet-immune detectors still false alarm. A cat on a shelf or the top of a couch is in the part of the detector's view meant for people. The fixes are to aim the detector away from high furniture, rely on perimeter and glass-break protection in that room, or leave interior motion unarmed while the pets are home.",
  },
  {
    q: "Can I have an alarm system with pets and still use motion detectors?",
    a: "Yes. Most households with pets use motion detectors successfully with pet-immune models, careful placement, and arming only the areas the pets can't reach. Test it with the pets home and the monitoring center on test mode before you rely on it.",
  },
];

export default function PetFriendlyAlarmSystemsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "A guide to pet-immune motion detectors and alarm system layouts that prevent false alarms from dogs and cats.",
            published: R.published,
            modified: R.modified,
            image: "/images/01-family-home-security.webp",
            about: "Pet-friendly home alarm systems",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Pet-Friendly Alarm Systems", path: PATH },
            ]}
          />
        }
        title="Pet-Friendly Alarm Systems"
        subtitle="A dog in the house shouldn't mean leaving the alarm off. It means choosing and placing motion detectors with the pet in mind."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Pets are one of the most common reasons people stop arming their alarm. A couple of false
          alarms caused by the dog, a call from the monitoring center, maybe a fee — and the system
          gets left off. That&apos;s the worst outcome, because a system that isn&apos;t armed
          protects nothing.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          It&apos;s also avoidable. Door and window sensors ignore pets entirely, and pet-immune
          motion detectors handle most dogs and cats when they&apos;re placed correctly. Our{" "}
          <Link href="/resources/false-alarm-prevention" className="text-accent hover:underline">
            false alarm guide
          </Link>{" "}
          covers the other common causes.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Six Rules for Alarms and Pets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIPS.map((t) => (
              <div key={t.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <t.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{t.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            Test It With the Pets Home
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            Before relying on a new layout, call the monitoring center and put the account on test,
            arm the system in the mode you&apos;ll actually use, and leave the pets loose for a
            while. Check the panel&apos;s history for any motion events afterward. A detector that
            registered the dog once in an hour will eventually register it at 2 a.m. while
            you&apos;re away.
          </p>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            Already Have Motion Detectors?
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            Older detectors often aren&apos;t pet-immune. On a hardwired system, a detector can
            usually be swapped for a pet-immune model on the same wire in a few minutes. If your
            system is due for an overhaul anyway, our{" "}
            <Link href="/services/security-monitoring" className="text-accent hover:underline">
              security systems
            </Link>{" "}
            page covers what a full upgrade includes.
          </p>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Pets and Alarm Questions" />
        </div>
      </section>

      <RelatedResources slugs={["false-alarm-prevention", "burglar-alarm-faq", "wired-vs-wireless-alarm-systems"]} />

      <CTABanner
        headline="Pets Setting Off Your Alarm?"
        body="We'll swap in pet-immune detectors, re-aim the ones you have, and set up zones so the system stays armed."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
