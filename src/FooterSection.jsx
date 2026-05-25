const SHOP_LINKS = [
  "Qonaq otağı",
  "Yataq otağı",
  "Yemək otağı",
  "Ofis",
  "Çöl/Bağ mebeli",
  "İşıqlandırma",
];

const SUPPORT_LINKS = [
  "Farah haqqında",
  "Sifarişinizi izləyin",
  "Geri qaytarılma və Dəyişdirilmə",
  "Çatdırılma məlumatı",
  "Zəmanət",
  "İnteryer dizayn xidmətləri",
];

const PinIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <img src="/123.svg" alt="" className="footer-social-img" />
);

const PlayIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
  </svg>
);

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <h3 className="footer-brand-name">Farah.</h3>
              <p className="footer-brand-sub">MOBILYA — EST. 2011</p>
            </div>

            <p className="footer-brand-desc">
              Türkiyə və onun hüdudlarından kənarda hər bir evə istilik,
               gözəllik və qalıcı keyfiyyət gətirən premium, əl işi mebellər.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="footer-social"><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" className="footer-social"><FacebookIcon /></a>
              <a href="#" aria-label="YouTube" className="footer-social"><YoutubeIcon /></a>
              <a href="#" aria-label="TikTok" className="footer-social"><PlayIcon /></a>
            </div>
          </div>

          {/* Shop links */}
          <div className="footer-col">
            <h4 className="footer-heading">MAĞAZA</h4>
            <ul className="footer-links">
              {SHOP_LINKS.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div className="footer-col">
            <h4 className="footer-heading">DƏSTƏK</h4>
            <ul className="footer-links">
              {SUPPORT_LINKS.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-col">
            <h4 className="footer-heading">ƏLAQƏ</h4>
            <ul className="footer-contact">
              <li>
                <span className="footer-contact-icon"><PinIcon /></span>
                <span>Bağcılar Mahalləsi, Mobilyacılar Çarşısı<br />No:42, Istanbul</span>
              </li>
              <li>
                <span className="footer-contact-icon"><PhoneIcon /></span>
                <a href="tel:+902125550142">+90 212 555 0142</a>
              </li>
              <li>
                <span className="footer-contact-icon"><MailIcon /></span>
                <a href="mailto:contact@farah-atelier.com">contact@farah-atelier.com</a>
              </li>
              <li>
                <span className="footer-contact-icon"><ClockIcon /></span>
                <span>Mon–Sat: 09:00 — 20:00<br />Sun: 11:00 — 18:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Giant brand wordmark */}
        <div className="footer-wordmark" aria-hidden="true">FARAH</div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          © 2026 FARAH MOBILYA. ALL RIGHTS RESERVED. CRAFTED WITH IN ISTANBUL.
        </div>
      </div>
    </footer>
  );
}
