import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Initiation from "./components/Initiation";
import Action from "./components/Action";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Initiation />
      <Action />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
