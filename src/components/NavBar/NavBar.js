import React, { useState } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
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
import GithubService from "../../services/GithubService";

const NavBar = ({ githubRepo }) => {
  const [menu, setMenu] = useState(true);
  const [display, setDisplay] = useState(true);

  async function test() {
    const test = await GithubService.getRepositories();
    console.log(test);
  }

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
      {/* {githubRepo.name} */}
      {/* <button onClick={test}>Click</button> */}
      <ContainerBurgerMenu className="ContainerBurgerMenu" onClick={openMenu}>
        <BurgerMenu menu={menu} />
      </ContainerBurgerMenu>
    </Nav>
  );
};

const mapStateToProps = ({ githubRepo }) => {
  return githubRepo;
};

export default connect(mapStateToProps)(NavBar);
