"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <h1 className="text-2xl font-bold text-brand-heading">Something went wrong</h1>
      <p className="mt-2 text-brand-text">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-brand-blue px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-blue/90"
      >
        Try again
      </button>
    </div>
  );
}
