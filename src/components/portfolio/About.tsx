import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Code2, LineChart, Rocket } from "lucide-react";

const timeline = [
  { year: "2023", icon: GraduationCap, title: "Started B.Tech CSE", body: "Began Computer Science Engineering with a focus on fundamentals — DSA, OS, DBMS." },
  { year: "2024", icon: Code2, title: "Full-stack foundations", body: "Built first MERN apps. Got comfortable with React, Node.js, Express and MongoDB." },
  { year: "2025", icon: LineChart, title: "Pivoted to Data", body: "Deep-dive into Python, Pandas, NumPy, Matplotlib. Shipped analytics dashboards." },
  { year: "2026", icon: Rocket, title: "Aspiring Data Analyst", body: "Open to internships. Learning SQL at depth, intro ML and statistical modeling." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A curious student turning <span className="text-gradient">curiosity into craft.</span></>}
      subtitle="I'm a Computer Science undergrad who loves the intersection of code and data. I build clean web apps, then dig into the data they produce to find what's actually working."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass-strong rounded-2xl p-8">
          <h3 className="font-display text-xl font-semibold">My approach</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I treat every problem as a small experiment: form a hypothesis, build the simplest thing that
            could prove it, measure honestly, then refine. The same loop works whether I'm shipping a
            React component or analyzing a noisy dataset.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {["Python", "NumPy", "Pandas", "Matplotlib", "HTML/CSS", "JavaScript", "Node.js", "Express", "MongoDB", "React"].map((t) => (
              <div key={t} className="glass rounded-lg px-3 py-2 text-center font-mono text-xs">{t}</div>
            ))}
          </div>
        </div>

        <ol className="relative space-y-6 border-l border-glass-border pl-6">
          {timeline.map((item, i) => (
            <motion.li
              key={item.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
                <item.icon size={14} />
              </span>
              <div className="glass rounded-xl p-5">
                <div className="font-mono text-xs uppercase tracking-widest text-accent">{item.year}</div>
                <div className="mt-1 font-display text-lg font-semibold">{item.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
