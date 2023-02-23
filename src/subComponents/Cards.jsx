import React from "react";

const Cards = ({content}) => {
  const colors = [
    "#fff8fd",
    "rgb(241, 253, 247)",
    "rgb(255, 245, 242)",
    "rgb(238, 245, 255)",
    "rgb(242, 253, 255)",
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {content.map((Element, index) => (
          <a
            key={index}
            className="col-span-1 flex flex-col gap-2  rounded-lg p-3 hover:bg-gray "
          >
            <div className="flex gap-1">
              <span className="material-symbols-outlined">{Element.icon}</span>
              <p className="font-normal">{Element.title}</p>
            </div>
            <p className="font-thin">{Element.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
