import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
