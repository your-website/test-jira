import React from "react";
import { connect } from "react-redux";
import GitItem from "../GitItem";
import { Container } from "./styles_GitList";

const GitList = ({ githubRepo }) => {
  console.log("list: ");
  console.log(githubRepo);

  return (
    <Container className="gitList">
      <h3>GitList</h3>
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
      <GitItem githubRepo={githubRepo} />
    </Container>
  );
};

const mapStateToProps = ({ githubRepo }) => {
  return githubRepo;
};

export default connect(mapStateToProps)(GitList);
