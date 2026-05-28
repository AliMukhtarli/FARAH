import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Ana Səhifə" },
  { to: "/#about", label: "Haqqımızda" },
  { to: "/catalog", label: "Kataloq" },
  { to: "/#contact", label: "Əlaqə" },
];

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const onLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-sticky">
      <nav className={`nav${menuOpen ? " nav--menu-open" : ""}`}>
        <a className="nav-logo" href="#home" onClick={onLogoClick}>
          <img src="/FaviconFarah.svg" alt="Farah Mobilya" className="nav-logo-icon" />
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} onClick={closeMenu}>
                {label}
              </Link>
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
          <button type="button" className="nav-cta">
            B2B Sifariş
          </button>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={menuOpen ? "Menunu bağla" : "Menunu aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`nav-mobile-panel${menuOpen ? " is-open" : ""}`}>
          <ul className="nav-mobile-links">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
