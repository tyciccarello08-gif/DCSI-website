import Link from "next/link";
import { Bell, Lock, MapPinned, Smartphone, ThermometerSun, Video } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { CONTACT, CUSTOMER_PORTAL, HAS_PORTAL } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/app-and-login";

export const metadata = pageMetadata({
  title: "DCS App & Login — Remote Access to Your Alarm System",
  description:
    "Arming, disarming, and watching cameras from your phone on a DCS (DCSI, Inc.) system — how to identify which app your panel uses and what to do when a login fails.",
  path: PATH,
});

const CAPABILITIES = [
  {
    icon: Lock,
    title: "Arm and disarm remotely",
    body: "The one people use most: letting a cleaner in without giving out a code, or arming the house from the airport after realizing nobody did.",
  },
  {
    icon: Bell,
    title: "Notifications on events",
    body: "A push when the system is armed or disarmed, when a specific code is used, or when a particular zone opens. Set up thoughtfully this is genuinely useful; set up carelessly it is noise you learn to swipe away.",
  },
  {
    icon: Video,
    title: "Camera live view and playback",
    body: "On systems with cameras, live view and recorded clips from the same app. Worth testing on cellular data rather than on the house Wi-Fi, since that's how you'll actually use it.",
  },
  {
    icon: MapPinned,
    title: "History and activity log",
    body: "Who disarmed at 3:40pm, whether the system was armed last night, which zone tripped. This log answers most household disputes about the alarm.",
  },
  {
    icon: ThermometerSun,
    title: "Smart home controls",
    body: "On systems with them, locks, thermostats, garage doors, and lighting from the same place as the alarm — which is the actual argument for putting them on the security platform rather than in five separate apps.",
  },
  {
    icon: Smartphone,
    title: "Multiple users, separate logins",
    body: "Each adult gets their own login rather than sharing one. Same reason as user codes: access can be removed for one person without disrupting everyone else.",
  },
];

const TROUBLESHOOTING = [
  {
    title: "The app rejects your password",
    body: "App logins are separate from your alarm passcode and from the keypad user code — three different credentials that people routinely try interchangeably. Use the app's own password reset first; it goes to the email address on the account.",
  },
  {
    title: "The reset email never arrives",
    body: "It is usually going to an address nobody checks anymore, or to a spouse's address the account was set up under. Check spam, then call the office to confirm which email is actually on the account.",
  },
  {
    title: "The app connects but the panel doesn't respond",
    body: "This is a communication problem rather than a login problem — the panel may have lost power, lost its cellular path, or been taken offline. If the keypad at the house is also showing trouble, that confirms it. Call the office.",
  },
  {
    title: "You inherited the system with the house",
    body: "Remote access has to be reassigned to you rather than left on the previous owner's login, and so does the call list. Call the office with the service address; this is a common and completely routine request.",
  },
];

const FAQS = [
  {
    q: "What app do I use with my DCS alarm system?",
    a: HAS_PORTAL
      ? `Systems we install use ${CUSTOMER_PORTAL.appName}. If you are not sure whether that matches your system, the app name is usually printed on the keypad or shown in its menu — and the office can confirm it in under a minute.`
      : "It depends on which panel is installed at your property, since the app is tied to the panel platform rather than to us. The quickest way to find out: look at the keypad, which usually carries the platform branding, or check the menu on a touchscreen panel. If it isn't obvious, call the office with your service address and we'll tell you exactly which app to download — that is faster than guessing at an app store listing.",
  },
  {
    q: "How do I log in to my DCS security system online?",
    a: HAS_PORTAL
      ? `Web access is at ${CUSTOMER_PORTAL.loginUrl}, using the same credentials as the mobile app. Note that this login is separate from your alarm passcode and from your keypad user code.`
      : "Remote access runs through the app platform tied to your panel, and the web login is the same credential set as the mobile app. It is not the same as your alarm passcode or your keypad user code — those three are separate on purpose. If you don't know which platform your system uses, call the office with your service address and we'll point you at the right one.",
  },
  {
    q: "My login isn't working — what do I do?",
    a: "Start with the app's own password reset, which sends to the email address on the account. If the email never arrives, the address on file is usually the problem: it may be an old address, or a spouse's. Call the office to confirm which email is on the account. If the login works but the panel doesn't respond, that is a communication issue rather than a credential issue, and it needs a phone call rather than another reset.",
  },
  {
    q: "Can I arm and disarm my alarm from my phone?",
    a: "Yes, on systems set up for remote access. You can also check whether the system is currently armed, review the activity log, and — on systems with cameras — view live and recorded video. If your system is older and doesn't have remote access, adding it is often possible without replacing the panel; it depends on the panel's communicator.",
  },
  {
    q: "Is there a monthly cost for the app?",
    a: "Remote access and app features are part of the monitoring service, and what is included depends on the service level on your account — video, in particular, is usually the piece that varies. Rather than quote a figure that may not match your account, call and ask what your plan includes; it is a short answer once we can see the account.",
  },
  {
    q: "I bought a house with a DCS system already in it. How do I get access?",
    a: `Call the office at ${CONTACT.phone} with the service address. Remote access, the call list, and the user codes all need to be reassigned from the previous owner to you — leaving any of them in place means the previous owner can still be called about your alarm, which is a situation worth resolving before it comes up.`,
  },
];

export default function DcsAppLoginPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "DCS App & Login — Remote Access to a DCSI Alarm System",
            description:
              "How remote access works on a DCS (DCSI, Inc.) security system: arming and disarming from a phone, notifications, camera viewing, identifying which app a panel uses, and resolving login problems.",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "App & Login", path: PATH },
            ]}
          />
        }
        title="DCS App & Remote Access"
        subtitle="Arming from the driveway, letting the dog walker in from work, and what to do when the app won't take your password."
        ctaText="Contact the Office"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Which app */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
          Which App Do I Need?
        </h2>
        {HAS_PORTAL ? (
          <>
            <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
              Systems we install use{" "}
              <strong className="text-text-primary">{CUSTOMER_PORTAL.appName}</strong>. Web access
              uses the same credentials as the mobile app.
            </p>
            <div className="flex flex-wrap gap-4">
              {CUSTOMER_PORTAL.loginUrl && (
                <a
                  href={CUSTOMER_PORTAL.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-light text-white font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-lg text-xs transition-colors"
                >
                  Web login →
                </a>
              )}
              {CUSTOMER_PORTAL.appStoreUrl && (
                <a
                  href={CUSTOMER_PORTAL.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border hover:border-accent text-text-primary hover:text-accent font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-lg text-xs transition-colors"
                >
                  iPhone app
                </a>
              )}
              {CUSTOMER_PORTAL.playStoreUrl && (
                <a
                  href={CUSTOMER_PORTAL.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border hover:border-accent text-text-primary hover:text-accent font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-lg text-xs transition-colors"
                >
                  Android app
                </a>
              )}
            </div>
          </>
        ) : (
          <>
            <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
              The app is tied to the panel installed at your property rather than to us, so the
              honest answer is: it depends on what&apos;s on your wall. Two ways to find out in
              under a minute.
            </p>
            <ol className="space-y-4 mb-8">
              {[
                "Look at the keypad. The platform branding is usually printed on it, or shown in the menu on a touchscreen panel.",
                `Call the office at ${CONTACT.phone} with your service address. We can see the account and tell you exactly which app to download.`,
              ].map((step, i) => (
                <li key={step} className="flex gap-5">
                  <span className="font-montserrat font-bold text-accent text-sm flex-shrink-0 w-7 pt-0.5">
                    0{i + 1}
                  </span>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                We deliberately don&apos;t list a single app here. Sending someone locked out at
                11pm to the wrong app-store listing costs them the one thing they don&apos;t have,
                and panels change over the years — a customer from 2011 and one from last month may
                genuinely need different apps.
              </p>
            </div>
          </>
        )}
      </section>

      {/* Capabilities */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            What Remote Access Actually Does
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CAPABILITIES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-montserrat font-bold text-text-primary text-base">{title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          When the Login Fails
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-12">
          Three separate credentials get confused for each other constantly: your{" "}
          <strong className="text-text-primary">app password</strong>, your{" "}
          <strong className="text-text-primary">alarm passcode</strong> (the word you give us to
          cancel an alarm), and your <strong className="text-text-primary">keypad user code</strong>{" "}
          (the digits you punch to disarm). They are not interchangeable.
        </p>
        <div className="space-y-5">
          {TROUBLESHOOTING.map((t) => (
            <div key={t.title} className="bg-bg-card border border-border rounded-xl p-7">
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-2">
                {t.title}
              </h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="font-inter text-text-secondary text-sm leading-relaxed mt-10">
          If the panel itself is beeping or showing a trouble condition, that&apos;s a different
          problem —{" "}
          <Link href="/dcs/customer-service" className="text-accent hover:underline">
            start with customer service
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="App & Login Questions" />
        </div>
      </section>

      <DcsPageLinks exclude="app-and-login" />

      <CTABanner
        headline="We Can Look at the Account"
        body="Which app, which email is on file, whether remote access is enabled — all faster to check than to guess at."
        ctaText="Contact the Office"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
