import Image from "next/image";
import Link from "next/link";
import { Camera, HardDrive, Monitor, Moon, Smartphone, Video } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/cameras";

export const metadata = pageMetadata({
  title: "DCS Camera Systems — CCTV & IP Cameras in Tampa Bay",
  description:
    "DCS (DCSI, Inc.) camera systems: CCTV and IP cameras, recorder retention, remote phone viewing, and video verification of alarms. Hillsborough & Pasco, FL.",
  path: PATH,
});

const CAPABILITIES = [
  {
    icon: Camera,
    title: "Cameras chosen for the location",
    body: "Dome cameras under soffits and in interior corners, bullets where you want the mount visible and the throw longer, turret styles where soffit reflection would wash out the night image. The mount point and the lens matter more than the megapixel number on the box.",
  },
  {
    icon: HardDrive,
    title: "Recording and retention",
    body: "An on-site recorder holds the footage, and how many days it keeps depends on camera count, resolution, and whether cameras record continuously or on motion. Two weeks is a common target for a home; commercial sites often need thirty days or more for insurance or policy reasons. This gets sized before install, not discovered afterward.",
  },
  {
    icon: Smartphone,
    title: "Remote viewing",
    body: "Live view and recorded playback from a phone or laptop, wherever you are. It is the feature people use most and the one worth testing at handover on your own phone, on cellular data rather than on the house Wi-Fi, so you know it works when you're actually away.",
  },
  {
    icon: Moon,
    title: "Night performance",
    body: "Most of what a camera exists to catch happens after dark, so the night image is the one that counts. Infrared range, how the camera handles a porch light or a headlight sweep, and where the camera sits relative to its own IR reflection all decide whether you get a face or a white blur.",
  },
  {
    icon: Video,
    title: "Video verification of alarms",
    body: "Cameras tied to the alarm system let a monitoring operator see what actually tripped the zone. That changes how the call is prioritized and cuts down on dispatches for a curtain moving in an AC vent.",
  },
  {
    icon: Monitor,
    title: "Commercial and community coverage",
    body: "Entrances, registers, docks, gates, amenity centers, and parking. Multi-site businesses and HOA boards generally need documented camera placement and a retention policy as much as they need the hardware itself.",
  },
];

const FAQS = [
  {
    q: "What kind of camera systems does DCS install?",
    a: "Professional CCTV and IP camera systems for homes, businesses, and community associations — cameras hardwired back to an on-site recorder, with remote viewing and recorded playback from a phone or computer. This is a different category from a plug-in consumer camera: the cameras are powered and networked over structured cable rather than depending on Wi-Fi, and the footage lives on a recorder you own rather than on a subscription cloud.",
  },
  {
    q: "How long does a DCS camera system keep recordings?",
    a: "It depends on how many cameras there are, what resolution they record at, and whether they record continuously or only on motion. Two weeks of retention is a common target for a home and thirty days or more is typical for commercial sites. Retention is sized against your requirement when the system is designed, so it should never be a surprise later.",
  },
  {
    q: "Can I watch my DCS cameras from my phone?",
    a: "Yes — live view and recorded playback from a smartphone, tablet, or computer. It is worth testing this at handover on your own phone over cellular data rather than over the house Wi-Fi, since that is the condition you will actually use it in.",
  },
  {
    q: "Do the cameras work with my alarm system?",
    a: "They can, and there is a real benefit to it. When cameras are integrated with a monitored alarm, an operator can visually verify what triggered a zone before dispatching. That means faster prioritization on a genuine break-in and fewer dispatches — and fewer municipal false-alarm charges — on something harmless.",
  },
  {
    q: "Does DCS install cameras for HOAs and gated communities?",
    a: "Yes. Community work is a distinct category — entry and exit gate cameras, amenity center and pool coverage, and common-area monitoring, usually paired with gate access control. Boards typically also need the placement and retention documented for their records, which is part of how we scope community projects.",
  },
  {
    q: "Can DCS add cameras to a system I already have?",
    a: "Often. Whether existing cameras or an existing recorder can be extended depends on the hardware and the cabling already in the walls. Sending someone to look at what is there is usually worth it, because reusing serviceable cable is a large share of the cost on a camera project.",
  },
];

export default function DcsCamerasPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "DCS Camera Systems — CCTV and IP Camera Installation in Tampa Bay",
            description:
              "Camera systems installed by DCS (DCSI, Inc.): CCTV and IP cameras, on-site recording and retention, remote mobile viewing, night performance, and video verification of alarm events.",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "Camera Systems", path: PATH },
            ]}
          />
        }
        title="DCS Camera Systems"
        subtitle="Cameras that produce usable footage at 2am — chosen for the mount point, wired properly, and viewable from your phone."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed">
          Almost every camera looks fine in daylight in a showroom. The ones that disappoint do it
          at night, at the exact moment they were bought for — a face lost to glare, a plate
          unreadable, a camera pointed at a spot nobody walks through. Placement, lens choice, and
          night performance decide whether a system is evidence or decoration.
        </p>
      </section>

      {/* Capabilities */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            What Goes Into a DCS Camera Install
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CAPABILITIES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-montserrat font-bold text-text-primary text-lg">{title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install image */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-56 sm:h-72">
          <Image
            src="/images/camera-dome-soffit-install.jpg"
            alt="Dome camera installed under a soffit by DCSI Inc. in the Tampa Bay area"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/55 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="font-montserrat font-extrabold text-xl sm:text-3xl text-text-primary max-w-lg leading-snug">
                Mounted where it sees something.<br />
                <span className="text-accent">Wired to last.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary leading-relaxed">
          Cameras are frequently installed alongside the alarm system rather than on their own —
          see{" "}
          <Link href="/dcs/alarm-monitoring" className="text-accent hover:underline">
            DCS alarm monitoring
          </Link>{" "}
          for how video verification changes an alarm response, or{" "}
          <Link href="/services/camera-systems" className="text-accent hover:underline">
            the full camera systems service page
          </Link>{" "}
          for equipment detail.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Camera Questions" />
        </div>
      </section>

      <DcsPageLinks exclude="cameras" />

      <CTABanner
        headline="See What You've Been Missing"
        body="We'll walk the property, show you what each camera would actually cover, and quote it in writing."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
