"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { CONTACT } from "@/lib/constants";

/**
 * Sticky Call / Free Quote bar for phones. Most local-service visitors are on
 * mobile and want to call, and the header phone link scrolls out of view.
 *
 * "Free Quote" jumps to the page's own #quote form when there is one, and falls
 * back to /contact on pages without it.
 */
export default function MobileCallBar() {
  const onQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const form = document.getElementById("quote");
    if (!form) return;
    e.preventDefault();
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Spacer so the fixed bar never covers the bottom of the footer. */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 border-t border-border bg-bg-primary/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
        <a
          href={CONTACT.phoneHref}
          className="flex items-center justify-center gap-2 h-16 bg-accent text-white font-inter font-bold uppercase tracking-wider text-sm"
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          href="/contact"
          onClick={onQuoteClick}
          className="flex items-center justify-center gap-2 h-16 text-text-primary font-inter font-bold uppercase tracking-wider text-sm"
        >
          <FileText size={16} />
          Free Quote
        </Link>
      </div>
    </>
  );
}
