import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import FarahHero from "./FarahHero.jsx";
import About from "./AboutSection.jsx";
import ProductionTech from "./ProductionTechSection.jsx";
import DigitalFlow from "./DigitalFlowSection.jsx";
import B2B from "./B2BSection.jsx";
import ProcessSteps from "./ProcessStepsSection.jsx";
import Footer from "./FooterSection.jsx";

function App() {
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
    <App />
  </StrictMode>
);