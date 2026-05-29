import { useMemo } from "react";
import { motion } from "framer-motion";

export default function CatalogHero() {
  const sofaOffset = useMemo(() => ({ x: -40, y: 114 }), []);

  return (
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
            Farah Mobilya ilə evinizə rahatlıq və zəriflik gətirin. Hər bir mebel parçasında
            sənətkarlıq və keyfiyyət.
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
  );
}

