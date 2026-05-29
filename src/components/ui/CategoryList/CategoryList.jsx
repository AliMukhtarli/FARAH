import { useState } from "react";
import { Link } from "react-router-dom";

const ArrowUpRight = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
  </svg>
);

/**
 * Pill-row list with orange hover (Farah style).
 * Each item can link via `slug` or use `onClick`.
 */
export default function CategoryList({
  title,
  subtitle,
  headerLink,
  items = [],
  className = "",
}) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className={`category-list ${className}`.trim()}>
      <div className="category-list-header">
        <div className="category-list-header-text">
          <h2 className="category-list-title">{title}</h2>
          {subtitle ? <p className="category-list-subtitle">{subtitle}</p> : null}
        </div>
        {headerLink ? (
          <Link to={headerLink.href} className="category-list-header-link">
            {headerLink.label}
            <ArrowUpRight />
          </Link>
        ) : null}
      </div>

      <ul className="category-list-items">
        {items.map((item) => {
          const isHovered = hoveredId === item.id;
          const rowClass = `category-list-row${isHovered ? " is-hovered" : ""}`;

          const inner = (
            <>
              <div className="category-list-row-copy">
                <h3 className="category-list-row-title">{item.title}</h3>
                {item.subtitle ? (
                  <p className="category-list-row-sub">{item.subtitle}</p>
                ) : null}
              </div>
              <div className="category-list-row-end">
                {isHovered ? <ArrowUpRight className="category-list-row-arrow" /> : null}
                <span className="category-list-row-price">{item.price}</span>
              </div>
            </>
          );

          return (
            <li
              key={item.id}
              className="category-list-item"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {item.slug ? (
                <Link to={`/product/${item.slug}`} className={rowClass}>
                  {inner}
                </Link>
              ) : (
                <button type="button" className={rowClass} onClick={item.onClick}>
                  {inner}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
