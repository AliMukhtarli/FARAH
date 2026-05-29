import { useMemo, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout/PageLayout.jsx';
import CatalogHero from '@/sections/catalog/CatalogHero/CatalogHero.jsx';
import CatalogProducts from '@/sections/catalog/CatalogProducts/CatalogProducts.jsx';
import { CATALOG_FILTERS } from '@/data/catalogFilters.js';

const SlidersIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M4 21v-7" />
    <path d="M4 10V3" />
    <path d="M12 21v-9" />
    <path d="M12 8V3" />
    <path d="M20 21v-5" />
    <path d="M20 12V3" />
    <path d="M2 14h4" />
    <path d="M10 8h4" />
    <path d="M18 16h4" />
  </svg>
);

/** Product catalog listing with filters and scrollable rows. */
export default function CatalogPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Hamısı');
  const filterListId = useMemo(() => 'catalog-filter-list', []);

  return (
    <PageLayout className="catalog-page">
      <main className="catalog-main">
        <CatalogHero />

        <section className="catalog-cream" aria-label="Filtrlər">
          <div className="catalog-cream-inner">
            <button
              type="button"
              className="catalog-filter-toggle"
              aria-expanded={filtersOpen}
              aria-controls={filterListId}
              onClick={() => setFiltersOpen((v) => !v)}
            >
              <span className="catalog-filter-icon">
                <SlidersIcon />
              </span>
              <span>Filtr və çeşidləmə</span>
            </button>

            <div
              id={filterListId}
              className={`catalog-filter-panel${filtersOpen ? ' is-open' : ''}`}
            >
              <ul className="catalog-filter-list">
                {CATALOG_FILTERS.map((f) => (
                  <li key={f}>
                    <button
                      type="button"
                      className={`catalog-filter-item${activeFilter === f ? ' is-active' : ''}`}
                      onClick={() => setActiveFilter(f)}
                    >
                      {f}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <CatalogProducts activeFilter={activeFilter} />
        </section>
      </main>
    </PageLayout>
  );
}
