import { infos } from "../content/useage";
import React from "react";

const Useage = () => {
  return (
    <div>
      <div className="max-w-[1320px] m-auto p-4 flex flex-col gap-5">
        <div className="flex flex-col max-w-[60%] gap-4">
          <p className="font-medium">
            DES FONCTIONNALITÉS POUR ÉVOLUER EFFICACEMENT
          </p>
          <h3 className="text-4xl font-bold">Faites-en plus grâce à Trello</h3>
          <p className="text-xl">
            Les fonctionnalités intuitives de Trello permettent à toutes les
            équipes de rapidement configurer et personnaliser des flux de
            travail pour toutes leurs activités.
          </p>
        </div>
        <div className="flex justify-center gap-[2%]">
          {infos.map((Element) => {
            return (
              <div className="griddisplay bg-lightgray p-4 gap-4 rounded-xl basis-[32%]">
                <img className="w-1/4" src={Element.image} />
                <p className="font-bold text-xl">{Element.title}</p>
                <p>{Element.text}</p>
                <a className="border-blue hover:bg-lightblue border w-fit p-6 bg-white  rounded-xl flex  items-center">
                  {Element.link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Useage;
