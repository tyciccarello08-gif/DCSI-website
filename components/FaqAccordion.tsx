export interface Faq {
  q: string;
  a: string;
}

/**
 * FAQ list rendered as native <details> elements.
 *
 * Deliberately not a client component: the answers ship in the HTML whether or
 * not JavaScript runs, which is both how the FAQPage markup stays honest (the
 * text a crawler reads is the text a visitor can open) and how someone on a bad
 * connection still gets the answer.
 *
 * The matching faqSchema() block is emitted by the page, not here — pages
 * already batch their JSON-LD into a single <script>.
 */
export default function FaqAccordion({
  faqs,
  heading,
}: {
  faqs: readonly Faq[];
  heading?: string;
}) {
  return (
    <>
      {heading && (
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
          {heading}
        </h2>
      )}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group bg-bg-card border border-border rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
              <h3 className="font-montserrat font-bold text-text-primary text-base">{faq.q}</h3>
              <span className="text-accent font-montserrat text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <div className="px-6 pb-6">
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
