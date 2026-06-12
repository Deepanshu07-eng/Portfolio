import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, subtitle, children,
}: { id: string; eyebrow: string; title: ReactNode; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
