import { Fragment } from "react";
import { m } from "motion/react";
import { useIsMobile } from "../../hooks/useMediaQuery";
import googleLogoUrl from "../../assets/googleLogo.png?url";
import cblockUrl from "../../assets/cblock.jpg?url";
import pylogoUrl from "../../assets/pylogo.png?url";
import fastapiUrl from "../../assets/fastapi.webp?url";
import intrUrl from "../../assets/intr.jpg?url";
import mysqlLogoUrl from "../../assets/mysqlLogo.png?url";
import streamlitUrl from "../../assets/streamlit.png?url";

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';

const pillars = [
  {
    title: "Data Analytics",
    desc: "Raw data rarely has value on its own. The real work begins with asking the right questions, uncovering patterns, and turning information into decisions people can trust.",
  },
  {
    title: "Thinking Before Coding",
    desc: "Writing code is easy. Building the right solution isn't. Solving 200+ DSA problems taught me to analyze problems first and optimize before implementation.",
  },
  {
    title: "Always Building",
    desc: "Every new concept becomes a project. From data analysis to backend APIs, I prefer building practical solutions over simply completing another course.",
  },
];

const dontDo = [
  "Building solutions that solve real problems, not just showcase technology.",
  "Learning by creating projects, not collecting certificates.",
  "Growing through consistency, curiosity, and continuous improvement.",
];

const SPRING_ICON = "/logos/spring.svg";

const highlights: { title: string; sub: string; icon: string; time: string }[] = [
  {
    title: "Google Data Analytics",
    sub: "Professional Certificate • Coursera",
    icon: googleLogoUrl,
    time: "2026",
  },
  {
    title: "200+ DSA Problems",
    sub: "Coding Blocks • C++",
    icon: cblockUrl,
    time: "2025",
  },
  {
    title: "Netflix Data Analysis",
    sub: "Python • Pandas • Matplotlib",
    icon: pylogoUrl,
    time: "2026",
  },
  {
    title: "Smart Bus Route Optimizer",
    sub: "Major Project • FastAPI • SQL",
    icon: fastapiUrl,
    time: "2026",
  },
  {
    title: "Advanced SQL",
    sub: "Database Design & Queries",
    icon: mysqlLogoUrl,
    time: "2026",
  },
  {
    title: "Streamlit Apps",
    sub: "Interactive Data Applications",
    icon: streamlitUrl,
    time: "2026",
  },
  {
    title: "Open to Internships",
    sub: "Data Analyst • Summer 2026",
    icon: intrUrl,
    time: "Now",
  },
];

export function About() {
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      style={{
        position: "relative",
        background: "transparent",
        padding: isMobile ? "4rem 4vw" : "4rem 0 0",
      }}
    >
      <style>{`
        @keyframes highlights-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={isMobile ? {} : { padding: "0.85rem 6vw 2rem" }}>
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
              About
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.07)",
              }}
            />
          </div>

          <div style={{ overflow: "hidden" }}>
            <m.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: FONT_SERIF,
                fontSize: isMobile
                  ? "clamp(1.8rem, 7vw, 4rem)"
                  : "clamp(2.6rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                color: "#fafaf8",
                margin: 0,
              }}
            >
              Data is Hard. Finding the story isn'tttttttt.
            </m.h2>
          </div>
        </div>

        {/* Content strip */}
        <div>
          <div style={{ padding: isMobile ? "2rem 0 0" : "1.5rem 6vw 2rem" }}>
            {/* Brand thesis */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: FONT_SANS,
                fontSize: isMobile ? "1rem" : "1.05rem",
                lineHeight: 1.65,
                color: "#e8e0d0",
                marginBottom: isMobile ? "2rem" : "2.5rem",
                borderLeft: "2px solid rgba(232,224,208,0.3)",
                paddingLeft: "1rem",
                maxWidth: "520px",
              }}
            >
              Learning with purpose. Building with data.
            </m.p>

            {/* Two-column grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "3rem" : "6vw",
                alignItems: "start",
              }}
            >
              {/* LEFT - story paragraphs */}
              <div style={{ alignSelf: "start" }}>
                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.62)",
                    marginBottom: "1.2rem",
                    maxWidth: "580px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  I am a B.Tech Computer Science student with a strong interest in Data Analytics and a long-term goal of becoming a Data Scientist. My journey began with programming and web development, but over time I discovered that I enjoy working with data, uncovering patterns, and solving real-world problems through analysis.
To build a solid foundation, I focused on Python, SQL, Pandas, NumPy, Matplotlib, Excel, Power BI, and Streamlit while strengthening my problem-solving ability by solving 200+ Data Structures & Algorithms questions. This combination has helped me develop both analytical thinking and efficient coding skills.

                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.62)",
                    marginBottom: "1.2rem",
                    maxWidth: "580px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  I believe the best way to learn is by building. That's why I have created projects such as Netflix Data Analysis, Student Result Analysis, Smart College Bus Route Optimization, and other data-driven applications. Alongside my projects, I am currently advancing my SQL skills by solving practical database challenges and learning FastAPI to build scalable backend APIs for data-driven applications.
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.62)",
                    marginBottom: 0,
                    maxWidth: "580px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  My next step is to explore Power BI more deeply and build interactive dashboards that transform raw data into meaningful business insights. My goal is to become a Data Analyst who not only analyzes data but also builds practical solutions that create real-world impact, while continuously progressing toward Data Science.
                </m.p>
              </div>

              {/* RIGHT - pillars + What I Don't Do */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {pillars.map(({ title, desc }, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1.2rem",
                        padding: "1.4rem 1.6rem",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "transparent",
                      }}
                    >
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#e8e0d0",
                          marginTop: "7px",
                          flexShrink: 0,
                          opacity: 0.6,
                        }}
                      />
                      <div>
                        <p
                          style={{
                            fontFamily: FONT_SERIF,
                            fontWeight: 800,
                            fontSize: "0.95rem",
                            color: "#fafaf8",
                            marginBottom: "6px",
                          }}
                        >
                          {title}
                        </p>
                        <p
                          style={{
                            fontFamily: FONT_SANS,
                            fontSize: "0.83rem",
                            lineHeight: 1.65,
                            color: "rgba(255,255,255,0.58)",
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          {desc}
                        </p>
                      </div>
                    </div>
                  </m.div>
                ))}

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24, duration: 0.5 }}
                  style={{
                    padding: "1.2rem 1.5rem",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: "0.55rem",
                      letterSpacing: "0.18em",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      marginBottom: "0.9rem",
                    }}
                  >
                    What I Focus On
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.55rem",
                    }}
                  >
                    {dontDo.map((line, i) => (
                      <p
                        key={i}
                        style={{
                          fontFamily: FONT_SANS,
                          fontSize: "0.83rem",
                          lineHeight: 1.5,
                          color: "rgba(255,255,255,0.45)",
                          margin: 0,
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        - {line}
                      </p>
                    ))}
                  </div>
                </m.div>
              </div>
            </div>

            {/* The Gold and the Glory */}
            <div style={{ marginTop: isMobile ? "4rem" : "6rem" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.95rem",
                    letterSpacing: "0.2em",
                    color: "rgba(245,202,64,1)",
                    textTransform: "uppercase",
                  }}
                >
                  <center>• Journey & Milestones •</center>
                </span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: "max-content",
                    animation: "highlights-marquee 45s linear infinite",
                    willChange: "transform",
                  }}
                >
                  {[...highlights, ...highlights].map((h, i) => (
                    <Fragment key={i}>
                      {/* card */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.3rem",
                          width: "max-content",
                          flexShrink: 0,
                          userSelect: "none",
                        }}
                      >
                        {/* row: icon + title */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.65rem",
                          }}
                        >
                          <img
                            src={h.icon}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                            style={{
                              width: "28px",
                              height: "28px",
                              objectFit: "contain",
                              flexShrink: 0,
                              opacity: 0.9,
                            }}
                          />
                          <div
                            style={{
                              fontFamily: FONT_SERIF,
                              fontSize: "1rem",
                              fontWeight: 700,
                              lineHeight: 1.2,
                              color: "#f5ca40",
                              letterSpacing: "0.03em",
                              textShadow: "0 0 12px rgba(245,202,64,0.25)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {h.title}
                          </div>
                        </div>
                        {/* time */}
                        <div
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: "0.58rem",
                            letterSpacing: "0.1em",
                            color: "rgba(245,202,64,0.45)",
                            textTransform: "uppercase",
                            paddingLeft: "42px",
                          }}
                        >
                          {h.time}
                        </div>
                        {/* sub */}
                        <div
                          style={{
                            fontFamily: FONT_SANS,
                            fontSize: "0.7rem",
                            lineHeight: 1.45,
                            color: "rgba(255,255,255,0.38)",
                            letterSpacing: "0.02em",
                            paddingLeft: "42px",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {h.sub}
                        </div>
                      </div>
                      {/* bullet separator */}
                      <span
                        style={{
                          fontSize: "1.6rem",
                          color: "rgba(245,202,64,0.3)",
                          margin: "0 2.2rem",
                          alignSelf: "flex-start",
                          flexShrink: 0,
                          lineHeight: 1,
                          userSelect: "none",
                        }}
                      >
                        •
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
