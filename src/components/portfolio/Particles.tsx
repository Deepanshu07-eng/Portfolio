export function Particles() {
  const particles = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 20;
        const duration = Math.random() * 20 + 15;
        const left = Math.random() * 100;
        const hue = Math.random() > 0.5 ? "265" : "195";
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: `${size}px`,
              height: `${size}px`,
              background: `oklch(0.78 0.18 ${hue} / 0.7)`,
              boxShadow: `0 0 ${size * 4}px oklch(0.78 0.18 ${hue} / 0.6)`,
              animation: `particle-rise ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
