import { NextResponse } from "next/server";
import { issueFormToken } from "@/lib/form-token";

// Never cached: every visitor needs a distinct, freshly-timestamped token, and
// a CDN-cached one would hand out an already-expiring value.
export const dynamic = "force-dynamic";

export async function GET() {
  // Null when CONTACT_TOKEN_SECRET is unset. /api/contact treats an
  // unverifiable token as a flag rather than a rejection, so an unconfigured
  // environment degrades to "deliver and flag" instead of a broken form.
  const token = issueFormToken();

  return NextResponse.json(
    { token },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
