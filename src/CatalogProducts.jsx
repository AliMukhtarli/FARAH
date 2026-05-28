import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { slugFromCatalogName } from "./catalogProducts.js";

const ALL = "Hamısı";

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ScrollRow({ items, rowLabel }) {
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);
  const [thumb, setThumb] = useState({ width: 60, left: 0, hidden: true });
  const interactionRef = useRef(false);

  const recalc = useCallback(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const trackWidth = track.clientWidth || 1;
    const scrollWidth = scroller.scrollWidth || 1;
    const clientWidth = scroller.clientWidth || 1;

    if (scrollWidth <= clientWidth + 1) {
      setThumb((t) => ({ ...t, hidden: true, left: 0, width: trackWidth }));
      return;
    }

    const ratio = clientWidth / scrollWidth;
    const thumbWidth = Math.max(140, Math.floor(trackWidth * ratio));
    const maxLeft = Math.max(0, trackWidth - thumbWidth);
    const maxScroll = Math.max(1, scrollWidth - clientWidth);
    const left = Math.round((scroller.scrollLeft / maxScroll) * maxLeft);

    setThumb({ width: thumbWidth, left, hidden: false });
  }, []);

  useEffect(() => {
    recalc();
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => recalc();
    scroller.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => recalc());
    ro.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [recalc]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let last = Date.now();
    const speedPxPerSecond = 32; // smooth, visible

    const id = window.setInterval(() => {
      const now = Date.now();
      const dt = Math.min(64, now - last);
      last = now;

      if (interactionRef.current) return;

      const scrollWidth = scroller.scrollWidth || 1;
      const clientWidth = scroller.clientWidth || 1;
      const maxScroll = Math.max(0, scrollWidth - clientWidth);
      if (maxScroll <= 1) return;

      const next = scroller.scrollLeft + (speedPxPerSecond * dt) / 1000;
      scroller.scrollLeft = next >= maxScroll ? 0 : next;
    }, 16);

    return () => window.clearInterval(id);
  }, []);

  const onTrackPointerDown = useCallback(
    (e) => {
      const scroller = scrollerRef.current;
      const track = trackRef.current;
      if (!scroller || !track) return;

      interactionRef.current = true;
      const rect = track.getBoundingClientRect();
      const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);

      const scrollWidth = scroller.scrollWidth || 1;
      const clientWidth = scroller.clientWidth || 1;
      const maxScroll = Math.max(0, scrollWidth - clientWidth);

      const maxLeft = Math.max(1, rect.width - thumb.width);
      const targetLeft = Math.min(Math.max(0, x - thumb.width / 2), maxLeft);
      const targetScrollLeft = (targetLeft / maxLeft) * maxScroll;
      scroller.scrollTo({ left: targetScrollLeft, behavior: "smooth" });

      // allow auto-scroll again after the smooth jump
      window.setTimeout(() => {
        interactionRef.current = false;
      }, 450);
    },
    [thumb.width]
  );

  const onThumbPointerDown = useCallback((e) => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;
    e.preventDefault();
    e.stopPropagation();

    interactionRef.current = true;
    const rect = track.getBoundingClientRect();
    const startX = e.clientX;
    const startLeft = thumb.left;

    const scrollWidth = scroller.scrollWidth || 1;
    const clientWidth = scroller.clientWidth || 1;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    const maxLeft = Math.max(1, rect.width - thumb.width);

    const onMove = (ev) => {
      const dx = ev.clientX - startX;
      const nextLeft = Math.min(Math.max(0, startLeft + dx), maxLeft);
      const nextScrollLeft = (nextLeft / maxLeft) * maxScroll;
      scroller.scrollLeft = nextScrollLeft;
    };

    const onUp = () => {
      interactionRef.current = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }, [thumb.left, thumb.width]);

  return (
    <section className="catalog-row" aria-label={rowLabel}>
      <div
        ref={scrollerRef}
        className="catalog-row-scroller"
        tabIndex={0}
        onPointerDown={() => {
          interactionRef.current = true;
        }}
        onPointerUp={() => {
          interactionRef.current = false;
        }}
        onPointerCancel={() => {
          interactionRef.current = false;
        }}
      >
        {items.map((item) => (
          <Link
            key={item.key}
            to={`/product/${slugFromCatalogName(item.name)}`}
            className="catalog-row-item catalog-row-item--link"
          >
            <div className="catalog-product-media">
              <img className="catalog-product-img" src={item.img} alt={item.name} loading="lazy" />
            </div>
            <div className="catalog-product-meta">
              <div className="catalog-product-text">
                <h3 className="catalog-product-name">{item.name}</h3>
                <p className="catalog-product-sub">{item.sub}</p>
              </div>
              <div className="catalog-product-price">{item.price}</div>
            </div>
          </Link>
        ))}
      </div>

      <div
        ref={trackRef}
        className={`catalog-row-scrollbar${thumb.hidden ? " is-hidden" : ""}`}
        onPointerDown={onTrackPointerDown}
        role="presentation"
      >
        <div
          className="catalog-row-thumb"
          style={{ width: `${thumb.width}px`, transform: `translateX(${thumb.left}px)` }}
          onPointerDown={onThumbPointerDown}
          role="presentation"
        />
      </div>
    </section>
  );
}

export default function CatalogProducts({ activeFilter = ALL }) {
  const baseItems = useMemo(
    () => [
      {
        name: "Aria Palıd Masası",
        kind: "Masalar",
        sub: "NAHAR VƏ ŞƏRABLIQ",
        price: "$1,850",
        img: "/AriaPalidMasasi.png",
      },
      {
        name: "Salis İstirahət Kürsüsü",
        kind: "Oturacaqlar",
        sub: "OTURACAQ VƏ RAHATLIQ",
        price: "$2,400",
        img: "/SalisIstirahetKursusu.png",
      },
      {
        name: "Luna Asma Çılçıraq",
        kind: "İşıqlandırma",
        sub: "İŞIQLANDIRMA VƏ AYDINLAN",
        price: "$850",
        img: "/LunaAsmaCilciraq.png",
      },
      {
        name: "Linear Komod",
        kind: "Saxlama bölmələri",
        sub: "SAXLAMA VƏ RAHATLIQ",
        price: "$3,200",
        img: "/LinearKomod.png",
      },
    ],
    []
  );

  const items = useMemo(() => {
    // Temporary: repeat same items until backend integration.
    const repeats = 6;
    return Array.from({ length: repeats }, (_, r) =>
      baseItems.map((it) => ({
        ...it,
        key: `${it.kind}-${it.name}-${r}`,
        name: `${it.name}${r ? ` ${r + 1}` : ""}`,
      }))
    ).flat();
  }, [baseItems]);

  const filtered = useMemo(() => {
    if (!activeFilter || activeFilter === ALL) return items;
    return items.filter((i) => i.kind === activeFilter);
  }, [activeFilter, items]);

  const rows = useMemo(() => {
    // 3 horizontal rows like your screenshot
    const rowCount = 3;
    const perRow = 8; // enough to require horizontal scroll
    const needed = rowCount * perRow;
    const src = filtered.length ? filtered : items;

    const filled = [];
    for (let i = 0; i < needed; i++) filled.push(src[i % src.length]);
    return chunk(filled, perRow);
  }, [filtered, items]);

  return (
    <section className="catalog-products" aria-label="Məhsullar">
      <div className="catalog-products-inner">
        <div className="catalog-rows">
          {rows.map((rowItems, idx) => (
            <ScrollRow key={idx} rowLabel={`Məhsullar sırası ${idx + 1}`} items={rowItems} />
          ))}
        </div>
      </div>
    </section>
  );
}

