import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWordmarkFit } from "@/hooks/useWordmarkFit.js";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

const ArrowUpIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

/**
 * MagneticButton — wraps any element and attaches a GSAP-powered magnetic
 * hover effect (the element subtly follows the cursor and tilts in 3D).
 */
function MagneticButton({ as: Tag = "a", className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          x: x * 0.35,
          y: y * 0.35,
          rotationX: -y * 0.12,
          rotationY: x * 0.12,
          scale: 1.06,
          ease: "power2.out",
          duration: 0.4,
          transformPerspective: 600,
        });
      };

      const onLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "elastic.out(1, 0.4)",
          duration: 1.1,
        });
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}

export default function FooterSection() {
  const wrapperRef = useRef(null);
  const giantTextRef = useRef(null);
  const wordmarkInnerRef = useRef(null);
  const gridRef = useRef(null);
  const colsRef = useRef(null);
  const bottomRef = useRef(null);

  useWordmarkFit(giantTextRef, wordmarkInnerRef);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Giant FARAH wordmark — slow parallax & fade as the footer enters
      gsap.fromTo(
        giantTextRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 85%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Columns + bottom bar — staggered fade-up
      gsap.fromTo(
        [colsRef.current, bottomRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" ref={wrapperRef} className="footer">
      {/* Cinematic background layers */}
      <div className="footer-aurora" aria-hidden="true" />
      <div ref={gridRef} className="footer-bg-grid" aria-hidden="true" />

      <div className="footer-container">
        <div ref={colsRef} className="footer-grid">

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
              <MagneticButton href="#" aria-label="Instagram" className="footer-social"><InstagramIcon /></MagneticButton>
              <MagneticButton href="#" aria-label="Facebook" className="footer-social"><FacebookIcon /></MagneticButton>
              <MagneticButton href="#" aria-label="YouTube" className="footer-social"><YoutubeIcon /></MagneticButton>
              <MagneticButton href="#" aria-label="TikTok" className="footer-social"><PlayIcon /></MagneticButton>
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

        {/* Giant FARAH wordmark */}
        <div ref={giantTextRef} className="footer-wordmark" aria-hidden="true">
          <div ref={wordmarkInnerRef} className="footer-wordmark-inner">
            {"FARAH".split("").map((ch, i) => (
              <span key={i} className="footer-wordmark-letter">
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div ref={bottomRef} className="footer-bottom">
          <div className="footer-bottom-copy">
            © 2026 FARAH MOBILYA. ALL RIGHTS RESERVED. CRAFTED WITH IN ISTANBUL.
          </div>

          <MagneticButton as="div" className="footer-glass-pill footer-made-with">
            <span className="footer-made-text">Crafted with</span>
            <span className="footer-heart" aria-hidden="true">❤</span>
            <span className="footer-made-text">by</span>
            <span className="footer-made-brand">ALI</span>
          </MagneticButton>

          <MagneticButton
            as="button"
            type="button"
            onClick={scrollToTop}
            className="footer-glass-pill footer-back-top"
            aria-label="Yuxarı qayıt"
          >
            <ArrowUpIcon />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
