import { useEffect, useState } from "react";

const STEPS = [
  {
    id: "briefing",
    label: "briefing və konsept",
    bg: "/brifing.jpg",
    desc:
      "Layihəni müştəri ilə birlikdə dəyərləndiririk — məkan, məqsəd, büdcə və estetik istiqamət. 5 iş günü ərzində 3D renderlər və material seçimləri təqdim olunur.",
  },
  {
    id: "texniki",
    label: "texniki çertyoj və müqavilə",
    bg: "/texniki.jpg",
    desc:
      "SolidWorks-də hər bir parça üçün texniki çertyoj hazırlanır, BOM cədvəli, qiymət və ödəniş planı imzalanan müqavilədə təsbit olunur.",
  },
  {
    id: "istehsalat",
    label: "istehsalat və keyfiyyət nəzarəti",
    bg: "/itehsalat.jpg",
    desc:
      "CNC kəsmə, lazer, UV boyama və yığma xətlərində istehsal başlayır. Hər mərhələdə barkodlu QC sistemi ilə müştəri panelində canlı izləmə mümkündür.",
  },
  {
    id: "catdirilma",
    label: "çatdırılma və quraşdırma",
    bg: "/catdirilma.jpg",
    desc:
      "FSC sertifikatlı qablaşdırma, beynəlxalq logistika və yerində quraşdırma komandası — açar təslim layihə təhvili.",
  },
];

const STEP_DURATION_MS = 6000;

export default function ProcessStepsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setActive((i) => (i + 1) % STEPS.length);
    }, STEP_DURATION_MS);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <section className="steps-section">
      {/* Stacked backgrounds — only the active one is at opacity 1 */}
      <div className="steps-bg-stack" aria-hidden="true">
        {STEPS.map((s, i) => (
          <div
            key={s.id}
            className="steps-bg"
            style={{
              backgroundImage: `url(${s.bg})`,
              opacity: i === active ? 1 : 0,
            }}
          />
        ))}
      </div>

      <div className="steps-container">
        <h2 className="steps-title">Konsepsiyadan quraşdırılmaya qədər</h2>

        <div className="steps-row">
          {STEPS.map((s, i) => {
            const state =
              i === active ? "active" : i < active ? "done" : "upcoming";
            return (
              <button
                key={s.id}
                type="button"
                className={`steps-item steps-item--${state}`}
                onClick={() => setActive(i)}
              >
                <div className="steps-track">
                  <div
                    className="steps-progress"
                    key={i === active ? `active-${active}` : `static-${state}`}
                    style={{
                      width: state === "done" ? "100%" : state === "upcoming" ? "0%" : undefined,
                      animation:
                        state === "active"
                          ? `stepsFill ${STEP_DURATION_MS}ms linear forwards`
                          : "none",
                    }}
                  />
                </div>
                <span className="steps-label">{s.label}</span>
              </button>
            );
          })}
        </div>

        <div className="steps-desc-wrap">
          {STEPS.map((s, i) => (
            <p
              key={s.id}
              className="steps-desc"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              {s.desc}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
