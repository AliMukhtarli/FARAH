// Put your sofa photo at public/FarahSofa.png
const sofaImage = "/FarahSofa.png";

export default function FarahHero() {
  const scrollToHome = (e) => {
    e.preventDefault();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" aria-label="Ana səhifə">
      <img
        className="hero-bg"
        src={sofaImage}
        alt="Farah Mobilya divan kolleksiyası"
      />

      <header className="nav-sticky">
        <nav className="nav">
          <a className="nav-logo" href="#home" onClick={scrollToHome}>
            <img src="/FaviconFarah.svg" alt="Farah Mobilya" className="nav-logo-icon" />
          </a>

          <ul className="nav-links">
            {["Ana Səhifə", "Haqqımızda", "Kataloq", "Əlaqə"].map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button className="nav-search" aria-label="Axtar">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button type="button" className="nav-cta">B2B Sifariş</button>
          </div>
        </nav>
      </header>

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">Qonaq otağınız üçün</p>

          <h1 className="hero-heading">
            Mükəmməl <br />
            məkanınızı{" "}
            <span className="accent">yaradın</span>
          </h1>

          <p className="hero-desc">
            Farah Mobilya ilə evinizə rahatlıq və zəriflik gətirin. Hər bir
            mebel parçasında sənətkarlıq və keyfiyyət.
          </p>

          <div className="hero-actions">
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
      </div>
    </section>
  );
}
