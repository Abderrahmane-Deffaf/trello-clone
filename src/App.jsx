import React from "react";
import { createRoot } from "react-dom";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
