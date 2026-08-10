import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visible breadcrumb trail plus the matching BreadcrumbList markup. `trail` omits
 * Home (added automatically) and ends with the current page, which renders as
 * plain text rather than a self-link.
 */
export default function Breadcrumbs({
  trail,
  className = "",
}: {
  trail: readonly Crumb[];
  className?: string;
}) {
  const items = [{ name: "Home", path: "/" }, ...trail];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-1.5 font-inter text-xs text-text-secondary">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    size={12}
                    className="text-border flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span aria-current="page" className="text-text-primary">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
