"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import Link from "next/link";
import { ease } from "@/lib/animations";

const categories: ProjectCategory[] = ["Infrastructure", "Industrial", "Commercial"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const visible = showAll ? filtered : filtered.slice(0, 18);

  return (
    <div className="min-h-screen bg-white pb-32 pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: ease.smooth }}
          className="text-center"
        >
          <p className="mb-4 text-base font-medium uppercase tracking-widest text-brand-blue">
            Portfolio
          </p>
          <h1 className="text-display-sm font-bold tracking-tight sm:text-display">
            Our Projects
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-brand-text">
            We design, and supply scaffolding and formwork systems trusted by
            builders across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowAll(false); }}
              className={`rounded-full px-7 py-3 text-base font-medium transition-all ${
                filter === cat
                  ? "bg-brand-blue text-white"
                  : "text-brand-text hover:bg-brand-light"
              }`}
            >
              {cat === "All"
                ? `All (${projects.length})`
                : `${cat} (${projects.filter((p) => p.category === cat).length})`}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-20"
          >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5), ease: ease.out }}
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: ease.out } }}
                  className="group overflow-hidden rounded-2xl border border-brand-border bg-white p-6 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-black/[0.04]"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-snug text-brand-heading">
                      {p.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-brand-light px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-blue">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-base font-medium text-brand-text">
                    {p.vendor}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-brand-muted">
                    <span className="flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {p.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {p.date}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            {!showAll && filtered.length > 18 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: ease.out }}
                className="mt-16 text-center"
              >
                <motion.button
                  onClick={() => setShowAll(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-brand-blue px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/15"
                >
                  Load More ({filtered.length - 18} remaining)
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: ease.smooth }}
          className="mt-32 rounded-3xl bg-brand-light p-14 text-center sm:p-20"
        >
          <h2 className="text-display-sm font-bold tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-brand-text">
            Feel free to contact us if you have any requirements, and our team
            will get back to you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-brand-blue px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/15"
              >
                Request a Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="tel:+919873696128"
                className="inline-block rounded-full border border-brand-heading/15 px-10 py-4 text-lg font-medium text-brand-heading transition-colors hover:bg-brand-heading/5"
              >
                Call Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
