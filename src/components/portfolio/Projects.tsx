import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import sales from "@/assets/project-sales.jpg";
import churn from "@/assets/project-churn.jpg";
import dataviz from "@/assets/project-dataviz.jpg";
import ideas from "@/assets/project-ideas.jpg";

const projects = [
  {
    img: sales,
    title: "Sales Data Analysis Dashboard",
    overview: "Interactive dashboard analyzing 2 years of retail sales — top SKUs, regional trends, seasonality.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    results: ["Revealed 23% Q4 lift", "Identified 7 underperforming SKUs", "Clean reproducible notebooks"],
    github: "#", demo: "#",
  },
  {
    img: churn,
    title: "Customer Churn Analysis",
    overview: "End-to-end churn study on telecom data — feature engineering, EDA and a baseline classifier.",
    tech: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    results: ["82% baseline accuracy", "Surfaced top 5 churn drivers", "Actionable retention insights"],
    github: "#", demo: "#",
  },
  {
    img: dataviz,
    title: "Data Visualization Project",
    overview: "Story-driven visual essay on global energy mix — charts designed for clarity, not decoration.",
    tech: ["Python", "Matplotlib", "Seaborn", "Jupyter"],
    results: ["12 publication-ready charts", "Reproducible pipeline", "Featured in college showcase"],
    github: "#", demo: "#",
  },
  {
    img: ideas,
    title: "Project Idea Generator Platform",
    overview: "Full-stack MERN app that suggests project ideas based on stack and difficulty preferences.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    results: ["JWT auth + saved ideas", "Deployed on Vercel + Render", "100+ idea seed dataset"],
    github: "#", demo: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work.</span></>}
      subtitle="A mix of analytics deep-dives and full-stack builds. Each one taught me something I now use daily."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group glass-strong relative overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={640}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.overview}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="glass rounded-md px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</span>
                ))}
              </div>

              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                {p.results.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <a href={p.github} className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs hover:bg-glass-border">
                  <GithubIcon size={14} /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-medium text-primary-foreground">
                  <ExternalLink size={14} /> Live demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
