import React from "react";
import { connect } from "react-redux";
import { Container } from "./styles_GitList";

import GitItem from "../GitItem";
import PaginationList from "../PaginationList";
import GithubService from "../../services/GithubService";
import { githubRepoRequested, requestGutHubRepo } from "../../actions";

const GitList = ({
  githubRepo,
  githubRepoRequested,
  requestGutHubRepo,
  loading,
}) => {
  async function test() {
    requestGutHubRepo();
    const test = await GithubService.getRepositories();
    githubRepoRequested(test);
  }

  return (
    <div>
      <Container className="gitList">
        <h3>GitList</h3>
        <GitItem loading={loading} githubRepo={githubRepo} />
        <PaginationList />
      </Container>
      <button onClick={test}>Click</button>
    </div>
  );
};

const mapStateToProps = ({ githubRepo, loading }) => {
  return { githubRepo, loading };
};

const mapDispatchToProps = {
  githubRepoRequested,
  requestGutHubRepo,
};

export default connect(mapStateToProps, mapDispatchToProps)(GitList);
