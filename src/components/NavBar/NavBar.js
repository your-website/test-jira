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
    <div>
      <h1>hello</h1>
      {githubRepo.id}
      <button onClick={test}>Click</button>
    </div>
  );
};

const mapStateToProps = ({ githubRepo }) => {
  return githubRepo;
};

export default connect(mapStateToProps)(NavBar);
