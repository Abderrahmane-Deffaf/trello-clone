import React from 'react'

const Model = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Model

/* import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Model = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    console.log(document.getElementById("modal"));
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Model; */
