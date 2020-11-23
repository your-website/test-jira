import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
import { githubRepoRequested } from "../../actions";
const NavBar = ({ githubRepo, githubRepoRequested }) => {
  const [menu, setMenu] = useState(true);
  const [display, setDisplay] = useState(true);

  async function test() {
    const test = await GithubService.getRepositories();
    console.log(test);
    githubRepoRequested(test);
    console.log(githubRepo);
  }

  function openMenu() {
    console.log(menu);
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
      {/* {githubRepo.name} */}
      <button onClick={test}>Click</button>
      <ContainerBurgerMenu className="ContainerBurgerMenu" onClick={openMenu}>
        <BurgerMenu menu={menu} />
      </ContainerBurgerMenu>
    </Nav>
  );
};

const mapStateToProps = ({ githubRepo }) => {
  return githubRepo;
};

const mapDispatchToProps = {
  githubRepoRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
