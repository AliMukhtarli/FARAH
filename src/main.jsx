import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import FarahHero from "./FarahHero.jsx";
import About from "./AboutSection.jsx";

function App() {
  return (
    <div>
      <FarahHero />
      <About />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);