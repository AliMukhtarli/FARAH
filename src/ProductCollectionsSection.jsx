import { Link } from "react-router-dom";
import { getCollectionItems } from "./catalogProducts.js";

const ArrowUpRight = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
  </svg>
);

export default function ProductCollectionsSection() {
  const items = getCollectionItems();

  return (
    <section className="product-collections" aria-label="Digər kolleksiyalar">
      <div className="category-list-header product-collections-header">
        <div className="category-list-header-text">
          <h2 className="category-list-title">Digər kolleksiyalar (105)</h2>
          <p className="category-list-subtitle">
            Gündəlik həyatınızı tamamlayan zamanın sınağından çıxmış əlavələr.
          </p>
        </div>
        <Link to="/catalog" className="category-list-header-link">
          Hamısına bax
          <ArrowUpRight />
        </Link>
      </div>

      <div className="product-collections-grid">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.slug}`}
            className="product-collections-card"
          >
            <div className="product-collections-media">
              <img src={item.img} alt={item.name} loading="lazy" />
            </div>
            <h3 className="product-collections-name">{item.name}</h3>
            <p className="product-collections-price">{item.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
