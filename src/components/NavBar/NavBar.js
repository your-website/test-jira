import React, { useState } from "react";

import {
  Nav,
  Container,
  ContainerBurgerMenu,
  ContainerMobile,
  Button,
  Link,
  Logo,
  Li,
  Ul,
} from "./style";

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
      <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
        <Logo src={logo} alt="" />
      </a>

      <Container className="container">
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

      <ContainerMobile
        className="containerMobile"
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
      </ContainerMobile>

      <ContainerBurgerMenu className="ContainerBurgerMenu" onClick={openMenu}>
        <BurgerMenu menu={menu} />
      </ContainerBurgerMenu>
    </Nav>
  );
};

export default NavBar;
