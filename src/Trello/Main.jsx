import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { key } from "./key";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/Navbar";
import Model from "./Model";

const Main = () => {
  const [showmodel, setShowmodel] = useState(false);

  return (
    <div>
      <Navbar />
      <button onClick={()=>setShowmodel(true)}>model</button>
      {showmodel ? (
        <Model>
          <div className="text-black">hello</div>
        </Model>
      ) : null}
    </div>
  );
};
export default Main;
