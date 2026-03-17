"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/animations";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: ease.smooth }}
        >
          <p className="mb-4 text-base font-medium uppercase tracking-widest text-brand-blue">
            About Us
          </p>
          <h2 className="text-display-sm font-bold tracking-tight sm:text-display">
            Pioneering scaffolding
            <br className="hidden sm:block" /> solutions since 1980.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: ease.smooth }}
          className="mt-10 space-y-7 text-xl leading-relaxed text-brand-text"
        >
          <p>
            NTS Scaffoldings Private Limited is a trusted name in India&apos;s
            construction industry, proudly serving clients for over 45 years.
            Established with a vision to provide safe, reliable, and efficient
            scaffolding solutions, NTS has grown to become one of the pioneers
            in the use and promotion of Cuplock Scaffolding systems across the
            country.
          </p>
          <p>
            With decades of experience and a strong commitment to quality, NTS
            specializes in renting Cuplock Scaffolding systems to leading
            construction companies pan-India. Our comprehensive inventory,
            technical expertise, and customer-first approach have made us the
            preferred scaffolding partner for projects of all scales.
          </p>
          <p>
            At NTS, safety and reliability are at the core of everything we do.
            Whether it&apos;s a high-rise building, industrial plant, or
            infrastructure project — NTS Scaffoldings provides the support that
            builds India, one project at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
