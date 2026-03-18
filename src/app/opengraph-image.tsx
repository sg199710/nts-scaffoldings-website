import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NTS Scaffoldings Private Limited – India's Trusted Scaffolding Rental Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            NTS Scaffoldings
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#38bdf8",
              textAlign: "center",
              marginBottom: 32,
              letterSpacing: 3,
              textTransform: "uppercase" as const,
            }}
          >
            Private Limited
          </div>
          <div
            style={{
              width: 80,
              height: 3,
              backgroundColor: "#38bdf8",
              marginBottom: 32,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 22,
              color: "#e2e8f0",
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            India&apos;s Trusted Scaffolding Rental Company • 45+ Years of Excellence • Pan-India Delivery
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#94a3b8",
              textAlign: "center",
              marginTop: 24,
            }}
          >
            Cuplock Scaffolding • Formwork • Props & Jacks • Safety Equipment
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
