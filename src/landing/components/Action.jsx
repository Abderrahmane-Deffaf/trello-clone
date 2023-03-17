import React from "react";
import { cards } from "../content/cards";

function Action() {
  return (
    <div className="bg-white">
      <div className="max-w-[1320px] m-auto p-4 flex flex-col gap-6">
        <div className="w-[53%] flex flex-col gap-3">
          <p>TRELLO EN ACTION </p>
          <h3 className="text-4xl">
            Des flux de travail pour les projets de toutes envergures
          </h3>
        </div>
        <div className=" noscrollbar flex w-[100%] gap-[3%] overflow-x-auto flex-nowrap p-[2rem] ">
          {cards.map((Element, index) => {
            return (
              <a
                key={index}
                className=" gap-3 box-shadow box-shadow-hover flex flex-col min-w-[30%] rounded-xl overflow-hidden "
              >
                <div
                  className="h-[3rem] relative "
                  style={{ backgroundColor: Element.color }}
                >
                  <div className="w-[3.2rem] absolute left-5 top-4 bg-white p-2 rounded-xl ">
                    <img className="w-full" src={Element.icon} />
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-medium">{Element.title}</p>
                  <p>{Element.text}</p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="flex p-4 gap-4">
            <p className="basis-[60%]  text-xl">
              Pas besoin de partir de rien. Créez rapidement votre flux de
              travail grâce à un mini guide pratique conçu pour différentes
              équipes. Personnalisez-le pour vous l'approprier.
            </p>
            <a className="border border-darkblue hover:bg-lightblue w-fit text-center h-fit p-3 rounded-lg">
              Explorer tous les cas d'usage 
            </a>
        </div>
      </div>
    </div>
  );
}

export default Action;
