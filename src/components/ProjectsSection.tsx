"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ease } from "@/lib/animations";

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = projects.slice(0, 6);

  return (
    <section id="projects" ref={ref} className="bg-brand-light py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: ease.smooth }}
          className="text-center"
        >
          <p className="mb-4 text-base font-medium uppercase tracking-widest text-brand-blue">
            Portfolio
          </p>
          <h2 className="text-display-sm font-bold tracking-tight sm:text-display">
            Featured projects.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-brand-text">
            We&apos;ve partnered with brands across industries to bring ideas to life.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: ease.out }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: ease.out } }}
              className="group overflow-hidden rounded-2xl border border-brand-border bg-white p-6 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-black/[0.04]"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-snug text-brand-heading">
                  {p.name}
                </h3>
                <span className="shrink-0 rounded-full bg-brand-light px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-blue">
                  {p.category}
                </span>
              </div>
              <p className="text-base text-brand-text">{p.vendor}</p>
              <p className="mt-2 text-sm text-brand-muted">{p.location}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: ease.out }}
          className="mt-16 text-center"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/15"
            >
              View all {projects.length} projects
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
