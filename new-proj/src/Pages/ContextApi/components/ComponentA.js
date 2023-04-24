import React, { useContext } from "react";
import { ColorContext } from "../context/color-context";

const ComponentA = () => {
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;
  
  return (
    <>
        <h1 style={{color: selectedColor}}>
            hello world
        </h1>
        <button onClick={()=>{onColorChange('green')}}>
            chnage to green
        </button>
        <button onClick={()=>{onColorChange('blue')}}>
            chnage to blue
        </button>
    </>
  );
};

export default ComponentA;
