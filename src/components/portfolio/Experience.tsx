import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, BookOpen, Trophy } from "lucide-react";

const items = [
  { icon: BookOpen, side: "Education", title: "B.Tech, Computer Science Engineering", meta: "2023 — 2027", body: "Core CS coursework: Data Structures, Algorithms, DBMS, OS, Computer Networks. CGPA: 8.6 / 10." },
  { icon: Award, side: "Certification", title: "Python for Data Science", meta: "2024", body: "Hands-on with Pandas, NumPy and Matplotlib through guided projects and case studies." },
  { icon: Trophy, side: "Achievement", title: "College Hackathon — Finalist", meta: "2024", body: "Top 5 of 60 teams. Built a data-driven study planner in 36 hours." },
  { icon: Award, side: "Certification", title: "Full-Stack Web Development", meta: "2025", body: "MERN stack capstone covering auth, deployment and production-grade APIs." },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Education"
      title={<>Where I've <span className="text-gradient-accent">learned & grown.</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-10 md:text-left" : "md:pr-10 md:text-right"}`}>
                <div className="glass-strong inline-block rounded-2xl p-5 text-left">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-accent">{it.side} · {it.meta}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{it.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
                </div>
              </div>
              <span className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow md:left-1/2 md:-translate-x-1/2">
                <it.icon size={15} />
              </span>
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
