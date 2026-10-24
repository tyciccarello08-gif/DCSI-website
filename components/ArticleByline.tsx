/**
 * Visible "Updated <date> · DCSI, Inc." line for guides.
 *
 * Shows the same dateModified the Article schema carries, so the date a reader
 * sees and the date a crawler reads can't disagree. Noon is appended before
 * parsing so a bare ISO date doesn't roll back a day in US time zones.
 */
export default function ArticleByline({ modified }: { modified: string }) {
  const date = new Date(`${modified}T12:00:00`);
  return (
    <p className="font-inter text-text-secondary text-xs uppercase tracking-widest mb-6">
      Updated{" "}
      <time dateTime={modified}>
        {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </time>{" "}
      · DCSI, Inc., Lutz FL
    </p>
  );
}
