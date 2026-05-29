export default function B2BSection() {
  const features = [
    {
      num: "01",
      title: "Layihəyə Xüsusi Qiymət",
      desc: "Miqyasa görə təklif paketləri, müqavilə əsaslı qiymətlər və ödəniş planları.",
    },
    {
      num: "02",
      title: "Sürətli Layihə Tətbiqi",
      desc: "100 otaqlıq otel layihəsi 6 həftəyə hazır — istehsal və quraşdırma daxil.",
    },
    {
      num: "03",
      title: "Fərdi Dizayn Komandası",
      desc: "Daxili dizaynerlər və CAD mühəndislər layihənizə xüsusi parça hazırlayır.",
    },
  ];

  return (
    <section className="b2b-section">
      <div className="b2b-container">

        {/* Eyebrow */}
        <div className="b2b-eyebrow">
          <span className="b2b-eyebrow-line" />
          <span className="b2b-eyebrow-text">B2B Üstünlüklər</span>
          <span className="b2b-eyebrow-line" />
        </div>

        {/* Title */}
        <h2 className="b2b-title">Topdan müştərilərimizə nə təklif edirik?</h2>

        {/* Subtitle */}
        <p className="b2b-subtitle">
          Otel zəncirlərdən butik kafelərə qədər, hər miqyasda layihəyə uyğun komanda,
          qrafik və qiymət modelləri ilə yanaşırıq.
        </p>

        {/* Divider */}
        <div className="b2b-divider" />

        {/* Feature columns */}
        <div className="b2b-features">
          {features.map((f) => (
            <div key={f.num} className="b2b-feature">
              <span className="b2b-feature-num">— {f.num}</span>
              <h3 className="b2b-feature-title">{f.title}</h3>
              <p className="b2b-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="b2b-actions">
          <button className="b2b-btn b2b-btn--primary">Layihə üçün təklif al</button>
          <button className="b2b-btn b2b-btn--ghost">
            Necə çalışırıq
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}