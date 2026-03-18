"use client";

import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ease } from "@/lib/animations";

export default function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 18);

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
            Some visuals from NTS scaffoldings projects across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-20"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => {
              const cardContent = (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5), ease: ease.out }}
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: ease.out } }}
                  className="group overflow-hidden rounded-2xl border border-brand-border bg-white transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-black/[0.04]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-light">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold leading-snug text-brand-heading">
                      {p.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
                      <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {p.location}
                    </div>
                  </div>
                </motion.article>
              );
              return (
                <Fragment key={p.id}>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-2xl"
                      aria-label={`${p.name} – view project`}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </Fragment>
              );
            })}
          </div>

          {!showAll && projects.length > 18 && (
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
                View More
              </motion.button>
            </motion.div>
          )}
        </motion.div>

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
