import React from 'react'
import { useEffect,useRef } from 'react';
import { createPortal } from 'react-dom';

const Model = ({children}) => {
  console.log(document.getElementById('model')) ; 
  const elRef = useRef(null) ; 
  if(!elRef.current) {
    elRef.current = document.createElement('div') ; 
  } 

  useEffect(()=> {
    const modelRoot = document.getElementById('model') ; 
    modelRoot.appendChild(elRef.current) ; 
    return () => modelRoot.removeChild(elRef.current) ; 
  }, [])
  return createPortal(
    <div className="model " >
      {children}
    </div>,
    elRef.current
  ); 
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
