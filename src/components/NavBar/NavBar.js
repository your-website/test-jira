import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const NavBar = ({ githubRepo }) => {
  return (
    <div>
      <h1>hello</h1>
      {githubRepo}
    </div>
  );
};

const mapStateToProps = ({ githubRepo }) => {
  return githubRepo;
};

export default connect(mapStateToProps)(NavBar);
