import React from "react";
import templateimage from "../../assets/template.svg";

const Templates = ({ drop, index }) => {
  if (drop && index === 3) {
    return (
      <div className="absolute top-[110%] left-[458px] p-2 shadow  broder border-gray border-[1px] text-[0.9rem] max-w-[255px]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <img src={templateimage} />
            <p className="text-darkgray">See hundreds of templates from the Trello community</p>
          </div>
          <a className="bg-gray p-2 text-center">Explore templates</a>
        </div>
      </div>
    );
  }
};

export default Templates;
