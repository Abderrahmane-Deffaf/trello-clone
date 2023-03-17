import React from "react";
import rightarrow from "../../assets/landing/icons/rightarrow.svg";

const Linkcomp = ({ content }) => {
  return (
    <a className="flex gap-1 hover:gap-2 w-fit">
      {content}
      <img src={rightarrow} />
    </a>
  );
};

export default Linkcomp;
