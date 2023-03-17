import React from "react";
import { offres } from "../content/links";
import Cards from "./Cards";

const Offres = ({ drop, index }) => {
  if (drop && index === 2) {
    return (
      //overscroll-behavior-block: contain;

      <div className="absolute bg-white w-full">
        <div className="flex m-auto   max-w-[1320px]">
          <div className="basis-[70%]">
            <div className=" max-w-[80%] mx-auto p-4 flex flex-col gap-4">
              <Cards content={offres} />
              <div className="bg-lightyelow p-3 rounded-lg flex items-center ">
                <div className="basis-[70%]">
                  <div className="flex gap-1">
                    <span className="material-symbols-outlined">bolt</span>
                    <p className="font-medium">Offre Free</p>
                  </div>
                  <p>
                    Pour les personnes ou les petites équipes qui cherchent à
                    organiser leur travail
                  </p>
                </div>
                <div>
                  <a className="p-3 border border-verydarkyelow bg-white rounded-lg hover:bg-hoveryelow">
                    Découvrez Trello
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[30%] p-4 bg-lightpurple flex flex-col gap-4">
            <h3>Comparez les offres et les tarifs</h3>
            <hr className="border-darkpurple" />
            <p>
              Que votre équipe soit constituée de 2 ou de 2 000 membres, le
              modèle tarifaire flexible de Trello vous permet de payer
              uniquement pour ce dont vous avez besoin.
            </p>
            <a className="p-4 border w-fit rounded-xl border-verydarkpurple bg-white hover:bg-hoverpurple">
              Consulter les tarifs Trello
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Offres;
