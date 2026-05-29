import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home/HomePage.jsx';
import CatalogPage from '@/pages/Catalog/CatalogPage.jsx';
import ProductDetailsPage from '@/pages/ProductDetails/ProductDetailsPage.jsx';
import AboutPage from '@/pages/About/AboutPage.jsx';
import ContactPage from '@/pages/Contact/ContactPage.jsx';

/**
 * Application routes — add new pages here as the site grows.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:slug" element={<ProductDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
