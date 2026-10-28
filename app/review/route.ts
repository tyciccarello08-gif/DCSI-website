import { NextResponse } from "next/server";
import { CONTACT, SITE_URL } from "@/lib/constants";

/**
 * dcsisecurity.com/review — a short, memorable link for the after-job review
 * text ("Thanks for having us out! If you have a minute: dcsisecurity.com/review").
 * Forwards to the Google "write a review" box once CONTACT.googleReviewUrl is
 * set, and to the on-site reviews page until then, so the link is safe to start
 * using right away and never needs changing.
 */
export function GET() {
  return NextResponse.redirect(CONTACT.googleReviewUrl || `${SITE_URL}/dcs/reviews`, 307);
}
