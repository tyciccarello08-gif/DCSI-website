import { Star } from "lucide-react";
import { CONTACT, HAS_AGGREGATE_RATING, REVIEWS } from "@/lib/constants";

/**
 * Live Google star rating + review count, linking out to the reviews.
 *
 * Renders nothing until REVIEWS in lib/constants.ts holds the real numbers from
 * the Google Business Profile — a made-up rating is worse than none, both for
 * visitors and for Google's review-markup rules.
 */
export default function GoogleRating({ className = "" }: { className?: string }) {
  if (!HAS_AGGREGATE_RATING) return null;
  const rating = REVIEWS.ratingValue as number;
  const href = CONTACT.googleProfileUrl || CONTACT.mapsUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-bg-card border border-border hover:border-accent/40 rounded-xl px-4 py-3 transition-colors ${className}`}
    >
      <span className="font-montserrat font-extrabold text-2xl text-text-primary leading-none">
        {rating.toFixed(1)}
      </span>
      <span>
        <span className="flex items-center gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-border"}
            />
          ))}
        </span>
        <span className="block font-inter text-text-secondary text-xs mt-1">
          {REVIEWS.reviewCount} Google reviews. Read them →
        </span>
      </span>
      <span className="sr-only">
        Rated {rating.toFixed(1)} out of 5 from {REVIEWS.reviewCount} Google reviews
      </span>
    </a>
  );
}
