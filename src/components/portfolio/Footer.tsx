import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 font-display text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-primary glow" />
          <span className="text-gradient font-semibold">Portfolio.</span>
          <span className="text-muted-foreground">— Built with React & Framer Motion</span>
        </div>
        <div className="flex items-center gap-2">
          {[
            { href: "https://github.com", icon: GithubIcon },
            { href: "https://linkedin.com", icon: LinkedinIcon },
            { href: "mailto:hello@yourdomain.com", icon: Mail },
          ].map((s, i) => (
            <a key={i} href={s.href} className="glass grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:text-foreground">
              <s.icon size={15} />
            </a>
          ))}
        </div>
        <div className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} — All rights reserved.</div>
      </div>
    </footer>
  );
}
