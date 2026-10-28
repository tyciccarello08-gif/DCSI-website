import Link from "next/link";
import { CORE_CITIES } from "@/lib/constants";

/**
 * "Where we install this" links from a service page down to the city pages.
 * Service pages carry the topical authority and city pages carry the local
 * intent; linking them is what lets each lift the other.
 */
export default function AreaLinks({ service }: { service: string }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-montserrat font-bold text-lg text-text-primary mb-2">
        {service} Near You
      </h2>
      <p className="font-inter text-text-secondary text-sm mb-6">
        Installed and serviced from our Lutz office across Hillsborough and Pasco Counties.{" "}
        <Link href="/service-areas" className="text-accent hover:underline">
          See every area we cover
        </Link>
        .
      </p>
      <ul className="flex flex-wrap gap-3">
        {CORE_CITIES.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/service-areas/${c.slug}`}
              className="inline-block font-inter text-sm text-text-secondary hover:text-accent border border-border hover:border-accent/40 rounded-full px-4 py-2 transition-colors"
            >
              {c.name}, FL
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
