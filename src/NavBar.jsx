import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const onLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav-sticky">
      <nav className="nav">
        <a className="nav-logo" href="#home" onClick={onLogoClick}>
          <img src="/FaviconFarah.svg" alt="Farah Mobilya" className="nav-logo-icon" />
        </a>

        <ul className="nav-links">
          <li><Link to="/">Ana Səhifə</Link></li>
          <li><Link to="/#about">Haqqımızda</Link></li>
          <li><Link to="/catalog">Kataloq</Link></li>
          <li><Link to="/#contact">Əlaqə</Link></li>
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
  );
}

