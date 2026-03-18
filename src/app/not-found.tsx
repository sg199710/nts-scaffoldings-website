import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6">
      <h1 className="text-display-sm font-bold tracking-tight text-brand-heading">404</h1>
      <p className="mt-3 text-lg text-brand-text">This page could not be found.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-blue px-8 py-3 text-base font-medium text-white transition-colors hover:bg-brand-blue/90"
      >
        Back to home
      </Link>
    </div>
  );
}
