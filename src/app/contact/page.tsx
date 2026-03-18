"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ease } from "@/lib/animations";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSent(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  };
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputCls =
    "w-full rounded-xl border border-brand-border bg-brand-light px-5 py-4 text-base text-brand-heading placeholder:text-brand-muted outline-none transition-colors focus:border-brand-blue/40 focus:bg-white";

  return (
    <div className="min-h-screen bg-white pb-32 pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: ease.smooth }}
          className="text-center"
        >
          <p className="mb-4 text-base font-medium uppercase tracking-widest text-brand-blue">
            Contact
          </p>
          <h1 className="text-display-sm font-bold tracking-tight sm:text-display">
            Get in touch.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-brand-text">
            Have a scaffolding requirement? Our team is ready to help.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-4xl gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-brand-light p-8 sm:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold text-brand-heading">Thank you!</p>
                  <p className="mt-2 text-lg text-brand-text">We&apos;ll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-6">
                  {error && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                  )}
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
                    <textarea name="message" required rows={5} value={form.message} onChange={change} className={`${inputCls} resize-none`} placeholder="Tell us about your project..." />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? undefined : { scale: 1.01 }}
                    whileTap={loading ? undefined : { scale: 0.99 }}
                    className="w-full rounded-xl bg-brand-blue py-4 text-lg font-medium text-white transition-colors hover:bg-brand-blue/90 disabled:opacity-70"
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 lg:col-span-2 lg:pt-4"
          >
            {[
              { label: "Phone", lines: [{ text: "+91 98736 96128", href: "tel:+919873696128" }, { text: "+91 88261 91046", href: "tel:+918826191046" }] },
              { label: "Email", lines: [{ text: "ntsscaff2004@gmail.com", href: "mailto:ntsscaff2004@gmail.com" }, { text: "mkg@ntsscaff.in", href: "mailto:mkg@ntsscaff.in" }] },
              { label: "Address", lines: [{ text: "Corporate Office" }, { text: "D23, Sector 63, Noida\u2009-\u2009201301, India" }] },
            ].map((c) => (
              <div key={c.label}>
                <p className="text-sm font-medium uppercase tracking-widest text-brand-muted">{c.label}</p>
                {c.lines.map((l) =>
                  "href" in l && l.href ? (
                    <a key={l.text} href={l.href} className="mt-1.5 block text-lg text-brand-heading transition-colors hover:text-brand-blue">{l.text}</a>
                  ) : (
                    <p key={l.text} className="mt-1.5 text-lg text-brand-heading">{l.text}</p>
                  )
                )}
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.089876!2d77.3748!3d28.6271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5745ac6bf2f%3A0x83b2c1b44e1c7b2a!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NTS Scaffoldings Office"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
