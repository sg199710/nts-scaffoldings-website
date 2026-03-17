"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ease } from "@/lib/animations";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setForm({ name: "", phone: "", email: "", message: "" }); };
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputCls =
    "w-full rounded-xl border border-brand-border bg-brand-light px-5 py-4 text-base text-brand-heading placeholder:text-brand-muted outline-none transition-colors focus:border-brand-blue/40 focus:bg-white";

  return (
    <section id="contact" ref={ref} className="bg-brand-light py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: ease.smooth }} className="text-center">
          <p className="mb-4 text-base font-medium uppercase tracking-widest text-brand-blue">Contact</p>
          <h2 className="text-display-sm font-bold tracking-tight sm:text-display">Get in touch.</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1, ease: ease.out }}
          className="mx-auto mt-16 grid max-w-4xl gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: ease.out }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-white p-8 sm:p-10">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold text-brand-heading">Thank you!</p>
                  <p className="mt-2 text-lg text-brand-text">We&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-base font-medium text-brand-heading">Name</label>
                    <input type="text" name="name" required value={form.name} onChange={change} className={inputCls} placeholder="Your name" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-base font-medium text-brand-heading">Phone</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={change} className={inputCls} placeholder="+91" />
                    </div>
                    <div>
                      <label className="mb-2 block text-base font-medium text-brand-heading">Email</label>
                      <input type="email" name="email" required value={form.email} onChange={change} className={inputCls} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-base font-medium text-brand-heading">Message</label>
                    <textarea name="message" required rows={4} value={form.message} onChange={change} className={`${inputCls} resize-none`} placeholder="Tell us about your project..." />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full rounded-xl bg-brand-blue py-4 text-lg font-medium text-white transition-colors hover:bg-brand-blue/90"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          <div className="space-y-8 lg:col-span-2 lg:pt-4">
            {[
              { label: "Email", value: "ntsscaff2004@gmail.com", href: "mailto:ntsscaff2004@gmail.com" },
              { label: "Phone", value: "+91 98736 96128", href: "tel:+919873696128" },
              { label: "Address", value: "D23, Sector 63, Noida\u2009-\u2009201301, India", href: undefined },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: ease.out }}
              >
                <p className="text-sm font-medium uppercase tracking-widest text-brand-muted">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="mt-1.5 block text-lg text-brand-heading transition-colors hover:text-brand-blue">{c.value}</a>
                ) : (
                  <p className="mt-1.5 text-lg text-brand-heading">{c.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
