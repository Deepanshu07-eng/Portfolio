import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="font-display text-5xl font-bold tracking-tight text-gradient md:text-6xl">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const stats = [
  { value: 14, suffix: "+", label: "Projects Completed" },
  { value: 320, suffix: "+", label: "GitHub Contributions" },
  { value: 18, suffix: "", label: "Technologies Learned" },
  { value: 600, suffix: "h", label: "Problem-Solving Hours" },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
