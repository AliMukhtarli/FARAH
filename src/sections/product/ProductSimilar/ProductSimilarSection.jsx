import { useMemo } from "react";
import CategoryList from '@/components/ui/CategoryList/CategoryList.jsx';
import { getSimilarProducts } from '@/data/products.js';

export default function ProductSimilarSection({ currentSlug }) {
  const similar = useMemo(() => getSimilarProducts(currentSlug), [currentSlug]);

  if (!similar.length) return null;

  return (
    <CategoryList
      className="product-similar"
      title={`Oxşar məhsullar (${similar.length})`}
      subtitle="İstilik və sadəlik hissi olan daha çox dizayn."
      headerLink={{
        href: "/catalog",
        label: "Kürsü və Divan (312)",
      }}
      items={similar}
    />
  );
}
