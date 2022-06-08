import React from "react";

const Button = ({ text, bgColor, color, borderRadius, size }) => {
  return;
  <button
    type="button"
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={`text-${size}`}
  ></button>;
};

export default Button;
