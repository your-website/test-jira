import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import GithubService from "../../services/GithubService";

const NavBar = ({ githubRepo }) => {
  async function test() {
    const test = await GithubService.getRepositories();
    console.log(test);
  }
  return (
    <nav className="nav">
      <h1>hello</h1>
      {githubRepo.name}
      <button onClick={test}>Click</button>
    </nav>
  );
};

const mapStateToProps = ({ githubRepo }) => {
  return githubRepo;
};

export default connect(mapStateToProps)(NavBar);
