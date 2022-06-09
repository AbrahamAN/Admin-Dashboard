import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons-bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from " ../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      ThemeSettings
    </div>
  );
};

export default ThemeSettings;
