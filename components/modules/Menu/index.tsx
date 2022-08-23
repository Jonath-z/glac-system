import React from "react";
import { VMenu, VSetting } from "../_modules/vectors";

const Menu = () => {
  return (
    <div className="text-white flex justify-between">
      <VMenu className="text-2xl" />
      <VSetting className="text-2xl" />
    </div>
  );
};

export default Menu;
