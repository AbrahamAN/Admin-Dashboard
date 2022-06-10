import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ text, bgColor, color, borderRadius, size }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      onClick={() => setIsClicked(initialState)}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
