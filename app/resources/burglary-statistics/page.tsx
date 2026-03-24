import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Burglary Statistics | DCSI Inc. — Why Home Security Matters",
  description:
    "National and Florida burglary statistics that show why a monitored home security system is one of the smartest investments you can make.",
};

const STATS = [
  { value: "1 in 36", label: "U.S. homes burglarized each year", source: "FBI UCR" },
  { value: "$2,800+", label: "Average loss per burglary incident", source: "FBI UCR" },
  { value: "60%", label: "Of burglaries involve forcible entry", source: "FBI" },
  { value: "67%", label: "Of burglaries occur at residential properties", source: "DOJ" },
  { value: "300%", label: "More likely to be burglarized without a security system", source: "UNC Study" },
  { value: "60%", label: "Of convicted burglars avoided homes with alarms", source: "UNC Study" },
];

const TIPS = [
  "Most residential burglaries occur between 10am and 3pm on weekdays",
  "A monitored alarm is among the top deterrents cited by convicted burglars",
  "Homes without security systems are 3x more likely to be targeted",
  "Florida ranks among the top states for property crime annually",
  "Visible security cameras significantly reduce break-in attempts",
  "Most burglars spend less than 60 seconds attempting to enter — alarms stop them",
];

export default function BurglaryStatisticsPage() {
  return (
    <>
      <HeroBanner
        title="Burglary Statistics"
        subtitle="Understanding the risk is the first step to protecting your home or business."
      />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent text-xs font-montserrat uppercase tracking-widest">By the Numbers</span>
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-14">
          The Reality of Property Crime in America
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-bg-card border border-border rounded-xl p-8 text-center">
              <div className="font-montserrat font-extrabold text-4xl text-accent mb-3">{stat.value}</div>
              <div className="font-inter text-text-primary text-sm font-medium mb-2">{stat.label}</div>
              <div className="font-inter text-text-secondary text-xs">Source: {stat.source}</div>
            </div>
          ))}
        </div>

        <div className="bg-bg-secondary border border-border rounded-xl p-8">
          <h3 className="font-montserrat font-bold text-xl text-text-primary mb-6">Key Findings</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="font-inter text-text-secondary text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        headline="Don't Become a Statistic"
        body="A monitored security system from DCSI Inc. is one of the most effective deterrents against burglary. Call us today for a free consultation."
        ctaText="Protect Your Home Today"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.tollFree}`}
        secondaryCtaHref={CONTACT.tollFreeHref}
      />
    </>
  );
}
