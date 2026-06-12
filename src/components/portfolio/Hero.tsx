import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative grid-bg pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <Sparkles size={12} className="text-accent" />
            Available for internships · Summer 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Turning <span className="text-gradient">Data</span> Into
            <br />
            Insights & Ideas
            <br />
            Into <span className="text-gradient-accent">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            B.Tech Computer Science Student · Aspiring Data Analyst · Python Enthusiast.
            Building data-driven products and clean, performant interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors hover:bg-glass-border"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span>Python</span><span>·</span>
            <span>Pandas</span><span>·</span>
            <span>NumPy</span><span>·</span>
            <span>React</span><span>·</span>
            <span>Node.js</span><span>·</span>
            <span>MongoDB</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-3 animate-float">
            <img
              src={portrait}
              alt="Portrait silhouette with data particles"
              width={896}
              height={1152}
              className="rounded-2xl"
            />
            <div className="glass absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl px-4 py-3 text-xs">
              <div>
                <div className="font-mono text-muted-foreground">Currently</div>
                <div className="font-medium">Learning ML & SQL deep-dive</div>
              </div>
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
