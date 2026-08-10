import { Star } from "lucide-react";
import { CONTACT } from "@/lib/constants";

/**
 * "Leave us a review" call-to-action.
 *
 * Renders nothing until CONTACT.googleReviewUrl is set to the Google Business
 * Profile short link, so it can never ship as a dead button. This is the on-site
 * half of a review program — the other half (asking every customer after an
 * install) has to happen in the field, and is where the volume actually comes from.
 */
export default function ReviewCta({ className = "" }: { className?: string }) {
  if (!CONTACT.googleReviewUrl) return null;

  return (
    <div className={`bg-bg-card border border-border rounded-xl p-6 ${className}`}>
      <div className="flex items-center gap-1 mb-3" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="text-accent fill-accent" />
        ))}
      </div>
      <h2 className="font-montserrat font-bold text-text-primary text-base mb-2">
        Worked with us? Leave a review.
      </h2>
      <p className="font-inter text-text-secondary text-sm leading-relaxed mb-5">
        Reviews from real customers are how neighbors in Lutz, Wesley Chapel, and Land O&apos; Lakes
        find us. It takes about a minute.
      </p>
      <a
        href={CONTACT.googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-accent hover:bg-accent-light text-white font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-lg text-xs transition-colors"
      >
        Review us on Google
      </a>
      <p className="font-inter text-text-secondary text-xs mt-4">
        Something wrong instead? Call us first at{" "}
        <a href={CONTACT.phoneHref} className="text-accent hover:underline">
          {CONTACT.phone}
        </a>{" "}
        — we&apos;d rather fix it.
      </p>
    </div>
  );
}
