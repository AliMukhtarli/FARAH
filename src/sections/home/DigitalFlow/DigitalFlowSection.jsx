import { useState } from "react";

const FEATURES_LEFT = [
  {
    id: "solidworks",
    icon: (
      <img src="./icon.svg" className="iconsvg"/>
    ),
    title: "SolidWorks BIM",
    desc: "3D dizayn və texniki çertyojlar — müştəri ilə birbaşa paylaşım.",
  },
  {
    id: "siparis",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Online Sifariş Paneli",
    desc: "B2B müştərilər layihəni real vaxtda izləyir, fakturaları idarə edir.",
  },
  {
    id: "iot",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "IoT Maşın İzləmə",
    desc: "Hər maşının yükü və keyfiyyət göstəricilərini canlı izləyirik.",
  },
  {
    id: "fsc",
    icon: (
      <img src="./icon.svg" className="iconsvg"/>
    ),
    title: "FSC & ISO 9001",
    desc: "Sertifikatlı meşə materialları və beynəlxalq keyfiyyət standartları.",
  },
];

const FEATURES_RIGHT = [
  {
    id: "surətli",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Sürətli Tətbiq",
    desc: "Standart layihələr 4–6 həftə, fərdi layihələr 8–12 həftə içində.",
  },
  {
    id: "konfiq",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Fərdi Konfiqurasiya",
    desc: "Materiallar, ölçü, rəng və stavalar — minlərla kombinasiya.",
  },
  {
    id: "logistika",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Beynəlxalq Logistika",
    desc: "Türkiyə, Azərbaycan, Gürcüstan və MDB ölkələrinə birbaşa çatdırılma.",
  },
  {
    id: "menecer",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Layihə Meneceri",
    desc: "Hər B2B müştəri üçün ayrıca menecer — vahid əlaqə nöqtəsi.",
  },
];

const ArrowIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

function FlowCard({ feature, isHovered, onEnter, onLeave }) {
  return (
    <div
      className={`flow-card${isHovered ? " is-hovered" : ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {isHovered ? (
        <>
          <span className="flow-card-bracket flow-card-bracket--tl" aria-hidden="true" />
          <span className="flow-card-bracket flow-card-bracket--br" aria-hidden="true" />
        </>
      ) : null}
      <div className="flow-card-icon">{feature.icon}</div>
      <div className="flow-card-text">
        <h3 className="flow-card-title">{feature.title}</h3>
        <p className="flow-card-desc">{feature.desc}</p>
      </div>
      <div className={`flow-card-cta${isHovered ? " is-visible" : ""}`} aria-hidden={!isHovered}>
        <ArrowIcon />
      </div>
    </div>
  );
}

export default function DigitalFlowSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="flow-section">
      <div className="flow-container">

        <div className="flow-header">
          <h2 className="flow-title">Dizayndan istehsalata tək rəqəmsal axın</h2>
          <p className="flow-subtitle">
            3D modeldən paketlənməyə qədər layihələr eyni rəqəmsal sistemdə izlənilir— 
            müştərilərimiz hər mərhələni real vaxtda görə bilir.
          </p>
        </div>

        <div className="flow-grid">
          <div className="flow-col flow-col--left">
            {FEATURES_LEFT.map((f) => (
              <FlowCard
                key={f.id}
                feature={f}
                isHovered={hoveredId === f.id}
                onEnter={() => setHoveredId(f.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>

          <div className="flow-col flow-col--right">
            {FEATURES_RIGHT.map((f) => (
              <FlowCard
                key={f.id}
                feature={f}
                isHovered={hoveredId === f.id}
                onEnter={() => setHoveredId(f.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
