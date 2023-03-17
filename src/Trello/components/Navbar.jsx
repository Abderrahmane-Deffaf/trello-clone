import React, { useState } from "react";
import logo from "../../assets/logos/logowhite.svg";
import dropdown from "../../assets/landing/icons/droptwo.svg";
import { buttons } from "../constants/navbar";
import quetion from "../../assets/trello/icons/quetion.svg";
import profile from "../../assets/trello/icons/profile.png";
import { Workspaces } from "../subcomponents/Workspaces";
import { Recent } from "../subcomponents/Recent";
import Starred from "../subcomponents/Starred";
import Templates from "../subcomponents/Templates";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [index, setIndex] = useState(0);
  const [oldindex, setOldindex] = useState(0);

  return (
    <div className="bg-navbarbg flex justify-between min-w-full p-4 items-center relative">
      <div className="flex gap-4">
        <Link to={"/Main"}>
          <img src={logo} />
        </Link>
        <div className="flex gap-3 ">
          {buttons.map((Element, index) => {
            return (
              <button
                onClick={(e) => {
                  e.preventDefault;
                  setIndex(index);
                  if (!drop || (drop && oldindex !== index)) {
                    setDrop(true);
                    setOldindex(index);
                  } else if (oldindex === index && drop) {
                    setDrop(false);
                    setOldindex(index);
                  }
                }}
                className="flex p-[2px] items-center gap-2 hover:bg-navbghover text-white"
              >
                {Element}
                <img src={dropdown} />
              </button>
            );
          })}
          <button className="text-white hover:bg-navbghover">Create</button>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div>
          <form>
            <label
              htmlFor="search"
              className=" bg-navbarbglight text-white  gap-1 flex items-center px-3 py-1 rounded-[5px]"
            >
              <span class="material-symbols-outlined">search</span>
              <input
                placeholder="Search"
                type="text"
                name="search"
                className="bg-transparent text-white placeholder:text-white focus:outline-none focus:w-[30vw]"
              />
            </label>
          </form>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex">
            <span className=" material-symbols-outlined">notifications</span>
          </button>
          <button>
            <img src={quetion} />
          </button>
          <button>
            <div className="w-[2rem] aspect-square ">
              <img src={profile} />
            </div>
          </button>
        </div>
      </div>

      <Workspaces drop={drop} index={index} />
      <Recent drop={drop} index={index} />
      <Starred drop={drop} index={index} />
      <Templates drop={drop} index={index} />
    </div>
  );
};

export default Navbar;
