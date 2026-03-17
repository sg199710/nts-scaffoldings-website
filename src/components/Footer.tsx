"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/animations";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="border-t border-brand-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: ease.smooth }}
          className="flex flex-col items-start justify-between gap-12 sm:flex-row"
        >
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="NTS Scaffoldings"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-brand-heading">
                NTS Scaffoldings
              </span>
            </div>
            <p className="mt-5 text-base leading-relaxed text-brand-text">
              Trusted scaffolding rental solutions for over 45 years across
              India. A part of the Pure Earth Group.
            </p>
          </div>

          <div className="flex gap-20">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-brand-muted">
                Links
              </p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-base text-brand-text transition-colors hover:text-brand-heading"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-brand-muted">
                Contact
              </p>
              <ul className="space-y-3 text-base text-brand-text">
                <li>
                  <a href="mailto:ntsscaff2004@gmail.com" className="transition-colors hover:text-brand-heading">
                    ntsscaff2004@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919873696128" className="transition-colors hover:text-brand-heading">
                    +91 98736 96128
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919873696128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-heading"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>D23, Sector 63, Noida</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: ease.out }}
          className="mt-14 border-t border-brand-border pt-6"
        >
          <p className="text-center text-sm text-brand-muted">
            &copy; {new Date().getFullYear()} NTS Scaffoldings Private Limited.
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
