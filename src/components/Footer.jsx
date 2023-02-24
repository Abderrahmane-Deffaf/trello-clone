import React from "react";
import logo from "../assets/logowhite.svg";
import { cards, social } from "../content/footer";
import { languages } from "../content/footer";
import language from "../assets/icons/language.svg";
import { links } from "../content/footer";

const Footer = () => {
  return (
    <div className="bg-footerbg text-white p-4 flex flex-col gap-5">
      <div className="max-w-[1320px] m-auto flex justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <img src={logo} />
          </div>
          <a className="hover:underline">Connexion</a>
        </div>
        <div className="flex justify-between basis-[85%]">
          {cards.map((Element) => {
            return (
              <a className="flex flex-col basis-[23%] gap-3 hover:bg-footerbghover p-3">
                <p className="font-medium">{Element.title}</p>
                <p className="font-thin">{Element.text}</p>
              </a>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="max-w-[1320px] m-auto flex justify-between w-full ">
        <label htmlFor="chooselanguage" className="flex gap-3">
          <img src={language} />
          <select name="chooselanguage" className={`bg-footerbg`}>
            {languages.map((Element) => {
              return <option value={Element}>{Element}</option>;
            })}
          </select>
        </label>
        <div className="flex gap-4 ">
          {links.map((Element) => {
            return <p>{Element.title}</p>;
          })}
        </div>
        <div className="flex gap-4 ">
          {social.map((Element) => (
            <a className="w-[1.5rem] outline rounded-full outline-offset-4 flex justify-center items-center ">
              <img className=" object-cover w-full hover:w-[90%] " src={Element.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
