import React from "react";
import Cards from "./Cards";
import { solutions, solutionsLinks } from "../content/links";
import Linkcomp from "../components/Linkcomp";

const Solutions = ({ drop, index }) => {
  if (drop && index === 1) {
    return (
      //overscroll-behavior-block: contain;

      <div className="absolute bg-white w-full">
        <div className="flex m-auto   max-w-[1320px] ">
          <div className="basis-[70%]">
            <div className=" max-w-[90%] mx-auto p-4 flex flex-col gap-4">
              <h3>
                Trouvez l'inspiration dans ces mini-guides pratiques Trello
                préconçus pour toutes les équipes
              </h3>
              <hr className="border-gray" />
              <Cards content={solutions} />
              <Linkcomp content={"Voir toutes les équipes"} />
            </div>
          </div>
          <div className="basis-[30%] p-4 bg-lightpurple flex flex-col gap-4">
            <h3>Notre produit en action</h3>
            <hr className="border-darkpurple" />
            <div className="flex flex-col gap-3">
              {solutionsLinks.map((Element) => {
                return (
                  <a>
                    <p className="font-[500]">{Element.title}</p>
                    <p>{Element.text}</p>
                  </a>
                );
              })}
            </div>
            <Linkcomp content={"Voir tous les cas pratiques"} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Solutions;
