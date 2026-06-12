import { motion } from "framer-motion";
import { Section } from "./Section";
import { BarChart3, Code, Layout, Server, Database, Wrench } from "lucide-react";

const groups = [
  { icon: BarChart3, title: "Data Analytics", items: ["Pandas", "NumPy", "Matplotlib", "Data Cleaning", "Excel", "Power BI", "Statistics"] },
  { icon: Code, title: "Programming Languages", items: ["Python", "C++", "JavaScript", ] },
  { icon: Layout, title: "Frontend", items: ["React", "HTML5", "CSS3","Streamlit", "Tailwind"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js","Fast APIs"] },
  { icon: Database, title: "Databases", items: ["SQL", "MySQL", "MongoDB", "Database Design", "Queries"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>A toolkit for <span className="text-gradient-accent">data & the web.</span></>}
      subtitle="Comfortable across the stack, with growing depth in analytics and visualization."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group glass-strong relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
            <div className="relative">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-primary to-accent p-2.5 text-primary-foreground shadow-glow">
                <g.icon size={18} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span key={t} className="glass rounded-md px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
