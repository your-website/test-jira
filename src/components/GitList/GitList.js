import React from "react";
import { connect } from "react-redux";
import { Container, ButtonShow } from "./styles_GitList";

import GitItem from "../GitItem";
import PaginationList from "../PaginationList";
import GithubService from "../../services/GithubService";
import { setGithubRepo, requestGitHubRepo } from "../../actions";

const GitList = ({
  currentPage,
  githubRepo,
  setGithubRepo,
  requestGitHubRepo,
}) => {
  const { page, perPage } = currentPage;
  const { data, loading } = githubRepo;
  async function test() {
    requestGitHubRepo();
    const data = await GithubService.getRepositories(page, perPage);
    setGithubRepo(data);
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
  setGithubRepo,
  requestGitHubRepo,
};

export default connect(mapStateToProps, mapDispatchToProps)(GitList);
