import { m } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../hooks/useMediaQuery";

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';

const credentials = [
  {
    badge: "GOOGLE",
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google • Coursera",
    type: "Professional Certification",
    date: "2026",
    tag: "Data Analytics",
    color: "#4285F4",
    certificateUrl: "/certificates/google-data-analytics.pdf",
    text: "Completed professional training in data cleaning, analysis, visualization, SQL, spreadsheets, and the end-to-end data analysis process.",
  },
  {
    badge: "PY",
    name: "Python Certification",
    issuer: "freeCodeCamp",
    type: "Certification",
    date: "2026",
    tag: "Python Programming",
    color: "#FFD43B",
    certificateUrl: "/certificates/freecodecamp-python.pdf",
    text: "Built strong fundamentals in Python, functions, problem solving, data structures, and automation-focused programming.",
  },
  {
    badge: "SQL+",
    name: "SQL Intermediate Certificate",
    issuer: "HackerRank",
    type: "Certification",
    date: "2026",
    tag: "Intermediate SQL",
    color: "#00EA64",
    certificateUrl: "/certificates/sqlinterm.jpg",
    text: "Demonstrated intermediate SQL knowledge including subqueries, complex joins, window functions, and data manipulation.",
  },
  {
    badge: "SQL",
    name: "SQL Basic Certificate",
    issuer: "HackerRank",
    type: "Certification",
    date: "2026",
    tag: "SQL Foundations",
    color: "#00EA64",
    certificateUrl: "/certificates/sqlbasic.jpg",
    text: "Validated core SQL skills including queries, filtering, joins, aggregation, and structured data retrieval.",
  },
  {
    badge: "92%",
    name: "Certificate of Excellence",
    issuer: "Coding Blocks",
    type: "Achievement",
    date: "2025",
    tag: "Academic Excellence",
    color: "#C084FC",
    certificateUrl: "/certificates/cppexcellence.jpg",
    text: "Awarded for scoring 92% in assignments and showing excellent performance throughout the DSA course.",
  },
  
  
  {
    badge: "DSA",
    name: "Data Structures & Algorithms",
    issuer: "Coding Blocks",
    type: "Course Completion",
    date: "2025",
    tag: "C++ DSA",
    color: "#FF6B35",
    certificateUrl: "/certificates/cppdsa.png",
    text: "Completed DSA training in C++ covering arrays, recursion, linked lists, trees, graphs, and problem-solving patterns.",
  },
  
  {
    badge: "HACK",
    name: "Hackshastra Hackathon",
    issuer: "Hackathon",
    type: "Participation Certificate",
    date: "2025",
    tag: "Team Innovation",
    color: "#38BDF8",
    certificateUrl: "/certificates/hackshashtra.jpg",
    text: "Participated in Hackshastra Hackathon and gained hands-on experience in team collaboration, ideation, and rapid project building.",
  },
];

type Credential = (typeof credentials)[number];

function CredentialCard({
  item,
  index,
  isVisible,
  onOpen,
}: {
  item: Credential;
  index: number;
  isVisible: boolean;
  onOpen: (item: Credential) => void;
}) {
  const isMobile = useIsMobile();

  return (
    <m.button
      type="button"
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      whileHover={{
        y: -8,
        scale: 1.02,
        borderColor: item.color,
        boxShadow: `0 0 0 1px ${item.color}55, 0 0 45px ${item.color}33`,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      style={{
        position: "relative",
        textAlign: "left",
        cursor: "pointer",
        minHeight: isMobile ? "auto" : "310px",
        padding: isMobile ? "1.35rem" : "1.55rem",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "14px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        font: "inherit",
        color: "inherit",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at top right, ${item.color}22, transparent 42%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
            marginBottom: "1.2rem",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              border: `1px solid ${item.color}88`,
              background: `${item.color}18`,
              fontFamily: FONT_MONO,
              fontSize: "0.62rem",
              color: "#fff",
              letterSpacing: "0.08em",
              fontWeight: 700,
              flexShrink: 0,
              boxShadow: `0 0 22px ${item.color}22`,
            }}
          >
            {item.badge}
          </div>

          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.55rem",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              paddingTop: "0.35rem",
            }}
          >
            {item.date}
          </span>
        </div>

        <p
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.56rem",
            letterSpacing: "0.16em",
            color: item.color,
            textTransform: "uppercase",
            margin: "0 0 0.55rem",
          }}
        >
          {item.type} • {item.tag}
        </p>

        <h3
          style={{
            fontFamily: FONT_SANS,
            fontSize: isMobile ? "1rem" : "1.08rem",
            lineHeight: 1.25,
            color: "#fafaf8",
            margin: "0 0 0.45rem",
            fontWeight: 700,
          }}
        >
          {item.name}
        </h3>

        <p
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.6rem",
            color: "rgba(232,224,208,0.52)",
            margin: "0 0 1rem",
            letterSpacing: "0.06em",
          }}
        >
          {item.issuer}
        </p>

        <div
          style={{
            height: "1px",
            background: `linear-gradient(90deg, ${item.color}66, rgba(255,255,255,0.05))`,
            marginBottom: "1rem",
          }}
        />

        <p
          style={{
            fontFamily: FONT_SANS,
            fontSize: "0.88rem",
            lineHeight: 1.72,
            color: "rgba(255,255,255,0.62)",
            margin: 0,
          }}
        >
          {item.text}
        </p>

        <p
          style={{
            margin: "1.15rem 0 0",
            fontFamily: FONT_MONO,
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            color: item.color,
            textTransform: "uppercase",
          }}
        >
          Click to view certificate ↗
        </p>
      </div>
    </m.button>
  );
}

function CertificateModal({
  selected,
  onClose,
}: {
  selected: Credential | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected, onClose]);

  if (!selected) return null;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "rgba(0,0,0,0.78)",
        backdropFilter: "blur(14px)",
      }}
    >
      <m.div
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 18 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(920px, 94vw)",
          maxHeight: "88vh",
          border: `1px solid ${selected.color}77`,
          borderRadius: "18px",
          background:
            "linear-gradient(135deg, rgba(18,18,18,0.96), rgba(8,8,8,0.98))",
          boxShadow: `0 0 70px ${selected.color}33`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "1rem 1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 0.25rem",
                fontFamily: FONT_MONO,
                fontSize: "0.55rem",
                letterSpacing: "0.16em",
                color: selected.color,
                textTransform: "uppercase",
              }}
            >
              {selected.issuer} • {selected.date}
            </p>
            <h3
              style={{
                margin: 0,
                fontFamily: FONT_SANS,
                color: "#fafaf8",
                fontSize: "1rem",
              }}
            >
              {selected.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              border: `1px solid ${selected.color}66`,
              background: `${selected.color}14`,
              color: "#fff",
              borderRadius: "999px",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            ×
          </button>
        </div>

        <div
  style={{
    height: "min(70vh, 620px)",
    background: "rgba(255,255,255,0.03)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    overflow: "hidden",
  }}
>
  {selected.certificateUrl.endsWith(".pdf") ? (
    <iframe
      src={selected.certificateUrl}
      title={selected.name}
      style={{
        width: "100%",
        height: "100%",
        border: 0,
        background: "#111",
      }}
    />
  ) : (
    <img
      src={selected.certificateUrl}
      alt={selected.name}
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        borderRadius: "12px",
      }}
    />
  )}
</div>
      </m.div>
    </m.div>
  );
}

export function Recommendations() {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState<Credential | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="recommendations"
        style={{
          position: "relative",
          padding: isMobile ? "4.5rem 4vw" : "6rem 6vw",
          background: "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: isMobile ? "2rem" : "3rem",
          }}
        >
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.42)",
              textTransform: "uppercase",
            }}
          >
            Credentials
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(255,255,255,0.07)",
            }}
          />
        </div>

        <div style={{ overflow: "hidden", marginBottom: "3rem" }}>
          <m.h2
            initial={{ y: "100%" }}
            animate={isVisible ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: FONT_SERIF,
              fontSize: isMobile
                ? "clamp(2.2rem, 10vw, 4rem)"
                : "clamp(3rem, 5.5vw, 5.4rem)",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "0.01em",
              color: "#fafaf8",
              margin: 0,
            }}
          >
            Verified learning & achievements.
          </m.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(310px, 1fr))",
            gap: isMobile ? "1rem" : "1.25rem",
          }}
        >
          {credentials.map((item, index) => (
            <CredentialCard
              key={item.name}
              item={item}
              index={index}
              isVisible={isVisible}
              onOpen={setSelected}
            />
          ))}
        </div>
      </section>

      <CertificateModal selected={selected} onClose={() => setSelected(null)} />
    </>
  );
}