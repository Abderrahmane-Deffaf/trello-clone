import React from "react";
import { useState } from "react";
import logo from ".././assets/logo.svg";
import { links } from "../content/links";
import Fonctionnalites from "../subComponents/Fonctionnalites";
import Solutions from "../subComponents/Solutions";
import Offres from "../subComponents/Offres";
import Ressources from "../subComponents/Ressources";

const Navbar = () => {
  const [drop, setDop] = useState(false);
  const [index, setIndex] = useState();

  return (
    <div className=" sticky top-0 bg-white shadow z-20">
      <div className="max-w-[1320px] m-auto">
        <div className="flex">
          <div className="p-4">
            <a>
              <img src={logo} alt="trello logo" />
            </a>
          </div>
          <div className="flex gap-3 items-center">
            {links.map((element, index) => (
              <div key={index}>
                <button
                  className="flex items-center gap-1 font-normal"
                  onClick={(e) => {
                    e.preventDefault;
                    setIndex(index);
                    if (drop) {
                      setDop(false);
                    } else {
                      setDop(true);
                    }
                  }}
                >
                  {element.title}
                  <img src={element.icon} className="" />
                </button>
              </div>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-3 text-xl ">
            <a className="font-normal">Connexion</a>
            <a className="bg-blue flex items-center px-2  text-white h-full hover:bg-darkblue">
              Obtenir Trello gratuitment
            </a>
          </div>
        </div>
      </div>
      <Fonctionnalites drop={drop} index={index}/>
      <Solutions drop={drop} index={index} />
      <Offres drop={drop} index={index} />
      <Ressources drop={drop} index={index} />
    </div>
  );
};

export default Navbar;
