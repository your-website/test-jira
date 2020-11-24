import React, { Component } from "react";

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

class NavBar extends Component {
  state = {
    closeMenu: true,
  };

  toggleMenu = () => {
    this.setState((state) => {
      return { closeMenu: !state.closeMenu };
    });
  };

  render() {
    const { closeMenu } = this.state;
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
          style={{
            transform: closeMenu ? "translateX(100%)" : "translateX(0)",
          }}
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

        <ContainerBurgerMenu
          className="ContainerBurgerMenu"
          onClick={this.toggleMenu}
        >
          <BurgerMenu menu={closeMenu} />
        </ContainerBurgerMenu>
      </Nav>
    );
  }
}

export default NavBar;
