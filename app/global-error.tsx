"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body style={{ background: "#0A0A0A", color: "#F9FAFB", fontFamily: "sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "1rem" }}>
          <div>
            <div style={{ color: "#E3000F", fontSize: "5rem", fontWeight: 900, lineHeight: 1, marginBottom: "1rem" }}>
              Error
            </div>
            <p style={{ color: "#9CA3AF", marginBottom: "2rem", fontSize: "0.875rem" }}>
              A critical error occurred. Please refresh the page.
            </p>
            <button
              onClick={reset}
              style={{ background: "#E3000F", color: "#fff", border: "none", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
