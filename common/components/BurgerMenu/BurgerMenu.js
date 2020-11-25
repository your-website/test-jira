import React from "react";
import { MenuBtn, Span } from "./style";

const BurgerMenu = ({ menu }) => {
  return (
    <MenuBtn className={menu ? "menu-btn menu-btn_active" : "menu-btn"}>
      <Span className={menu ? "active" : null}></Span>
    </MenuBtn>
  );
};

export default BurgerMenu;
