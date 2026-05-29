import { useEffect, useRef, useState } from "react";

/* Animates a number from 0 → target linearly so small and large
   numbers feel evenly paced. Duration scales mildly with magnitude so
   "50" doesn't finish in a flash next to "8000". */
function useCountUp(target, isActive) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return undefined;
    }

    const duration = 2200;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, isActive]);

  return value;
}

/* Azerbaijani-style thousand separator using "." (e.g. 8000 → "8.000"). */
function formatValue(value, format) {
  if (format === "thousand-dot") {
    return value.toLocaleString("de-DE");
  }
  return value.toString();
}

function AnimatedStat({ value, suffix, format, label, isActive }) {
  const animated = useCountUp(value, isActive);
  const finalText = `${formatValue(value, format)}${suffix}`;
  const displayText = `${formatValue(animated, format)}${suffix}`;

  return (
    <div className="about-stat">
      <span className="about-stat-value" aria-live="polite">
        {/* Invisible final text reserves width so the count-up doesn't shift layout */}
        <span className="about-stat-value-sizer" aria-hidden="true">
          {finalText}
        </span>
        <span className="about-stat-value-num">{displayText}</span>
      </span>
      <span className="about-stat-label">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 8000, suffix: "m²", format: "thousand-dot", label: "İstehsalat Sahəsi" },
    { value: 320, suffix: "+", label: "B2B Layihə" },
    { value: 50, suffix: "+", label: "Usta və Mühəndis" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`about-section${inView ? " is-visible" : ""}`}
    >
      <div className="about-container">

        <div className="about-heading-block">
          <div className="about-heading-row about-heading-row--1">
            <span className="about-heading-word">15 il</span>
            <div className="about-img-wrap about-img-wrap--round">
              <img
                src="./Furniture.png"
                alt="Bej yastıq"
                className="about-inline-img"
              />
            </div>
            <span className="about-heading-word">təcrübə,</span>
          </div>

          <div className="about-heading-row about-heading-row--2">
            <div className="about-img-wrap about-img-wrap--rect">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80"
                alt="Yaşıl divan"
                className="about-inline-img"
              />
            </div>
            <span className="about-heading-word">bir nəsil</span>
          </div>

          <div className="about-heading-row about-heading-row--3">
            <span className="about-heading-word">keyfiyyət</span>

            <div className="about-stats-inline">
              {stats.map((s) => (
                <AnimatedStat
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  format={s.format}
                  label={s.label}
                  isActive={inView}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="about-body">
          Farah Mobilya 2011-ci ildən bəri İstanbulda fərdi və kommersiya müştəriləri üçün premium
          mebel istehsal edir. Ailə şirkəti olaraq başladığımız yolu indi 8.000 m² istehsalat sahəsi
          və CNC, lazer kəsmə, UV boyama xətləri ilə davam etdiririk. Otellər, butik restoranlar,
          korporativ ofislər və developerlər ilə Türkiyə daxilində və Azərbaycan, Gürcüstan, MDB
          ölkələrində 320+ layihə həyata keçirmişik. Hər layihəyə öz xüsusi qrafiki, texniki
          çertyojları və komandası ilə yanaşınq.
        </p>

      </div>
    </section>
  );
}
