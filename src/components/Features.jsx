import React from "react";
import { features } from "../content/features";

const Features = () => {
  return (
    <div className="bg-gradient-3">
      <div className="max-w-[1320px] gridsys m-auto px-[4rem] pt-[4rem] gap-10">
        <div className="text-white text-center flex flex-col gap-3 items-center row-span-1 ">
          <h3 className="text-3xl">
            Découvrez le travail sous un tout autre jour
          </h3>
          <p className="max-w-[60%] text-xl">
            Consultez les projets de votre équipe sous tous les angles et
            apportez une perspective nouvelle à la tâche à réaliser.
          </p>
          <a className="border w-fit p-4 rounded-xl bg-white text-black border-verydarkpurple hover:bg-purple">
            Découvrez toutes les vues Trello
          </a>
        </div>
        {features.map((Element) => {
          return (
            <div className="flex gap-3 bg-white p-4 rounded-xl h-full area overflow-hidden box-shadow">
              <div className="basis-1/2 reverse">
                <img className="w-full h-full object-top object-contain" src={Element.image} />
              </div>
              <div className="basis-1/2 flex flex-col gap-4 p-8">
                <div className="flex gap-2 font-medium text-xl">
                  <span className="material-symbols-outlined">
                    {Element.icon}
                  </span>
                  <p>{Element.title}</p>
                </div>
                <p>{Element.text}</p>
                <a className="text-blue underline">{Element.link}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
