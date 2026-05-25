import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import FarahHero from "./FarahHero.jsx";

function App() {
  return (
    <div>
      <FarahHero />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);