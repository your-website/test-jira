import React, { useState } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { Nav, Logo, Li, Link, Ul, LinkLogo, Button } from "./styles_NavBar";
import logo from "../../static/logo.svg";
import BurgerMenu from "../BurgerMenu";
import GithubService from "../../services/GithubService";

const NavBar = ({ githubRepo }) => {
  const [menu, setMenu] = useState(false);

  async function test() {
    const test = await GithubService.getRepositories();
    console.log(test);
  }

  function openMenu() {
    setMenu(!menu);
  }

  return (
    <Nav className="nav">
      <LinkLogo href="">
        <Logo src={logo} alt="" />
      </LinkLogo>
      <Ul>
        <Li>
          <Link href="">Home</Link>
        </Li>
        <Li>
          <Link href="">GitHub List</Link>
        </Li>
      </Ul>
      <Button>Login</Button>
      {/* {githubRepo.name} */}
      {/* <button onClick={test}>Click</button> */}
      <div onClick={openMenu}>
        <BurgerMenu menu={menu} />
      </div>
    </Nav>
  );
};

const mapStateToProps = ({ githubRepo }) => {
  return githubRepo;
};

export default connect(mapStateToProps)(NavBar);
