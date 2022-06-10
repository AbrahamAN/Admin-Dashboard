import React from "react";
import { MdOutLineCancel } from "react-icons/md";
import { AiOutLinePlus, AiOutLineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0"></div>
  );
};

export default Cart;
