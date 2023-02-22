import React from "react";
import logo from ".././assets/logo.svg";
import { Link } from "react-router-dom";
import { links } from "../content/links";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="p-4">
        <a>
          <img src={logo} alt="trello logo" />
        </a>
      </div>
      <div className="flex gap-3 items-center">
        {links.map((element) => (
          <div>
            <button className="flex items-center gap-1">{element.title}
              <img src={element.icon} />
            </button>
          </div>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-3">
        <a>Connexion</a>
        <a className="bg-blue h-full flex items-center">Obtenir Trello gratuitment</a>
      </div>
    </div>
  );
};

export default Navbar;
