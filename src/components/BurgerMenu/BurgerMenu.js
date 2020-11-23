import React from "react";
import "./styles_BurgerMenu.css";

const BurgerMenu = ({ menu }) => {
  return (
    <div className={menu ? "menu-btn menu-btn_active" : "menu-btn"}>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
