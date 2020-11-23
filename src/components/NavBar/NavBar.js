import React, { useState } from "react";
import {
  Nav,
  Logo,
  Li,
  Link,
  Ul,
  LinkLogo,
  Button,
  Container,
  ContainerBurgerMenu,
} from "./styles_NavBar";

import logo from "../../static/logo.svg";
import BurgerMenu from "../BurgerMenu";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const [display, setDisplay] = useState(true);

  function openMenu() {
    setMenu(!menu);
    setDisplay(!display);
  }

  return (
    <Nav className="nav">
      <LinkLogo href="">
        <Logo src={logo} alt="" />
      </LinkLogo>
      <Container
        className="container"
        asd
        style={{ transform: display ? "translateX(100%)" : "translateX(0)" }}
      >
        <Ul>
          <Li>
            <Link href="">Home</Link>
          </Li>
          <Li>
            <Link href="">GitHub List</Link>
          </Li>
        </Ul>
        <Button>Login</Button>
      </Container>
      <ContainerBurgerMenu className="ContainerBurgerMenu" onClick={openMenu}>
        <BurgerMenu menu={menu} />
      </ContainerBurgerMenu>
    </Nav>
  );
};

export default NavBar;
