import React from "react";
import { useState } from "react";
import { initiation } from "../content/initiationcards";

const Initiation = () => {
  const [image, setImage] = useState(initiation[0].image);
  const [item, setItem] = useState(0);

  return (
    <div className="bg-gradient-2">
      <div className="flex flex-col max-w-[1320px] m-auto">
        <div className="w-[60%] p-4">
          <p>INITIATION À TRELLO</p>
          <h3 className="text-3xl">Un centre de productivité </h3>
          <p>
            Simples, flexibles et puissants. Les tableaux, les listes et les
            cartes suffisent pour obtenir une vue claire de qui fait quoi et des
            tâches qu'il vous reste à faire. Découvrez-en plus dans notre
            <a className="text-blue underline"> guide de mise en route.</a>
          </p>
        </div>
        <div className="flex gap-[3%]">
          <div className="basis-[30%]">
            {initiation.map((Element, index) => {
              return (
                <button
                  className="text-start btn first:card  p-4 rounded-md "
                  id={index}
                  key={index}
                  onClick={() => {
                    if (document.getElementById(index).id == index) {
                      document.querySelectorAll(".btn").forEach((Element) => {
                        Element.classList.remove("first:card");
                        Element.classList.remove("card");
                      });
                      document.getElementById(index).classList.add("card");
                    }
                    setImage(initiation[index].image);
                  }}
                >
                  <p className="font-medium">{Element.title}</p>
                  <p>{Element.text}</p>
                </button>
              );
            })}
          </div>
          <div className="basis-[67%] p-3">
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiation;
