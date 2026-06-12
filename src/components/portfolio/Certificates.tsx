import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Award, X } from "lucide-react";

const certs = [
  { title: "Python for Data Science", issuer: "Coursera · IBM", year: "2024", color: "from-blue-500/30 to-cyan-500/30" },
  { title: "Data Analysis with Pandas", issuer: "DataCamp", year: "2024", color: "from-violet-500/30 to-fuchsia-500/30" },
  { title: "MERN Stack Development", issuer: "Udemy", year: "2025", color: "from-emerald-500/30 to-teal-500/30" },
  { title: "SQL & Databases", issuer: "HackerRank", year: "2025", color: "from-amber-500/30 to-orange-500/30" },
  { title: "Git & GitHub Essentials", issuer: "freeCodeCamp", year: "2024", color: "from-rose-500/30 to-pink-500/30" },
  { title: "Intro to Machine Learning", issuer: "Kaggle", year: "2026", color: "from-indigo-500/30 to-purple-500/30" },
];

export function Certificates() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title={<>Learning, <span className="text-gradient">documented.</span></>}
      subtitle="Click any certificate to preview."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.button
            key={c.title}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -3 }}
            className="glass-strong group relative overflow-hidden rounded-2xl p-5 text-left"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 transition-opacity group-hover:opacity-100`} />
            <div className="relative">
              <Award className="text-accent" size={20} />
              <div className="mt-4 font-display text-base font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-accent">{c.year}</div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-2xl rounded-3xl p-8"
            >
              <button
                onClick={() => setActive(null)}
                className="glass absolute right-4 top-4 rounded-lg p-2 hover:bg-glass-border"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${certs[active].color} grid place-items-center`}>
                <div className="text-center">
                  <Award size={56} className="mx-auto text-foreground/80" />
                  <div className="mt-4 font-display text-2xl font-bold">{certs[active].title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{certs[active].issuer} · {certs[active].year}</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                A verified course completion covering practical, project-based learning. Full credential available on request.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
