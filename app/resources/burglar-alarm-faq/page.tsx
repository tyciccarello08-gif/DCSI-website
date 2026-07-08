import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Burglar Alarm FAQ | DCSI Inc. Tampa",
  description:
    "Answers to common questions about burglar alarms, security system monitoring, and home protection from DCSI Inc. in Tampa Bay.",
};

const FAQS = [
  {
    q: "How does a burglar alarm system work?",
    a: "A burglar alarm system uses sensors placed at entry points (doors, windows) and motion detectors throughout your home or business. When a sensor is triggered, it sends a signal to the control panel, which activates the alarm and notifies your monitoring center — who then contacts you and, if necessary, dispatches emergency services.",
  },
  {
    q: "What happens when my alarm is triggered?",
    a: "When an alarm is triggered, your monitoring center is immediately notified. They will attempt to contact you using your provided contact list. If they cannot reach you or if you confirm there is an emergency, they will dispatch the appropriate emergency services to your location.",
  },
  {
    q: "How do I choose the right security system for my home?",
    a: "The right system depends on the size of your property, number of entry points, your monitoring preferences, and budget. DCSI Inc. offers free consultations where we assess your property and recommend a custom solution — at no pressure and no cost.",
  },
  {
    q: "What is 24/7 professional monitoring?",
    a: "24/7 professional monitoring means trained security professionals are watching your system around the clock — every day of the year. DCSI Inc. handles monitoring in-house, meaning faster response times and a more personal connection to your account.",
  },
  {
    q: "Can I control my security system remotely?",
    a: "Yes. Modern security systems allow you to arm/disarm your system, view live camera feeds, receive alerts, and control smart home devices from anywhere using your smartphone or tablet.",
  },
  {
    q: "What is the difference between residential and commercial security systems?",
    a: "Residential systems are designed for homes — typically smaller scale, simpler zones, and focused on perimeter protection. Commercial systems are built for larger spaces, multiple access points, employee access control, and higher security requirements. DCSI Inc. designs and installs both.",
  },
  {
    q: "Do I need a permit to install a burglar alarm?",
    a: "Many municipalities in Florida require an alarm permit to operate a monitored security system. DCSI Inc. will advise you on local permit requirements during your installation consultation.",
  },
  {
    q: "What happens if the power goes out?",
    a: "Most modern security systems include a battery backup that keeps the system operational for several hours during a power outage. Cellular communication (rather than landline) also ensures your system can still communicate with the monitoring center.",
  },
];

export default function BurglarAlarmFAQPage() {
  return (
    <>
      <HeroBanner
        title="Burglar Alarm FAQ"
        subtitle="Answers to the most common questions about security systems, monitoring, and home protection."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group bg-bg-card border border-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="font-montserrat font-bold text-text-primary text-base">{faq.q}</span>
                <span className="text-accent font-montserrat text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Still Have Questions?"
        body="Call us directly or send a message — we're happy to walk you through your options."
        ctaText="Contact Us"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
