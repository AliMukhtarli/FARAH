export default function ProductionTechSection() {
  return (
    <section className="tech-section">
      <div className="tech-container">

        {/* Header */}
        <div className="tech-header">
          <h2 className="tech-title">İstehsalda İstifadə Etdiyimiz Texnologiya</h2>
          <p className="tech-subtitle">
            Avropa istehsalı CNC, lazer və boyama sistemlərimiz istehsalında millimetrik dəqiqlik
            və günlük 200+ vahid istehsal qabiliyyəti təqdim edir.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="tech-grid">

          {/* Row 1 — image + dark card */}
          <div className="tech-cell tech-cell--image tech-cell--r1l">
            <img src="/machinery.png" alt="CNC alət dəsti" className="tech-img" />
          </div>

          <div className="tech-cell tech-cell--dark tech-cell--r1r">
            <h3 className="tech-card-title tech-card-title--light">CNC Maşını</h3>
            <p className="tech-card-desc tech-card-desc--light">
              HOMAG markalı 5-oxlu CNC frezer ilə kompleks 3D forma kəsmə, oyma və qarmaq
              dəlikləri tək keçidlə həyata keçirilir.
            </p>
          </div>

          {/* Row 2 — wide image with overlaid white card */}
          <div className="tech-cell tech-cell--image tech-cell--wide">
            <img src="/machinery2.png" alt="Avtomatik kənar bantlama" className="tech-img" />
            <div className="tech-overlay-card">
              <h3 className="tech-card-title">Avtomatik Kənar Bantlama</h3>
              <p className="tech-card-desc">
                IMA Schelling avtomatik kənar bantlama maşını — PUR yapışqan ilə görünməz birləşmə
                və 0.4mm-dən 3mm-ə qədər kənar.
              </p>
            </div>
          </div>

          {/* Row 3 — three image+caption cards */}
          <figure className="tech-cell tech-cell--caption">
            <div className="tech-cell--image tech-cell--square">
              <img src="/machinery3.png" alt="Fiber lazer kəsmə xətti" className="tech-img" />
            </div>
            <figcaption className="tech-caption">
              <h3 className="tech-card-title">Fiber Lazer Kəsmə Xətti</h3>
              <p className="tech-card-desc">
                Trumpf fiber lazer ilə metal ayaq, çərçivə və qarmaq detallar təmiz kənar və
                yüksək sürətdə kəsilir. Mebel sənayesində nadir tapılır.
              </p>
            </figcaption>
          </figure>

          <figure className="tech-cell tech-cell--caption">
            <div className="tech-cell--image tech-cell--square">
              <img src="/machinery4.png" alt="Sənaye tikiş və kəsmə" className="tech-img" />
            </div>
            <figcaption className="tech-caption">
              <h3 className="tech-card-title">Sənaye Tikiş və Kəsmə</h3>
              <p className="tech-card-desc">
                Juki sənaye tikiş və avtomatik parça kəsmə dəzgahları — yumşaq mebel istehsalında
                günlük 800+ divan / kreslo qabiliyyəti.
              </p>
            </figcaption>
          </figure>

          <figure className="tech-cell tech-cell--caption">
            <div className="tech-cell--image tech-cell--square">
              <img src="/machinery5.png" alt="Modul yığma xətti" className="tech-img" />
            </div>
            <figcaption className="tech-caption">
              <h3 className="tech-card-title">Modul Yığma Xətti</h3>
              <p className="tech-card-desc">
                12 stansiyalı yığma xətti — hər addım keyfiyyət nəzarətindən keçir, paketləmə və
                yükləmə də eyni xəttdə davam edir.
              </p>
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
}
