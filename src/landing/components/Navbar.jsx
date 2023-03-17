import React from "react";
import { useState } from "react";
import logo from "../../assets/logos/logo.svg";
import { links } from "../content/links";
import Fonctionnalites from "../subComponents/Fonctionnalites";
import Solutions from "../subComponents/Solutions";
import Offres from "../subComponents/Offres";
import Ressources from "../subComponents/Ressources";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drop, setDop] = useState(false);
  const [index, setIndex] = useState(0);
  const [oldindex, setOldindex] = useState(0);

  return (
    <div
      className=" sticky top-0 bg-white shadow z-20"
      onBlur={() => setDop(false)}
    >
      <div className="max-w-[1320px] m-auto">
        <div className="flex gap-4">
          <div className="p-4">
            <Link to={"/"}>
              <img src={logo} alt="trello logo" />
            </Link>
          </div>
          <div className="flex items-center justify-between w-full  ">
            <div className="flex gap-4 items-center">
              {links.map((element, index) => (
                <div key={index}>
                  <button
                    className="flex items-center gap-1 font-normal"
                    onClick={(e) => {
                      e.preventDefault;
                      setIndex(index);
                      if (!drop || (drop && oldindex !== index)) {
                        setDop(true);
                        setOldindex(index);
                      } else if (oldindex === index && drop) {
                        setDop(false);
                        setOldindex(index);
                      }
                    }}
                  >
                    {element.title}
                    <img src={element.icon} className="" />
                  </button>
                </div>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-3 text-[1.2rem] h-full ">
              <a className="font-normal">Connexion</a>
              <Link
                to={"/Main"}
                className="bg-blue flex items-center px-2  text-white h-full hover:bg-darkblue"
              >
                Obtenir Trello gratuitment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Fonctionnalites drop={drop} index={index} />
      <Solutions drop={drop} index={index} />
      <Offres drop={drop} index={index} />
      <Ressources drop={drop} index={index} />
    </div>
  );
};

export default Navbar;
