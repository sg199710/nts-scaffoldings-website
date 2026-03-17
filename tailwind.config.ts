import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",
          "blue-light": "#38BDF8",
          rust: "#C2410C",
          "rust-dark": "#9A3412",
          heading: "#111827",
          text: "#4B5563",
          muted: "#9CA3AF",
          light: "#F9FAFB",
          border: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["5rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-sm": ["3.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};

export default config;
