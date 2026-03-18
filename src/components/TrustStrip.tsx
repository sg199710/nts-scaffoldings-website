"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/lib/site";
import { trustedCompanies } from "@/data/trustedCompanies";

const CARD_WIDTH = 180; // px per card; 5 cards + gaps fit in max-w-6xl
const CARD_GAP = 28;
const LOGO_HEIGHT = 100;
const LOGO_WIDTH = 140;

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Duplicate for seamless infinite scroll
  const duplicated = [...trustedCompanies, ...trustedCompanies];

  return (
    <section ref={ref} className="border-y border-brand-border bg-brand-light/50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand-muted"
        >
          Trusted by leading companies across India
        </motion.p>
        <div className="overflow-hidden" style={{ minHeight: LOGO_HEIGHT + 80 }}>
          <motion.div
            className="flex items-center"
            style={{
              width: "max-content",
              gap: CARD_GAP,
            }}
            initial={{ x: 0 }}
            animate={
              inView
                ? {
                    x: [
                      0,
                      -(
                        trustedCompanies.length * CARD_WIDTH +
                        (trustedCompanies.length - 1) * CARD_GAP
                      ),
                    ],
                  }
                : { x: 0 }
            }
            transition={{
              x: {
                repeat: inView ? Infinity : 0,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicated.map(({ name, logo, url }, i) => {
              const linkUrl = url || site.baseUrl;
              return (
                <a
                  key={`${logo}-${i}`}
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                  style={{
                    width: CARD_WIDTH,
                    minHeight: LOGO_HEIGHT + 40,
                  }}
                  aria-label={`${name} – visit website`}
                >
                <img
                  src={`/logos/${encodeURIComponent(logo)}`}
                  alt={name}
                  width={LOGO_WIDTH}
                  height={LOGO_HEIGHT}
                  className="object-contain"
                  style={{ width: "100%", height: "auto", maxHeight: LOGO_HEIGHT }}
                />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
