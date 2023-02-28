import React, { useState } from "react";
import { feedbacks } from "../content/clients";

const Clients = () => {
  let [page, setPage] = useState(0);
  let [widths, setWidths] = useState(["4", "1", "1"]);

  const handleScroll = (direction) => {
    direction === "left"
      ? (document.querySelector(".container").scrollLeft -=
          document.querySelector(".element").clientWidth)
      : (document.querySelector(".container").scrollLeft +=
          document.querySelector(".element").clientWidth);
  };

  const handleClick = () => {
    if (page != +document.querySelector(".element").id) {
      document
        .querySelector(".container")
        .scrollTo(0, document.querySelector(".element").clientTop);
    }
  };

  return (
    <div className="bg-gradient-4">
      <div className="max-w-[1320px] m-auto p-4">
        <div className="flex justify-end gap-3 items-center ">
          <div className="flex gap-2">
            {widths.map((Element) => {
              return (
                <div
                  className={` bg-darkgray h-[10px] rounded-lg`}
                  style={{
                    width: `${Element}rem`,
                  }}
                ></div>
              );
            })}
          </div>
          <div className="flex gap-1">
            <button
              className="skipbtn"
              onClick={() => {
                handleScroll("left");
                page === 0 ? setPage(page) : setPage(--page);
                setWidths(
                  widths.map((element, index) => {
                    return index === page ? "4" : "1";
                  })
                );
              }}
            >
              <span className="material-symbols-outlined">navigate_before</span>
            </button>
            <button
              className="skipbtn"
              onClick={() => {
                handleScroll();
                page >= 2 ? setPage(page) : setPage(++page);
                setWidths(
                  widths.map((element, index) => {
                    return index === page ? "4" : "1";
                  })
                );
              }}
            >
              <span className="material-symbols-outlined">navigate_next</span>
            </button>
          </div>
        </div>
        <div className="flex overflow-hidden container flex-nowrap w-[90%] m-auto  rounded-xl ">
          {feedbacks.map((Element, index) => {
            return (
              <div className="flex min-w-full element rounded-xl box-shadow-2" id={index}>
                <div className=" bg-white basis-[66%] quote-bg p-[2rem] gap-[7rem] flex flex-col justify-between">
                  <div>
                    <p className="text-3xl">{Element.text}</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <hr className="w-[15%]" />
                    <div>
                      <p>{Element.name}</p>
                      <p>{Element.profession}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <img src={Element.logo} />
                      <a className="text-blue underline">Lire témoignage</a>
                    </div>
                  </div>
                </div>
                <div className="text-white basis-[34%] purple-bg p-[2rem] flex flex-col justify-between">
                  <h3 className="text-3xl ">{Element.sidetext}</h3>
                  <a className=" underline">{Element.link}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
