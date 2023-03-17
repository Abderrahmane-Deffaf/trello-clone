import React from "react";
import { createPortal } from "react-dom";
import { fonctionnalites } from "../content/links";
import Cards from "./Cards";

const Fonctionnalites = ({ drop, index }) => {
  if (drop && index === 0) {
    return (
      <div className=" bg-white absolute w-full ">
        <div className="flex m-auto   max-w-[1320px] ">
          <div className="basis-[70%]">
            <div className=" max-w-[90%] mx-auto p-4 flex flex-col gap-4">
              <h3>
                Explorez les fonctionnalités qui aident votre équipe à réussir
              </h3>
              <hr className="border-gray" />
              <Cards content={fonctionnalites} />
            </div>
          </div>
          <div className="basis-[30%] p-4 bg-lightpurple flex flex-col gap-4">
            <h3>Découvrir Trello</h3>
            <hr className="border-darkpurple" />
            <p>
              Grâce à Trello, votre équipe peut facilement avancer dans son
              travail. Quel que soit le projet, le flux de travail ou le type
              d'équipe, Trello peut vous aider à être organisé. C'est facile :
              inscrivez-vous, créez un tableau, et le tour est joué ! À vous la
              productivité.
            </p>
            <a className="p-4 border w-fit rounded-xl border-verydarkpurple bg-white hover:bg-hoverpurple ">
              Découvrir Trello
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Fonctionnalites;
