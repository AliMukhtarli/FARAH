import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import FarahHero from "./FarahHero.jsx";
import About from "./AboutSection.jsx";
import ProductionTech from "./ProductionTechSection.jsx";
import DigitalFlow from "./DigitalFlowSection.jsx";
import B2B from "./B2BSection.jsx";
import ProcessSteps from "./ProcessStepsSection.jsx";
import Footer from "./FooterSection.jsx";
import CatalogPage from "./CatalogPage.jsx";

function HomePage() {
  return (
    <div>
      <FarahHero />
      <About />
      <ProductionTech />
      <DigitalFlow />
      <B2B />
      <ProcessSteps />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);