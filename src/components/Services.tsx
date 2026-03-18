"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/animations";

const services = [
  {
    title: "Cuplock Scaffolding Rental",
    desc: "Premium Cuplock systems for high-rise buildings, bridges, and infrastructure projects.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 5v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    title: "Industrial Scaffolding",
    desc: "Specialized solutions for refineries, power plants, and manufacturing facilities.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
  {
    title: "Infrastructure Support",
    desc: "Large-scale scaffolding for bridges, dams, metro projects, and national infrastructure.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: "Commercial Projects",
    desc: "Flexible scaffolding rental for offices, malls, IT parks, and commercial high-rises.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    ),
  },
  {
    title: "Design Services",
    desc: "Custom scaffolding design and engineering solutions tailored to your project requirements.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="bg-brand-light py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: ease.smooth }}
          className="text-center"
        >
          <p className="mb-4 text-base font-medium uppercase tracking-widest text-brand-blue">
            Services
          </p>
          <h2 className="text-display-sm font-bold tracking-tight sm:text-display">
            What we do.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: ease.out }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: ease.out } }}
              className="group rounded-3xl bg-white p-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.04]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/8 text-brand-blue">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {s.icon}
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-brand-heading">
                {s.title}
              </h3>
              <p className="text-lg leading-relaxed text-brand-text">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
