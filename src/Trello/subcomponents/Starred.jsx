import React from "react";
import { starred } from "../constants/navbar";
import starredimage from "../../assets/starred.svg";

const Starred = ({ drop, index }) => {
  if (drop && index === 2) {
    if (starred.length > 0) {
    }
    return (
      <div className="absolute top-[110%] left-[353px] p-2 shadow  broder border-gray border-[1px] text-[0.9rem] max-w-[255px]">
        <div className="flex flex-col gap-2">
          <img src={starredimage} />
          <p className="text-darkgray">Star important boards to access them quickly and easily.</p>
        </div>
      </div>
    );
  }
};

export default Starred;
