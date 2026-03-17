"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ease } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-brand-light">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: ease.smooth }}
          className="mb-5 text-base font-medium tracking-widest text-brand-blue uppercase"
        >
          45+ Years of Excellence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: ease.smooth }}
          className="text-display-sm sm:text-display lg:text-display-lg font-bold text-brand-heading"
        >
          Building India with
          <br />
          Strength & Safety.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: ease.smooth }}
          className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-brand-text"
        >
          Trusted scaffolding rental solutions powering India&apos;s largest
          infrastructure, industrial, and commercial projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: ease.smooth }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-brand-blue px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20"
            >
              Get a Quote
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className="inline-block rounded-full border border-brand-heading/15 px-10 py-4 text-lg font-medium text-brand-heading transition-colors hover:bg-brand-heading/5"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.06)_0%,_transparent_70%)]" />
    </section>
  );
}
