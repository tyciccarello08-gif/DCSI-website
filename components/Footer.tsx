import Link from "next/link";
import { Phone, Mail, MapPin, PhoneCall } from "lucide-react";
import { CONTACT, COMPANY, NAV_SERVICES, NAV_RESOURCES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20">
                <span className="font-montserrat font-bold text-white text-base leading-none tracking-tight">DC</span>
              </div>
              <div>
                <div className="font-montserrat font-bold text-text-primary text-base leading-tight">
                  {COMPANY.name}
                </div>
                <div className="text-accent text-[10px] font-inter tracking-[0.15em] uppercase">
                  {COMPANY.tagline}
                </div>
              </div>
            </div>
            <p className="text-text-secondary text-sm font-inter leading-relaxed">
              Tampa Bay&apos;s trusted source for residential &amp; commercial security,
              cameras, and sound systems since {COMPANY.founded}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-inter font-semibold text-text-primary uppercase tracking-[0.15em] text-[11px] mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {NAV_SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-accent text-sm font-inter transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-inter font-semibold text-text-primary uppercase tracking-[0.15em] text-[11px] mb-5">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {NAV_RESOURCES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-accent text-sm font-inter transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-text-secondary hover:text-accent text-sm font-inter transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-accent text-sm font-inter transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-inter font-semibold text-text-primary uppercase tracking-[0.15em] text-[11px] mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-text-secondary text-sm font-inter">
                <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors leading-relaxed"
                >
                  {CONTACT.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-text-secondary text-sm font-inter">
                <Phone size={14} className="text-accent flex-shrink-0" />
                <a href={CONTACT.tollFreeHref} className="hover:text-accent transition-colors">
                  Toll Free: {CONTACT.tollFree}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-text-secondary text-sm font-inter">
                <Phone size={14} className="text-accent flex-shrink-0" />
                <a href={CONTACT.localHref} className="hover:text-accent transition-colors">
                  Local: {CONTACT.local}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-text-secondary text-sm font-inter">
                <PhoneCall size={14} className="text-accent flex-shrink-0" />
                <span>Fax: {CONTACT.fax}</span>
              </li>
              <li className="flex items-center gap-2.5 text-text-secondary text-sm font-inter">
                <Mail size={14} className="text-accent flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-text-secondary text-xs font-inter">
            &copy; {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs font-inter">
            Serving {CONTACT.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  );
}
