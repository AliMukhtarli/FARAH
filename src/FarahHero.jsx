const sofaImage = "/FarahSofa.png";

const InstagramIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M22 4.01a9.16 9.16 0 0 1-2.65.72 4.63 4.63 0 0 0 2.02-2.54 9.25 9.25 0 0 1-2.93 1.12 4.61 4.61 0 0 0-7.86 4.2A13.09 13.09 0 0 1 1.64 2.9a4.6 4.6 0 0 0 1.43 6.16 4.58 4.58 0 0 1-2.09-.58v.06a4.61 4.61 0 0 0 3.7 4.52 4.6 4.6 0 0 1-2.08.08 4.62 4.62 0 0 0 4.31 3.2A9.25 9.25 0 0 1 0 18.29a13.05 13.05 0 0 0 7.07 2.07c8.49 0 13.13-7.03 13.13-13.13l-.01-.6A9.4 9.4 0 0 0 22 4.01z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function FarahHero() {
  const scrollToHome = (e) => {
    e.preventDefault();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { Icon: InstagramIcon, href: "#", label: "Instagram" },
    { Icon: FacebookIcon, href: "#", label: "Facebook" },
    { Icon: TwitterIcon, href: "#", label: "Twitter" },
    { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  ];

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

      <footer className="hero-mini-bottom">
        <div className="hero-mini-socials">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="hero-mini-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
