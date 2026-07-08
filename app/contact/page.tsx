import type { Metadata } from "next";
import { Phone, Mail, MapPin, PhoneCall, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact DCSI Inc. | Lutz, FL — (813) 949-6500",
  description:
    "Contact DCSI Inc. Security & Sound in Lutz, FL. Call (813) 949-6500 or send us a message for a free security consultation.",
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
      {/* Hero */}
      <section className="relative grid-bg pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
              {COMPANY.name}
            </span>
          </div>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-primary mb-4">
            Contact Us
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
