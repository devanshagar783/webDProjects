import React, { useContext } from "react";
import { ColorContext } from "../context/color-context";

const ComponentB = () => {
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;

  return (
    <>
      <div
        style={{
          backgroundColor: selectedColor,
          width: "100%",
          height: 200,
        }}
      ></div>
      <h3>selectedColor: {selectedColor}</h3>
      <button
        onClick={() => {
          onColorChange("blue");
        }}
      >
        chnage to blue
      </button>
    </>
  );
};

export default ComponentB;
