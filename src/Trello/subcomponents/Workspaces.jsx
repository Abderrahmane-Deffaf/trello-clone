import React, { useState } from "react";
import { workspaces } from "../constants/navbar";
import Model from "./Model";
import Formmodel from "./Formmodel";

export const Workspaces = ({ drop, index }) => {
  const [showmodel, setShowmodel] = useState(false);

  if (drop && index === 0) {
    if (workspaces.length > 0) {
    }
    return (
      <div className="absolute top-[110%] left-[130px] p-2 shadow  broder border-gray border-[1px] text-[0.9rem] max-w-[255px]">
        <div className="bg-white text-darkgray  flex flex-col gap-2 ">
          <button
            className="text-start hover:bg-gray p-1 rounded-[5px]"
            onClick={() => {
              console.log("hello");
              setShowmodel(true);
            }}
          >
            + Create a Workspace
          </button>
          {showmodel ? (
            <Model >
              <div className="w-[90%] h-[90%] flex relative  bg-white rounded-md" >
                <Formmodel />
                <button className="text-black absolute right-5 top-10" onClick={() => setShowmodel(false)}>
                  close portal
                </button>
              </div>
            </Model>
          ) : null}
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
