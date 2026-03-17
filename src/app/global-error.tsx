"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", padding: "3rem", background: "#fff", color: "#4B5563" }}>
        <h1 style={{ color: "#111827", fontSize: "1.5rem", fontWeight: 700 }}>Something went wrong</h1>
        <p style={{ marginTop: "0.5rem" }}>{error.message}</p>
        <button
          onClick={reset}
          style={{ marginTop: "1.5rem", padding: "0.625rem 1.5rem", background: "#1E3A8A", color: "#fff", border: "none", borderRadius: "999px", cursor: "pointer", fontWeight: 500, fontSize: "0.875rem" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
