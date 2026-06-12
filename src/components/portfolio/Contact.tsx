import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient-accent">together.</span></>}
      subtitle="Open to internships, freelance data work and interesting collaborations."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-strong space-y-4 rounded-2xl p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="What's it about?" />
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your project, role, or idea…"
              className="glass w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow sm:w-auto"
          >
            <Send size={15} /> {sent ? "Message sent ✓" : "Send message"}
          </motion.button>
        </form>

        <div className="space-y-4">
          <div className="glass-strong rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">Reach me directly</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a href="mailto:hello@yourdomain.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <span className="glass grid h-9 w-9 place-items-center rounded-lg"><Mail size={15} /></span>
                hello@yourdomain.com
              </a>
              <a href="https://github.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <span className="glass grid h-9 w-9 place-items-center rounded-lg"><GithubIcon size={15} /></span>
                github.com/yourhandle
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <span className="glass grid h-9 w-9 place-items-center rounded-lg"><LinkedinIcon size={15} /></span>
                linkedin.com/in/yourhandle
              </a>
            </div>
          </div>

          <div className="glass-strong relative overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10" />
            <div className="relative flex items-center gap-3">
              <span className="glass grid h-9 w-9 place-items-center rounded-lg"><MapPin size={15} /></span>
              <div>
                <div className="font-display font-semibold">Based in India</div>
                <div className="text-sm text-muted-foreground">Open to remote · IST (UTC+5:30)</div>
              </div>
            </div>
            <div className="relative mt-5 h-32 rounded-xl border border-glass-border bg-gradient-to-br from-primary/20 via-transparent to-accent/20">
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_var(--accent)]">
                <span className="absolute -inset-2 animate-ping rounded-full bg-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="glass w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
