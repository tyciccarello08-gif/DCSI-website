import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESOURCES } from "@/lib/constants";

/**
 * "Keep reading" grid at the foot of each guide.
 *
 * Guides were previously reachable only from the nav menu, which made them
 * near-orphans to a crawler and dead ends to a reader. Each guide names the two
 * or three that a person reading it is most likely to need next; `slugs` are
 * resolved against RESOURCES so a renamed guide updates everywhere.
 */
export default function RelatedResources({
  slugs,
  heading = "Keep Reading",
}: {
  slugs: readonly string[];
  heading?: string;
}) {
  const items = slugs
    .map((s) => RESOURCES.find((r) => r.slug === s))
    .filter((r): r is (typeof RESOURCES)[number] => Boolean(r));

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-baseline justify-between gap-4 mb-8">
        <h2 className="font-montserrat font-extrabold text-2xl text-text-primary">{heading}</h2>
        <Link href="/resources" className="font-inter text-accent text-sm hover:underline">
          All guides
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((r) => (
          <Link
            key={r.slug}
            href={`/resources/${r.slug}`}
            className="group bg-bg-card border border-border hover:border-accent rounded-xl p-6 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-montserrat font-bold text-text-primary text-base leading-snug">
                {r.title}
              </h3>
              <ArrowRight
                size={16}
                className="text-border group-hover:text-accent flex-shrink-0 mt-1 transition-colors"
                aria-hidden="true"
              />
            </div>
            <p className="font-inter text-text-secondary text-sm leading-relaxed">{r.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
