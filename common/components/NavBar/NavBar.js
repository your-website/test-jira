import React, { useState } from "react";
import {
  Nav,
  Container,
  ContainerBurgerMenu,
  Button,
  NavLink,
  Logo,
  Li,
  Ul,
} from "./style";

import BurgerMenu from "../BurgerMenu";

const NavBar = () => {
  const [closeMenu, setCloeMenu] = useState(true)

  function toggleMenu() {
    setCloeMenu(!closeMenu)
  };

  return (
    <Nav className="nav">

      <NavLink to="/">
        <p>logo</p>
      </NavLink>

      <Container className={closeMenu ? "container" : "container active"}>
        <Ul>
          <Li>
            <NavLink className="router_link" to="/">
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink className="router_link" to="/api">
              GitHub List
            </NavLink>
          </Li>
        </Ul>
        <Button>Login</Button>
      </Container>

      <ContainerBurgerMenu
        className="ContainerBurgerMenu"
        onClick={toggleMenu}
      >
        <BurgerMenu menu={closeMenu} />
      </ContainerBurgerMenu>
    </Nav>
  );
}

export default NavBar;
