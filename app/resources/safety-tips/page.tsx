import { Lock, Eye, Lightbulb, Users, Bell, Camera, Home, Smartphone } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { ORG_ID, abs, pageMetadata } from "@/lib/seo";

const PATH = "/resources/safety-tips";

export const metadata = pageMetadata({
  title: "8 Home Security Tips You Can Act On Today",
  description:
    "Practical, no-cost steps to make your home a harder target — lighting, locks, sliding doors, and what actually deters burglars.",
  path: PATH,
  type: "article",
});

const TIPS = [
  {
    icon: Lock,
    title: "Lock All Doors & Windows",
    description:
      "Most burglars enter through unlocked doors and windows. Make locking up a habit every time you leave, even for short errands.",
  },
  {
    icon: Bell,
    title: "Install a Monitored Alarm System",
    description:
      "A professionally monitored alarm is the single most effective deterrent against burglary. Studies show 60% of convicted burglars actively avoided homes with alarm systems.",
  },
  {
    icon: Lightbulb,
    title: "Use Exterior Lighting",
    description:
      "Motion-activated exterior lights eliminate dark areas around your home and make intruders feel exposed. Cover entry points, garages, and side yards.",
  },
  {
    icon: Smartphone,
    title: "Don't Post Vacation Plans Online",
    description:
      "Social media posts announcing you're away from home are an open invitation to burglars. Wait until you're back to share travel photos publicly.",
  },
  {
    icon: Users,
    title: "Get to Know Your Neighbors",
    description:
      "Neighbors who know each other look out for each other. A trusted neighbor can alert you to suspicious activity and keep an eye on your property.",
  },
  {
    icon: Camera,
    title: "Install Security Cameras at Entry Points",
    description:
      "Visible cameras at front doors, garages, and back entrances deter criminals and provide critical evidence if an incident occurs.",
  },
  {
    icon: Home,
    title: "Make Your Home Look Occupied",
    description:
      "Use smart plugs or timer-controlled lights when you're away. Ask a neighbor to collect your mail. An occupied-looking home is a less attractive target.",
  },
  {
    icon: Eye,
    title: "Secure Sliding Doors & Garage Access",
    description:
      "Sliding glass doors are a common weak point. Use a bar in the track and consider a secondary lock. Ensure your garage door has a working, monitored alarm.",
  },
];

/**
 * ItemList markup lets search and AI assistants lift the eight tips as a numbered
 * answer rather than paraphrasing the page.
 */
const tipsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${abs(PATH)}#tips`,
  name: "8 Ways to Improve Your Home Security Right Now",
  numberOfItems: TIPS.length,
  itemListOrder: "https://schema.org/ItemListUnordered",
  publisher: { "@id": ORG_ID },
  itemListElement: TIPS.map((tip, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: tip.title,
    description: tip.description,
  })),
};

export default function SafetyTipsPage() {
  return (
    <>
      <JsonLd data={tipsSchema} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Safety Tips", path: PATH }]} />}
        title="Home Security Safety Tips"
        subtitle="Simple, actionable steps you can take today to protect your home, family, and belongings."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Expert Tips</span>
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-14">
          8 Ways to Improve Your Home Security Right Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TIPS.map((tip, i) => (
            <div key={tip.title} className="bg-bg-card border border-border rounded-xl p-6 flex gap-5">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <tip.icon size={20} className="text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent font-montserrat font-bold text-xs">0{i + 1}</span>
                  <h3 className="font-montserrat font-bold text-text-primary">{tip.title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Take the Next Step — Get a Professional Security System"
        body="The most effective way to protect your home is a professionally installed, monitored security system. Contact DCSI Inc. for a free consultation."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
