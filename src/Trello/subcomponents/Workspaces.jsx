import React, { useState } from "react";
import { workspaces } from "../constants/navbar";

export const Workspaces = ({ drop, index }) => {

  if (drop && index === 0) {
    if (workspaces.length > 0) {
    }
    return (
      <div className="absolute top-[110%] left-[130px] p-2 shadow  broder border-gray border-[1px] text-[0.9rem] max-w-[255px]">
        <div className="bg-white text-darkgray  flex flex-col gap-2 ">
          <button
            className="text-start hover:bg-gray p-1 rounded-[5px]"
          >
            + Create a Workspace
          </button>
          <p className="">
            A workspace is a group of boards and people you can use to organize
            your work.
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
