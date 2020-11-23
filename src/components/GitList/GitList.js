import React from "react";
import { connect } from "react-redux";
import { Container, ButtonShow } from "./styles_GitList";

import GitItem from "../GitItem";
import PaginationList from "../PaginationList";
import GithubService from "../../services/GithubService";
import { githubRepoRequested, requestGutHubRepo } from "../../actions";

const GitList = ({
  currentPage,
  githubRepo,
  githubRepoRequested,
  requestGutHubRepo,
}) => {
  const { page, perPage } = currentPage;
  const { data, loading } = githubRepo;
  async function test() {
    requestGutHubRepo();
    const data = await GithubService.getRepositories(page, perPage);
    githubRepoRequested(data);
  }

  return (
    <div>
      <Container className="gitList">
        <h3>GitList</h3>
        <GitItem loading={loading} githubRepoData={data} />
        <ButtonShow onClick={test}>Show more</ButtonShow>
        <PaginationList />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  githubRepoRequested,
  requestGutHubRepo,
};

export default connect(mapStateToProps, mapDispatchToProps)(GitList);
