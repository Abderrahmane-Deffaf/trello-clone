import React from "react";
import Cards from "./Cards";
import { ressources } from "../content/links";
import Linkcomp from "../components/Linkcomp";
import Card from "./Card";

const Ressources = ({ drop, index }) => {
  if (drop && index === 4) {
    return (
      //overscroll-behavior-block: contain;

      <div className="absolute bg-white w-full">
        <div className="flex m-auto   max-w-[1320px]">
          <div className="basis-[70%]">
            <div className=" max-w-[80%] mx-auto p-4 flex flex-col gap-4">
              <h3>Apprendre et nouer des contacts </h3>
              <hr className="border-gray" />
              <Cards content={ressources} />
            </div>
          </div>
          <div className="basis-[30%] p-4 bg-lightpurple flex flex-col gap-4">
            <h3>Derniers ajouts au blog Trello</h3>
            <hr className="border-darkpurple" />
            <Card />
            <Linkcomp content={"Plus de billets de blog"} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Ressources;
