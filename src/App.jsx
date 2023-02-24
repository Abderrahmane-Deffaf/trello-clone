import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Initiation from "./components/Initiation";
import Action from "./components/Action";
import Features from "./components/Features";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Initiation />
      <Action />
      <Features />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
