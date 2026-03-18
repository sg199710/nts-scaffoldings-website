"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { team } from "@/data/team";
import { ease } from "@/lib/animations";
import Link from "next/link";

function MemberAvatar({ member }: { member: (typeof team)[0] }) {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (member.image && !imgFailed) {
    return (
      <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden rounded-xl bg-brand-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="mb-5 flex aspect-[3/4] w-full items-center justify-center rounded-xl bg-brand-light text-3xl font-bold text-brand-blue">
      {initials}
    </div>
  );
}

export default function TeamPage() {
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
            Leadership
          </p>
          <h1 className="text-display-sm font-bold tracking-tight sm:text-display">
            Our team.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-brand-text">
            The people behind NTS Scaffoldings — driving safe, reliable scaffolding solutions across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: ease.out }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: ease.out } }}
              className="rounded-2xl border border-brand-border bg-white p-8 text-center shadow-sm transition-shadow hover:border-brand-blue/20 hover:shadow-lg hover:shadow-black/[0.04]"
            >
              <MemberAvatar member={member} />
              <h2 className="text-xl font-semibold tracking-tight text-brand-heading">
                {member.name}
              </h2>
              <p className="mt-2 text-base font-medium text-brand-blue">
                {member.role}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: ease.smooth }}
          className="mt-32 rounded-3xl bg-brand-light p-14 text-center sm:p-20"
        >
          <h2 className="text-display-sm font-bold tracking-tight">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-brand-text">
            Get in touch.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-brand-blue px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/15"
              >
                Contact us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
