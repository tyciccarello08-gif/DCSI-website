/**
 * Outbound texts through CallRail's API, sent from the CallRail tracking number
 * so replies land in the same CallRail inbox as calls.
 *
 * Inert until all three are set in Vercel:
 *   CALLRAIL_API_KEY       — CallRail → Settings → API Keys
 *   CALLRAIL_ACCOUNT_ID    — the account ID in CallRail's URL / API settings
 *   CALLRAIL_TEXT_NUMBER   — the SMS-enabled CallRail tracking number texts go
 *                            out from, e.g. +18135551234
 *
 * CallRail requires its one-time business texting registration (A2P 10DLC)
 * before texts to customers are delivered.
 */

const API_BASE = "https://api.callrail.com/v3/a";

function config() {
  const apiKey = process.env.CALLRAIL_API_KEY;
  const accountId = process.env.CALLRAIL_ACCOUNT_ID;
  const from = process.env.CALLRAIL_TEXT_NUMBER;
  return apiKey && accountId && from ? { apiKey, accountId, from } : null;
}

export const smsEnabled = () => config() !== null;

/**
 * US numbers only, as E.164 (+1XXXXXXXXXX). Anything else returns null and is
 * never texted — this route accepts phone numbers from strangers, and texting
 * international or malformed numbers is how SMS-pumping fraud runs up a bill.
 */
export function toUsE164(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  // NANP: area code and exchange can't start with 0 or 1.
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(national)) return null;
  return `+1${national}`;
}

/** Sends one text. Never throws; returns false (and logs) on any failure. */
export async function sendText(to: string, content: string): Promise<boolean> {
  const cfg = config();
  if (!cfg) return false;
  try {
    const res = await fetch(`${API_BASE}/${encodeURIComponent(cfg.accountId)}/text-messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Token token="${cfg.apiKey}"`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_phone_number: to,
        tracking_number: cfg.from,
        content,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("[sms] CallRail rejected text:", res.status, (await res.text()).slice(0, 300));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[sms] CallRail request failed:", err);
    return false;
  }
}

/**
 * True during office hours in Tampa (Mon–Fri, opens–closes from BUSINESS).
 * Computed in America/New_York so a Vercel server in another zone, and DST,
 * can't put the "within the hour" promise on a Saturday night.
 */
export function isOfficeOpen(
  hours: readonly { days: readonly string[]; opens: string; closes: string }[],
  now = new Date(),
): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = get("weekday");
  const hhmm = `${get("hour")}:${get("minute")}`;
  return hours.some((h) => h.days.includes(day) && hhmm >= h.opens && hhmm < h.closes);
}
