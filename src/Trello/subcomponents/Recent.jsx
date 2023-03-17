import React from "react";
import { recent } from "../constants/navbar";
import illustration from "../../assets/trello/graphics/recent.svg";

export const Recent = ({ drop, index }) => {
  if (drop && index === 1) {
    if (recent.length > 0) {
    }
    return (
      <div className="max-w-[255px] shadow  broder border-gray border-[1px] p-2 absolute top-[110%] left-[268px]">
        <div className="gap-2 flex flex-col">
          <img src={illustration} />
          <p className="text-darkgray">You'll find the boards you've recently viewed here.</p>
        </div>
      </div>
    );
  }
};
