"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ease } from "@/lib/animations";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: ease.smooth }}
        >
          <h2 className="text-display-sm font-bold tracking-tight sm:text-display">
            Ready to start
            <br />
            your next project?
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: ease.smooth }}
            className="mx-auto mt-6 max-w-md text-xl leading-relaxed text-brand-text"
          >
            Get in touch with our team for a custom quote.
            We respond within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: ease.out }}
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-brand-rust px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-brand-rust-dark hover:shadow-lg hover:shadow-brand-rust/20"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="tel:+919873696128"
                className="inline-block rounded-full border border-brand-heading/15 px-10 py-4 text-lg font-medium text-brand-heading transition-colors hover:bg-brand-heading/5"
              >
                Call Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
