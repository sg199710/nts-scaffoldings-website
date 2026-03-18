"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NTS Scaffoldings"
              width={72}
              height={72}
              className="h-[72px] w-[72px] object-contain"
            />
            <span className="text-lg font-semibold tracking-tight text-brand-heading">
              NTS Scaffoldings
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <motion.div key={l.href} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={l.href}
                  className="block text-[15px] font-medium text-brand-text/80 transition-colors hover:text-brand-heading"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-brand-blue px-6 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-blue/90"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-brand-heading md:hidden"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand-border bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-6xl space-y-1 px-6 py-5">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.02 * i }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-brand-text transition-colors hover:bg-brand-light"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.14 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 block rounded-full bg-brand-blue py-3.5 text-center text-base font-medium text-white"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
