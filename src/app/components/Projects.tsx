import { m } from "motion/react";
import { useState } from "react";
import { useIsMobile } from "../../hooks/useMediaQuery";

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';

type SubProject = {
  title: string;
  status: string;
  liveUrl?: string;
  github?: string;
};

type Project = {
  index: string;
  title: string;
  category: string;
  status: string;
  color: string;
  tags: string[];
  summary: string;
  details: string[];
  liveUrl?: string;
  github?: string;
  subProjects?: SubProject[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "School / College Bus & Van Route Optimization",
    category: "Major Project",
    status: "Featured",
    color: "#22d3ee",
    tags: ["Python", "SQL", "Route Optimization", "Maps", "Dashboard"],
    summary:
      "A route optimization system for school and college transport to reduce travel time, fuel usage, and route confusion.",
    details: [
      "Manages student pickup points and vehicle routes.",
      "Optimizes routes using graph-based logic.",
      "Includes attendance tracking and route reporting.",
      "Designed for admin dashboard and future maps integration.",
    ],
    github: "https://github.com/Deepanshu07-eng",
  },
  {
    index: "02",
    title: "Real Life Netflix Visualization Project",
    category: "Data Analytics",
    status: "Completed",
    color: "#ef4444",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    summary:
      "A real-world Netflix data analysis project focused on cleaning, exploring, and visualizing content trends.",
    details: [
      "Cleaned and analyzed Netflix dataset using Pandas.",
      "Created visual insights using Matplotlib.",
      "Explored content type, release year, country, and rating patterns.",
      "Best suited as a beginner-friendly Data Analyst portfolio project.",
    ],
    github:
      "https://github.com/Deepanshu07-eng/Python/tree/main/Real%20Life%20NetfliX%20Visualisation%20Project%20(Pandas%2C%20matplotlib)",
  },
  {
    index: "03",
    title: "Air Quality Prediction ML",
    category: "Machine Learning",
    status: "Completed",
    color: "#4ade80",
    tags: ["Python", "ML", "Prediction", "Data Cleaning"],
    summary:
      "A machine learning project built to predict air quality levels using environmental data.",
    details: [
      "Prepared and cleaned air quality dataset.",
      "Applied machine learning models for prediction.",
      "Focused on practical ML workflow from data preprocessing to output.",
      "Useful for showing beginner ML and data science skills.",
    ],
  },
  {
    index: "04",
    title: "Capstone Project",
    category: "Data Project",
    status: "Completed",
    color: "#a78bfa",
    tags: ["Analytics", "Python", "Visualization", "Report"],
    summary:
      "A capstone-level project focused on applying data analysis concepts in a structured project workflow.",
    details: [
      "Includes data understanding, cleaning, analysis, and insights.",
      "Structured like a complete portfolio-ready project.",
      "Shows ability to work through an end-to-end data problem.",
    ],
  },
  {
    index: "05",
    title: "Password Manager Program",
    category: "Python CLI",
    status: "Completed",
    color: "#facc15",
    tags: ["Python", "CLI", "JSON", "File Handling"],
    summary:
      "A command-line password manager built in Python with save, search, update, delete, and generate password features.",
    details: [
      "Stores password records using file handling.",
      "Includes password generation and search features.",
      "Improved with exception handling and reusable functions.",
      "Good project for Python fundamentals and CLI logic.",
    ],
  },
  {
    index: "06",
    title: "01 Python Small Projects",
    category: "Python Projects",
    status: "Collection",
    color: "#38bdf8",
    tags: ["Python", "Beginner", "Logic Building"],
    summary:
      "A collection of small Python projects built for practice and logic building.",
    details: [
      "Beginner-friendly Python practice projects.",
      "Focused on conditions, loops, functions, and input handling.",
    ],
    subProjects: [
      { title: "Guess the Correct Number using Python", status: "Completed" },
      { title: "Rock, Paper, Scissors using Python", status: "Completed" },
    ],
  },
  {
    index: "07",
    title: "Web Development Projects",
    category: "Frontend Collection",
    status: "Collection",
    color: "#fb7185",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    summary:
      "A collection of frontend clone and UI practice projects created while learning web development.",
    details: [
      "Includes multiple frontend UI clone projects.",
      "Some projects can be deployed as live demos.",
      "Useful for showing frontend basics and layout practice.",
    ],
    subProjects: [
      { title: "Amazon Clone", status: "Deployable" },
      { title: "Login Signup Page", status: "Deployable" },
      { title: "Spotify Clone", status: "Deployable" },
      { title: "To-Do List", status: "Deployable" },
      { title: "VS Code Clone", status: "Deployable" },
    ],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.78)",
        backdropFilter: "blur(14px)",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <m.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(880px, 94vw)",
          maxHeight: "86vh",
          overflow: "auto",
          borderRadius: "18px",
          border: `1px solid ${project.color}88`,
          background:
            "linear-gradient(135deg, rgba(20,20,20,0.96), rgba(5,5,5,0.98))",
          boxShadow: `0 0 70px ${project.color}35`,
          padding: "1.6rem",
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: "right",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: `1px solid ${project.color}88`,
            background: `${project.color}18`,
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <p
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            color: project.color,
            textTransform: "uppercase",
            margin: "0 0 0.8rem",
          }}
        >
          {project.category} • {project.status}
        </p>

        <h3
          style={{
            fontFamily: FONT_SERIF,
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            color: "#fafaf8",
            margin: "0 0 1rem",
            lineHeight: 1.05,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: FONT_SANS,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.75,
            marginBottom: "1.4rem",
          }}
        >
          {project.summary}
        </p>

        {project.details.map((d, i) => (
          <p
            key={i}
            style={{
              fontFamily: FONT_SANS,
              color: "rgba(255,255,255,0.58)",
              lineHeight: 1.65,
              margin: "0.45rem 0",
            }}
          >
            <span style={{ color: project.color }}>0{i + 1}.</span> {d}
          </p>
        ))}

        {project.subProjects && (
          <div
            style={{
              marginTop: "1.4rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {project.subProjects.map((s) => (
              <div
                key={s.title}
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p
                  style={{
                    fontFamily: FONT_SANS,
                    color: "#fafaf8",
                    margin: "0 0 0.4rem",
                    fontWeight: 700,
                  }}
                >
                  {s.title}
                </p>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.55rem",
                    color: project.color,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.6rem" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#000",
                background: project.color,
                padding: "0.7rem 1rem",
                borderRadius: "8px",
                fontFamily: FONT_MONO,
                fontSize: "0.62rem",
                textDecoration: "none",
              }}
            >
              Live Demo ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: project.color,
                border: `1px solid ${project.color}88`,
                padding: "0.7rem 1rem",
                borderRadius: "8px",
                fontFamily: FONT_MONO,
                fontSize: "0.62rem",
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </m.div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <m.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.35 }}
      style={{
        position: "relative",
        minHeight: "310px",
        padding: "1.5rem",
        borderRadius: "14px",
        cursor: "pointer",
        overflow: "hidden",
        border: `1px solid ${
          hovered ? project.color : "rgba(255,255,255,0.12)"
        }`,
        background: hovered
          ? `linear-gradient(135deg, ${project.color}18, rgba(255,255,255,0.025))`
          : "rgba(255,255,255,0.015)",
        boxShadow: hovered
          ? `0 0 45px ${project.color}35, inset 0 0 35px ${project.color}10`
          : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at top right, ${project.color}22, transparent 42%)`,
          opacity: hovered ? 1 : 0.25,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.3rem",
          }}
        >
          <span
            style={{
              fontFamily: FONT_MONO,
              color: project.color,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
            }}
          >
            {project.index}
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.52rem",
              color: project.color,
              border: `1px solid ${project.color}77`,
              borderRadius: "999px",
              padding: "4px 9px",
              textTransform: "uppercase",
            }}
          >
            {project.status}
          </span>
        </div>

        <p
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.58rem",
            color: "rgba(255,255,255,0.38)",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            margin: "0 0 0.8rem",
          }}
        >
          {project.category}
        </p>

        <h3
          style={{
            fontFamily: FONT_SERIF,
            fontSize: "1.55rem",
            lineHeight: 1.15,
            color: hovered ? project.color : "#fafaf8",
            margin: "0 0 1rem",
            transition: "color 0.3s",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: FONT_SANS,
            fontSize: "0.9rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.62)",
            margin: 0,
          }}
        >
          {project.summary}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.45rem",
            marginTop: "1.3rem",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.52rem",
                color: hovered ? project.color : "rgba(255,255,255,0.38)",
                border: `1px solid ${
                  hovered ? `${project.color}66` : "rgba(255,255,255,0.08)"
                }`,
                padding: "4px 7px",
                borderRadius: "4px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          style={{
            marginTop: "1.3rem",
            fontFamily: FONT_MONO,
            fontSize: "0.6rem",
            color: project.color,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          View details ↗
        </p>
      </div>
    </m.div>
  );
}

export function Projects() {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        style={{
          position: "relative",
          background: "transparent",
          padding: isMobile ? "5rem 4vw" : "5rem 6vw",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
            }}
          >
            Projects
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(255,255,255,0.07)",
            }}
          />
        </div>

        <m.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: FONT_SERIF,
            fontSize: isMobile
              ? "clamp(2rem, 10vw, 4rem)"
              : "clamp(3rem, 5.5vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#fafaf8",
            margin: "0 0 3rem",
          }}
        >
          Practical projects, clean executions.
        </m.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={setSelected}
            />
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}