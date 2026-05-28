import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar.jsx";

const FILTERS = ["Hamısı", "Oturacaqlar", "Masalar", "İşıqlandırma", "Saxlama bölmələri"];

const SlidersIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M4 21v-7" />
    <path d="M4 10V3" />
    <path d="M12 21v-9" />
    <path d="M12 8V3" />
    <path d="M20 21v-5" />
    <path d="M20 12V3" />
    <path d="M2 14h4" />
    <path d="M10 8h4" />
    <path d="M18 16h4" />
  </svg>
);

export default function CatalogPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Hamısı");

  const filterListId = useMemo(() => "catalog-filter-list", []);
  const sofaOffset = useMemo(() => ({ x: -40, y: 114 }), []);

  return (
    <div className="catalog-page">
      <NavBar />

      <main className="catalog-main">
        <section className="catalog-hero" aria-label="Kataloq">
          <motion.div
            className="catalog-hero-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="catalog-hero-copy">
              <p className="catalog-eyebrow">QONAQ OTAĞINIZ ÜÇÜN</p>
              <h1 className="catalog-title">
                Mükəmməl <br />
                məkanınızı&nbsp;yaradın
              </h1>
              <p className="catalog-desc">
                Farah Mobilya ilə evinizə rahatlıq və zəriflik gətirin. Hər bir mebel
                parçasında sənətkarlıq və keyfiyyət.
              </p>
              <div className="catalog-actions">
                <button className="btn-primary">Kolleksiyaya Bax</button>
                <button className="btn-secondary">
                  Istanbul Showroom
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

          </motion.div>

          <motion.img
            className="catalog-hero-sofa"
            src="/CatalogPageSofa.png"
            alt="Farah kataloq divanı"
            initial={{ opacity: 0, x: sofaOffset.x + 22, y: sofaOffset.y + 10 }}
            animate={{ opacity: 1, x: sofaOffset.x, y: sofaOffset.y }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </section>

        <section className="catalog-cream" aria-label="Filtrlər">
          <div className="catalog-cream-inner">
            <button
              type="button"
              className="catalog-filter-toggle"
              aria-expanded={filtersOpen}
              aria-controls={filterListId}
              onClick={() => setFiltersOpen((v) => !v)}
            >
              <span className="catalog-filter-icon"><SlidersIcon /></span>
              <span>Filtr və çeşidləmə</span>
            </button>

            <div
              id={filterListId}
              className={`catalog-filter-panel${filtersOpen ? " is-open" : ""}`}
            >
              <ul className="catalog-filter-list">
                {FILTERS.map((f) => (
                  <li key={f}>
                    <button
                      type="button"
                      className={`catalog-filter-item${activeFilter === f ? " is-active" : ""}`}
                      onClick={() => setActiveFilter(f)}
                    >
                      {f}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

