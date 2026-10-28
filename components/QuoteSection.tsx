import { Phone, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import GoogleRating from "@/components/GoogleRating";
import { CONTACT, FORM_SERVICES, TESTIMONIALS } from "@/lib/constants";

interface QuoteSectionProps {
  heading: string;
  body: string;
  defaultService?: (typeof FORM_SERVICES)[number];
  /** Which testimonial to show alongside the form, so neighboring pages vary. */
  testimonialIndex?: number;
}

/**
 * Inline quote form for service, city, and home pages, so nobody has to click
 * away to /contact to ask for a price. Carries `id="quote"`, which the hero and
 * banner CTAs and the mobile call bar jump to.
 */
export default function QuoteSection({
  heading,
  body,
  defaultService,
  testimonialIndex = 0,
}: QuoteSectionProps) {
  const testimonial = TESTIMONIALS[testimonialIndex % TESTIMONIALS.length];

  return (
    <section id="quote" className="scroll-mt-24 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
                Free Quote
              </span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-5">
              {heading}
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">{body}</p>

            <ul className="space-y-3 mb-8">
              {[
                "Free on-site consultation, with a fixed price in writing",
                "Installed by our own technicians, not subcontractors",
                "24/7 monitoring from our own center in Lutz",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-text-secondary text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 font-montserrat font-bold text-text-primary text-lg hover:text-accent transition-colors mb-8"
            >
              <Phone size={18} className="text-accent" />
              Rather talk? {CONTACT.phone}
            </a>

            <GoogleRating className="mb-6 flex w-fit" />

            {testimonial && (
              <figure className="border-l-2 border-accent pl-5">
                <blockquote className="font-inter text-text-secondary text-sm leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="font-montserrat font-semibold text-text-primary text-sm mt-3">
                  {testimonial.name}
                </figcaption>
              </figure>
            )}
          </div>

          <ContactForm variant="compact" defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
