import ZoomParallax from '@/components/common/ZoomParallax/ZoomParallax.jsx';

export default function ProductionTechSection() {
  const images = [
    { src: "/machinery.png", alt: "CNC alət dəsti" },
    { src: "/machinery2.png", alt: "Avtomatik kənar bantlama" },
    { src: "/machinery3.png", alt: "Fiber lazer kəsmə xətti" },
    { src: "/machinery4.png", alt: "Sənaye tikiş və kəsmə" },
    { src: "/machinery5.png", alt: "Modul yığma xətti" },
    { src: "/Table.jpg", alt: "İstehsalat sahəsi" },
    { src: "/FarahSofa.png", alt: "Farah Mobilya" },
  ];

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

        <div className="tech-parallax">
          <ZoomParallax images={images} />
        </div>
      </div>
    </section>
  );
}
