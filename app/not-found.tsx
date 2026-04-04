import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-accent font-bebas text-8xl leading-none mb-4">404</div>
        <h1 className="font-montserrat font-bold text-2xl text-text-primary mb-3">
          Page Not Found
        </h1>
        <p className="font-inter text-text-secondary text-sm mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-accent hover:bg-accent-light text-white font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-lg text-sm transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
