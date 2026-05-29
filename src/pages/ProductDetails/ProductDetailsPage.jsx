import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout/PageLayout.jsx';
import { getProductBySlug } from '@/data/products.js';
import ProductSimilarSection from '@/sections/product/ProductSimilar/ProductSimilarSection.jsx';
import ProductCollectionsSection from '@/sections/product/ProductCollections/ProductCollectionsSection.jsx';
import { ROUTES } from '@/router/routes.js';

/** Single product view — gallery, specs, similar items, collections. */
export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = useMemo(() => getProductBySlug(slug), [slug]);

  const [activeThumb, setActiveThumb] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <PageLayout className="product-detail-page">
        <main className="product-detail-main product-detail-main--empty">
          <p>Məhsul tapılmadı.</p>
          <Link to={ROUTES.catalog} className="btn-primary">
            Kataloqa qayıt
          </Link>
        </main>
      </PageLayout>
    );
  }

  const mainSrc = product.thumbnails[activeThumb] ?? product.mainImage;

  return (
    <PageLayout className="product-detail-page">
      <main className="product-detail-main">
        <div className="product-detail-layout">
          <aside className="product-detail-left">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-stock">
              <span className="product-detail-stock-num">
                {product.stock.current}/{product.stock.total}
              </span>{' '}
              Mövcuddur
            </p>

            <div className="product-detail-thumbs" role="list">
              {product.thumbnails.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  role="listitem"
                  className={`product-detail-thumb${activeThumb === i ? ' is-active' : ''}`}
                  onClick={() => setActiveThumb(i)}
                  aria-label={`Şəkil ${i + 1}`}
                  aria-pressed={activeThumb === i}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>

            <div className="product-detail-colors" role="list" aria-label="Rəng seçimi">
              {product.colors.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  role="listitem"
                  className={`product-detail-swatch${activeColor === i ? ' is-active' : ''}`}
                  style={{ '--swatch': c.hex }}
                  onClick={() => setActiveColor(i)}
                  aria-label={c.label}
                  aria-pressed={activeColor === i}
                />
              ))}
            </div>
          </aside>

          <div className="product-detail-center">
            <div className="product-detail-hero-media">
              <img
                className="product-detail-hero-img"
                src={mainSrc}
                alt={product.name}
              />
            </div>
          </div>

          <aside className="product-detail-right">
            <h2 className="product-detail-section-title">Təsvir</h2>
            <p className="product-detail-desc">{product.description}</p>

            <div className="product-detail-features">
              {product.features.map((text, i) => (
                <div
                  key={text}
                  className={`product-detail-feature${i === product.features.length - 1 ? ' product-detail-feature--accent' : ''}`}
                >
                  {text}
                </div>
              ))}
            </div>

            <h2 className="product-detail-section-title product-detail-section-title--specs">
              MƏHSUL HAQQINDA
            </h2>
            <dl className="product-detail-specs">
              {product.specs.map((row) => (
                <div key={row.label} className="product-detail-spec-row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="product-detail-bar">
          <div className="product-detail-bar-inner">
            <div className="product-detail-bar-copy">
              {product.barLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="product-detail-bar-actions">
              <div className="product-detail-qty" aria-label="Miqdar">
                <button
                  type="button"
                  className="product-detail-qty-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Azalt"
                >
                  −
                </button>
                <span className="product-detail-qty-value">{quantity}</span>
                <button
                  type="button"
                  className="product-detail-qty-btn"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Artır"
                >
                  +
                </button>
              </div>
              <button type="button" className="product-detail-cart-btn">
                Səbətə at
              </button>
            </div>
          </div>
        </div>

        <ProductSimilarSection currentSlug={product.slug} />
        <ProductCollectionsSection />
      </main>
    </PageLayout>
  );
}
