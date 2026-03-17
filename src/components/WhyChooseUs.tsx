"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/animations";

const reasons = [
  { stat: "45+", label: "Years of Experience", desc: "Decades of trusted service in India's construction industry." },
  { stat: "Pan-India", label: "Nationwide Presence", desc: "Serving projects across all major cities and states." },
  { stat: "100%", label: "Safety Compliance", desc: "Rigorous quality standards in every single project." },
  { stat: "5000+", label: "Projects Completed", desc: "Preferred partner for India's top builders." },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={ref} className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: ease.smooth }}
          className="text-center"
        >
          <p className="mb-4 text-base font-medium uppercase tracking-widest text-brand-blue">
            Why NTS
          </p>
          <h2 className="text-display-sm font-bold tracking-tight sm:text-display">
            Built on trust.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-brand-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: ease.out }}
              whileHover={{ scale: 1.02, transition: { duration: 0.25, ease: ease.out } }}
              className="bg-white p-10 text-center"
            >
              <p className="text-5xl font-bold tracking-tight text-brand-blue">
                {r.stat}
              </p>
              <p className="mt-3 text-base font-semibold text-brand-heading">
                {r.label}
              </p>
              <p className="mt-2 text-base leading-relaxed text-brand-text">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
