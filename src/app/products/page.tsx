"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  products,
  productCategories,
  type ProductCategory,
} from "@/data/products";
import { ease } from "@/lib/animations";

export default function ProductsPage() {
  const [filter, setFilter] = useState<ProductCategory | "All">("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? products
        : products.filter((p) => p.category === filter),
    [filter],
  );

  const grouped = useMemo(() => {
    const map = new Map<string, typeof products>();
    for (const p of filtered) {
      const list = map.get(p.category) ?? [];
      list.push(p);
      map.set(p.category, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

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
            Product Catalog
          </p>
          <h1 className="text-display-sm font-bold tracking-tight sm:text-display">
            Our Products
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-brand-text">
            High-quality Cuplock, scaffolding systems, and formwork at
            competitive prices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: ease.out }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setFilter("All")}
            className={`rounded-full px-7 py-3 text-base font-medium transition-all ${
              filter === "All"
                ? "bg-brand-blue text-white"
                : "text-brand-text hover:bg-brand-light"
            }`}
          >
            All Products
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-7 py-3 text-base font-medium transition-all ${
                filter === cat
                  ? "bg-brand-blue text-white"
                  : "text-brand-text hover:bg-brand-light"
              }`}
            >
              {cat}
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
            className="mt-20 space-y-28"
          >
            {grouped.map(([category, items]) => (
              <div key={category}>
                <div className="mb-12 flex items-center gap-4">
                  <h2 className="text-2xl font-bold tracking-tight text-brand-heading">
                    {category}
                  </h2>
                  <div className="h-px flex-1 bg-brand-border" />
                  <span className="text-base text-brand-muted">
                    {items.length}{" "}
                    {items.length === 1 ? "product" : "products"}
                  </span>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.03, ease: ease.out }}
                      whileHover={{ y: -4, transition: { duration: 0.25, ease: ease.out } }}
                      className="group overflow-hidden rounded-3xl bg-brand-light transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.06]"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-white">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                        />
                      </div>

                      <div className="p-7">
                        <h3 className="text-xl font-semibold leading-snug text-brand-heading">
                          {product.name}
                        </h3>
                        {product.sizes && (
                          <div className="mt-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-brand-muted">
                              Available Sizes
                            </p>
                            <p className="mt-1.5 text-base leading-relaxed text-brand-text">
                              {product.sizes}
                            </p>
                          </div>
                        )}
                        {product.finishes && (
                          <div className="mt-3">
                            <p className="text-xs font-medium uppercase tracking-wider text-brand-muted">
                              Finishes
                            </p>
                            <p className="mt-1.5 text-base text-brand-text">
                              {product.finishes}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: ease.smooth }}
          className="mt-36 rounded-3xl bg-brand-light p-14 text-center sm:p-20"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-muted">
            Can&apos;t find what you need?
          </p>
          <h2 className="mt-3 text-display-sm font-bold tracking-tight">
            Request a quote.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-brand-text">
            We offer a complete range of scaffolding products. Contact us with
            your requirements and we&apos;ll arrange it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-brand-blue px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/15"
              >
                Request Quote
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
