import React, { Component } from "react";
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

        <Container className={closeMenu ? "container" : "container active"}>
          <Ul>
            <Li>
              <NavLink className="router_link" to="/">
                Home
              </NavLink>
            </Li>
            <Li>
              <NavLink className="router_link" to="/gitlist/:id">
                GitHub List
              </NavLink>
            </Li>
          </Ul>
          <Button>Login</Button>
        </Container>

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
