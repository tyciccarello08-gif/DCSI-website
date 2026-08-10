import { BUSINESS } from "@/lib/constants";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

const to12h = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour} ${period}` : `${hour}:${String(m).padStart(2, "0")} ${period}`;
};

/**
 * Office hours, rendered per weekday from the same constant that feeds the
 * LocalBusiness `openingHoursSpecification`. Keeping one source means the page and
 * the structured data can never drift — a mismatch there is a weak local signal.
 *
 * Monitoring runs 24/7 regardless of office hours, which is called out separately
 * because it's the thing people are actually asking when they check hours.
 */
export default function BusinessHours({ className = "" }: { className?: string }) {
  const hoursFor = (day: string) =>
    BUSINESS.openingHours.find((h) => (h.days as readonly string[]).includes(day));

  return (
    <div className={className}>
      <h2 className="font-montserrat font-bold text-sm text-text-primary uppercase tracking-wider mb-4">
        Office Hours
      </h2>
      <dl className="space-y-1.5">
        {DAYS.map((day) => {
          const h = hoursFor(day);
          return (
            <div key={day} className="flex items-baseline justify-between gap-4">
              <dt className="font-inter text-text-secondary text-sm">{day}</dt>
              <dd className="font-inter text-text-primary text-sm">
                {h ? `${to12h(h.opens)} – ${to12h(h.closes)}` : "Closed"}
              </dd>
            </div>
          );
        })}
      </dl>
      <div className="mt-4 flex items-start gap-2.5 border-t border-border pt-4">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
        <p className="font-inter text-text-secondary text-xs leading-relaxed">
          <strong className="text-text-primary">Alarm monitoring runs 24/7, every day</strong> —
          including nights, weekends, and holidays. Office hours apply to sales, scheduling, and
          service calls.
        </p>
      </div>
    </div>
  );
}
