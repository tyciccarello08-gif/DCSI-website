import Link from "next/link";
import { Phone, Mail, MapPin, PhoneCall, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BusinessHours from "@/components/BusinessHours";
import { CITIES, CONTACT, COMPANY, SERVICE_AREAS } from "@/lib/constants";
import { ORG_ID, abs, pageMetadata } from "@/lib/seo";

const PATH = "/contact";

export const metadata = pageMetadata({
  title: "Contact Us — Lutz, FL | (813) 949-6500",
  description:
    "Call (813) 949-6500 or message DCSI Inc. at 128 W. Lutz Lake Fern Rd, Lutz, FL 33548 for a free, no-obligation security consultation and quote.",
  path: PATH,
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${abs(PATH)}#webpage`,
  url: abs(PATH),
  name: "Contact DCSI Inc. — Lutz, FL",
  mainEntity: { "@id": ORG_ID },
};

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    value: CONTACT.address,
    href: CONTACT.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    external: false,
  },
  {
    icon: PhoneCall,
    label: "Fax",
    value: CONTACT.fax,
    href: null,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    icon: Clock,
    label: "Monitoring",
    value: "24/7 In-House Monitoring",
    href: null,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />

      {/* Hero */}
      <section className="relative grid-bg pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs trail={[{ name: "Contact", path: PATH }]} className="mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
              {COMPANY.name}
            </span>
          </div>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-primary mb-4">
            Contact DCSI Inc. — Lutz, FL
          </h1>
          <p className="font-inter text-text-secondary text-lg max-w-xl">
            Request a free quote, ask a question, or schedule a consultation. We respond promptly.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-montserrat font-bold text-xl text-text-primary mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-montserrat font-semibold text-text-secondary text-xs uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="font-inter text-text-primary text-sm hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-inter text-text-primary text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                Serving <strong className="text-text-primary">{CONTACT.serviceArea}</strong>
              </p>
              <p className="font-inter text-text-secondary text-sm mt-3">
                We offer free consultations — no pressure, no obligation.
              </p>
            </div>

            <BusinessHours />

            {/* Naming the cities we cover in visible copy is what lets local and
                AI search match us to "near me" queries in each one. Cities with a
                dedicated page link to it. */}
            <div>
              <h2 className="font-montserrat font-bold text-sm text-text-primary uppercase tracking-wider mb-4">
                Areas We Serve
              </h2>
              <ul className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => {
                  const city = CITIES.find((c) => c.name === area);
                  const label = `${area}, FL`;
                  return (
                    <li key={area}>
                      {city ? (
                        <Link
                          href={`/service-areas/${city.slug}`}
                          className="inline-block font-inter text-text-secondary hover:text-accent text-xs border border-border hover:border-accent/40 rounded-full px-3 py-1.5 transition-colors"
                        >
                          {label}
                        </Link>
                      ) : (
                        <span className="inline-block font-inter text-text-secondary text-xs border border-border rounded-full px-3 py-1.5">
                          {label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Embedded map — keyless, and lazy so it never blocks LCP. */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src={CONTACT.mapEmbedUrl}
                title={`Map to ${COMPANY.name} at ${CONTACT.address}`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>

            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent font-montserrat font-semibold uppercase tracking-wide text-xs"
            >
              View on Google Maps →
            </a>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
