const FEATURES_LEFT = [
  {
    id: "solidworks",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "SolidWorks BIM",
    desc: "3D dizayn və texniki çertyojlar — müştəri ilə birbəşa paylaşım.",
  },
  {
    id: "siparis",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Online Sifariş Paneli",
    desc: "B2B müştərilər layihəni real vaxtda izləyir, fakturaları idarə edir.",
  },
  {
    id: "iot",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "IoT Maşın İzləmə",
    desc: "Hər maşının yükü və keyfiyyət göstəricilərini canlı izləyirik.",
  },
  {
    id: "fsc",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "FSC & ISO 9001",
    desc: "Sertifikatlı meşə materialları və beynəlxalq keyfiyyət standartları.",
  },
];

const FEATURES_RIGHT = [
  {
    id: "surətli",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Sürətli Tətbiq",
    desc: "Standart layihələr 4–6 həftə, fərdi layihələr 8–12 həftə içində.",
  },
  {
    id: "konfiq",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: "Fərdi Konfiqurasiya",
    desc: "Materiallar, ölçü, rəng və stavalar — minlərla kombinasiya.",
  },
  {
    id: "logistika",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "Beynəlxalq Logistika",
    desc: "Türkiyə, Azərbaycan, Gürcüstan və MDB ölkələrinə birbəşa çatdırılma.",
  },
  {
    id: "menecer",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Layihə Meneceri",
    desc: "Hər B2B müştəri üçün ayrıca menecer — vahid əlaqə nöqtəsi.",
  },
];

export default function DigitalFlowSection() {
  return (
    <section className="flow-section">
      {/* Full-bleed textured background */}
      <div className="flow-bg" aria-hidden="true" />

      <div className="flow-container">
        {/* Header */}
        <div className="flow-header">
          <h2 className="flow-title">Dizayndan istehsalata tək rəqəmsal axın</h2>
          <p className="flow-subtitle">
            3D modeldən paketlənməyə qədər layihələr eyni rəqəmsal sistemdə izlənilir —
            müştərilərimiz hər mərhələni real vaxtda görə bilir.
          </p>
        </div>

        {/* 3-col layout: features | chair | features */}
        <div className="flow-grid">

          {/* Left features */}
          <div className="flow-col flow-col--left">
            {FEATURES_LEFT.map((f) => (
              <div key={f.id} className="flow-card">
                <div className="flow-card-icon">{f.icon}</div>
                <div>
                  <h3 className="flow-card-title">{f.title}</h3>
                  <p className="flow-card-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center chair image */}
          <div className="flow-center">
            <img
              src="https://images.unsplash.com/photo-1567538096621-38d2284b23ff?auto=format&fit=crop&w=500&q=80"
              alt="Mebel nümunəsi"
              className="flow-chair-img"
            />
          </div>

          {/* Right features */}
          <div className="flow-col flow-col--right">
            {FEATURES_RIGHT.map((f) => (
              <div key={f.id} className="flow-card">
                <div className="flow-card-icon">{f.icon}</div>
                <div>
                  <h3 className="flow-card-title">{f.title}</h3>
                  <p className="flow-card-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}