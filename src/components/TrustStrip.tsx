"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ease } from "@/lib/animations";

const logoFiles = [
  "IMG_3396.png",
  "IMG_3397.png",
  "IMG_3398.png",
  "IMG_3399.jpeg",
  "IMG_3401.jpeg",
  "IMG_3402.jpeg",
  "IMG_3403.jpeg",
  "IMG_3405.jpeg",
  "IMG_3406.jpeg",
  "IMG_3407.jpeg",
];

export default function TrustStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-y border-brand-border bg-brand-light/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand-muted"
        >
          Trusted by leading companies across India
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10"
        >
          {logoFiles.map((file, i) => (
            <motion.div
              key={file}
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.92 }
              }
              transition={{
                duration: 0.5,
                delay: 0.08 * i,
                ease: ease.out,
              }}
              whileHover={{
                scale: 1.06,
                transition: { duration: 0.25 },
              }}
              className="flex h-20 w-28 flex-shrink-0 items-center justify-center rounded-2xl bg-white px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-lg"
            >
              <Image
                src={`/logos/${file}`}
                alt="Trusted client"
                width={112}
                height={80}
                className="h-full w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
