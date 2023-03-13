import React from "react";
import logo from "../../assets/logowhite.svg";
import drop from "../../assets/icons/droptwo.svg";
import { buttons } from "../constants/navbar";
import notification from "../../assets/icons/notification.svg";
import quetion from "../../assets/icons/quetion.svg";

const Navbar = () => {
  return (
    <div className="bg-navbarbg flex justify-between p-4 items-center">
      <div className="flex gap-4">
        <div>
          <img src={logo} />
        </div>
        <div className="flex gap-3 ">
          {buttons.map((Element) => {
            return (
              <button className="flex p-[2px] items-center gap-2 hover:bg-navbghover text-white">
                {Element}
                <img src={drop} />
              </button>
            );
          })}
          <button className="text-white hover:bg-navbghover">Create</button>
        </div>
      </div>

      <div className="flex gap-4">
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
        <div>
          <button>
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button>
            <img src={quetion} />
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
