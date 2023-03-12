import React from "react";
import logo from "../../assets/logowhite.svg";
import drop from '../../assets/icons/drop.svg'
import { buttons } from "../constants/navbar";
import notification from '../../assets/icons/notification.svg' ; 
import quetion from '../../assets/icons/quetion.svg' ; 

const Navbar = () => {
  return (
    <div className="bg-navbarbg">
      <div>
        <img src={logo} />
      </div>
      <div>
        {buttons.map((Element) => {
          return (
            <button>
              {Element}
              <img src={drop} />
            </button>
          );
        })}
        <button>Create</button>
      </div>
      <div>
        <div>
          <form>
            <label htmlFor="search">
              <input placeholder="Search" />
            </label>
          </form>
        </div>
        <div>
          <button> <img src={notification} /> </button>
          <button> <img src={quetion} /> </button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
