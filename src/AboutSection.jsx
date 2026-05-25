export default function AboutSection() {
  const stats = [
    { value: "8.000m²", label: "İstehsalat Sahəsi" },
    { value: "320+", label: "B2B Layihə" },
    { value: "50+", label: "Usta və Mühəndis" },
  ];

  return (
    <section className="about-section">
      <div className="about-container">

        {/* ── Big heading with inline images ── */}
        <div className="about-heading-block">
          <div className="about-heading-row about-heading-row--1">
            <span className="about-heading-word">15 il</span>
            <div className="about-img-wrap about-img-wrap--round">
              <img
                src="./Sofa.jpg"
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

            {/* Stats sit inline with the last word */}
            <div className="about-stats-inline">
              {stats.map((s) => (
                <div className="about-stat" key={s.label}>
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Body text ── */}
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