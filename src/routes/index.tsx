import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Stats } from "@/components/portfolio/Stats";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Particles } from "@/components/portfolio/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — CS Student & Aspiring Data Analyst" },
      { name: "description", content: "B.Tech CS student & aspiring Data Analyst. Python, Pandas, React projects, dashboards, data stories." },
      { property: "og:title", content: "Portfolio — CS Student & Aspiring Data Analyst" },
      { property: "og:description", content: "Turning data into insights and ideas into solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Stats />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
