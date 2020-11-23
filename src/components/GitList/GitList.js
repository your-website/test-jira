import React from "react";
import { connect } from "react-redux";
import { Container } from "./styles_GitList";

import GitItem from "../GitItem";
import PaginationList from "../PaginationList";

const GitList = ({ githubRepo }) => {
  return (
    <Container className="gitList">
      <h3>GitList</h3>
      <GitItem githubRepo={githubRepo} />
      <PaginationList />
    </Container>
  );
};

const mapStateToProps = ({ githubRepo }) => {
  return githubRepo;
};

export default connect(mapStateToProps)(GitList);
