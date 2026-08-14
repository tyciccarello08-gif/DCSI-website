import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DCS_PAGES } from "@/lib/constants";

/**
 * Cross-links across the /dcs cluster.
 *
 * Every page in the cluster answers a different question about the same company,
 * and someone who arrives on one of them (searching "DCS phone number", say) is
 * frequently one click from what they actually needed. `exclude` drops the
 * current page so nothing self-links.
 */
export default function DcsPageLinks({
  exclude,
  heading = "More on DCS",
  intro,
}: {
  /** Slug of the current page, omitted from the grid. */
  exclude?: string;
  heading?: string;
  intro?: string;
}) {
  const pages = DCS_PAGES.filter((p) => p.slug !== exclude);

  return (
    <section className="bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          {heading}
        </h2>
        {intro && (
          <p className="font-inter text-text-secondary leading-relaxed max-w-2xl mb-10">{intro}</p>
        )}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${intro ? "" : "mt-10"}`}>
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={`/dcs/${p.slug}`}
              className="group bg-bg-card border border-border hover:border-accent rounded-xl p-6 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-montserrat font-bold text-text-primary text-base leading-snug">
                  {p.label}
                </h3>
                <ArrowRight
                  size={16}
                  className="text-border group-hover:text-accent flex-shrink-0 mt-1 transition-colors"
                  aria-hidden="true"
                />
              </div>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{p.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
