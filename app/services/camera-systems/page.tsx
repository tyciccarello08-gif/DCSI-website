import Image from "next/image";
import Link from "next/link";
import { Camera, Smartphone, Eye, Users } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/camera-systems";

export const metadata = pageMetadata({
  title: "CCTV & Security Camera Installation in Tampa, FL",
  description:
    "CCTV, DVR, and IP camera installation for homes and businesses across Hillsborough & Pasco Counties, FL. Remote viewing and free on-site quotes.",
  path: PATH,
});

const ADVANTAGES = [
  "Use as video confirmation to an alarm event",
  "Review an incident at work without the 'he said she said'",
  "Know who is at your door before you open it",
  "Watch your home in real-time from anywhere in the world",
  "Visual confirmation that your children are home from school safely",
  "Know when a package is delivered to your home or business",
  "Monitor children while you work in another part of the house",
  "Keep an eye on your property while traveling",
  "View cameras live from your iPhone or smartphone",
  "Record full time or only when an event is triggered",
  "Save from days to months of video to your DVR",
  "Get email alerts of events on a custom schedule",
];

const CATEGORIES = [
  { icon: Camera, title: "DVRs & NVRs", description: "Digital and network video recorders storing days to months of footage." },
  { icon: Eye, title: "Outdoor Cameras", description: "Weatherproof cameras covering entry points, driveways, and perimeters." },
  { icon: Users, title: "Indoor Cameras", description: "Discreet indoor units for monitoring interior spaces." },
  { icon: Smartphone, title: "Mobile Viewing Apps", description: "View your DVR live from any iPhone, Android, or web browser." },
];

const FAQS = [
  {
    q: "How many security cameras does my home need?",
    a: "Count the approaches rather than the walls. Most suburban Tampa Bay homes need four to six cameras — front door, driveway, each side gate, and the rear of the house or lanai. Townhouses often need two or three; acreage with gates and outbuildings can need eight or more.",
  },
  {
    q: "Can I watch my cameras from my phone?",
    a: "Yes. Every system we install includes remote viewing from an iPhone, Android phone, or web browser, with live view and recorded playback. We set up the app and walk you through it at handover.",
  },
  {
    q: "How long is security camera footage stored?",
    a: "It depends on the number of cameras, the resolution, and whether they record continuously or on motion, and the recorder's storage is sized to match. For most homes we aim for at least two to four weeks — long enough to notice a problem and go back for it.",
  },
  {
    q: "Do the cameras keep recording if the internet goes down?",
    a: "Yes. The systems we install record to a local recorder on site, so footage keeps being saved when the internet is out. Remote viewing pauses until the connection returns. With a battery backup on the recorder, recording also continues through short power outages.",
  },
  {
    q: "Can cameras be tied into the alarm system?",
    a: "Yes. When the alarm and cameras are installed together, the monitoring center can use video to verify an alarm event, and you can see what triggered the alarm from the same app.",
  },
];

export default function CameraSystemsPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(PATH), faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Camera Systems", path: PATH }]} />}
        title="CCTV & Security Camera Systems"
        subtitle="Custom camera installations for homes and businesses across Tampa Bay — with professional walkthrough, training, and ongoing support included."
        ctaText="Get a Custom Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Overview</span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
              Everything Included, Start to Finish
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-6">
              All DCSI camera installations come with a professional walkthrough and installation by
              our certified team. Every system includes cable installation, compression fittings,
              power supplies, demo, training, and end support.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">
              Custom quotes available to fit <strong className="text-text-primary">any</strong> commercial
              or residential need — we work with your layout, budget, and security goals.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-block bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
            >
              Call for a Free Quote
            </a>
          </div>

          {/* Advantages list */}
          <div>
            <h3 className="font-montserrat font-bold text-xl text-text-primary mb-6">
              Why Install a Camera System?
            </h3>
            <ul className="space-y-3">
              {ADVANTAGES.map((adv) => (
                <li key={adv} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="font-inter text-text-secondary text-sm leading-relaxed">{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Installation photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/amenity-center-camera.jpg"
              alt="Dome security camera covering a community clubhouse and pool deck"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/camera-dome-soffit-install.jpg"
              alt="Discreet dome camera mounted under a residential soffit"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Equipment</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-14">
            What We Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <cat.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{cat.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="font-inter text-text-secondary text-xs leading-relaxed border border-border rounded-lg p-6 bg-bg-card">
          <strong className="text-text-primary">Note:</strong> Some restrictions may apply. Additional fees may apply to wire
          runs over one hundred feet, inaccessible attics, conduit or piping that needs to be secured
          or trenched, A/C outlets added, internet modems, and networking DVR. All systems come with
          a ninety-day warranty on labor and one year on parts. Extended warranties and service
          contracts are available.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="Security Camera Questions" />
        <p className="font-inter text-text-secondary text-sm leading-relaxed mt-10">
          Planning a system? Read <Link href="/resources/how-many-security-cameras" className="text-accent hover:underline">how many security cameras a house needs</Link>, or see <Link href="/services/commercial-security" className="text-accent hover:underline">commercial camera systems</Link> for a business.
        </p>
      </section>

      <CTABanner
        headline="Get a Custom Camera System Quote"
        body="Tell us about your property and we'll design the perfect camera solution for you."
        ctaText="Request a Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
