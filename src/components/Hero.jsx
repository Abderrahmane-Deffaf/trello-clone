import React from "react";
import vedio from "../assets/icons/vedio.svg";
import illustration from "../assets/collage.webp";

const Hero = () => {
  return (
    <div className="gradient-bg  text-white">
      <div className="p-6 flex max-w-[1320px] m-auto">
        <div className=" basis-[50%] flex flex-col justify-center gap-3">
          <h1 className="text-5xl tracking-wide  font-bold">
            Trello rassemble vos tâches, vos coéquipiers et vos outils
          </h1>
          <p>
            Centralisez tout votre contenu, même dans une équipe distribuée.
          </p>
          <form className="flex flex-col gap-3 ">
            <label htmlFor="email">
              <input
                className="focus:outline-gray p-2 rounded-md text-black w-[60%]"
                placeholder="E-mail"
                id="email"
                name="email"
              />
            </label>
            <button
              type="submit"
              className="w-fit bg-blue p-3 rounded-md hover:bg-darkblue"
            >
              Inscrivez-vous, c'est gratuit!
            </button>
          </form>
          <div>
            <a className="flex gap-1 hover:gap-2 w-fit">
              <span className="underline">Visionner la vidéo</span>
              <img src={vedio}></img>
            </a>
          </div>
        </div>
        <div className="basis-[50%]">
          <img className="w-[100%]" src={illustration}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
