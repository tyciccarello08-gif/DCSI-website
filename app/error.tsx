"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-accent font-bebas text-8xl leading-none mb-4">500</div>
        <h1 className="font-montserrat font-bold text-2xl text-text-primary mb-3">
          Something went wrong
        </h1>
        <p className="font-inter text-text-secondary text-sm mb-8">
          An unexpected error occurred. Please try again or return home.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-accent hover:bg-accent-light text-white font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-lg text-sm transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-border hover:border-accent text-text-primary hover:text-accent font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-lg text-sm transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
