import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { key } from "./key";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default Main;
