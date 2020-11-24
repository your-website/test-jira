import React from "react";
import GithubService from "../../services/GithubService";

const withRequestRepo = () => (Wrapped) => {
  async function newRepositories(page, perPage, actions) {
    const { requestGitHubRepo, setGithubRepo, sortOfRepositories } = actions;
    requestGitHubRepo();
    const data = await GithubService.getRepositories(
      page,
      perPage,
      sortOfRepositories
    );
    setGithubRepo(data);
  }
  return (props) => {
    return <Wrapped {...props} newRepositories={newRepositories}></Wrapped>;
  };
};

export default withRequestRepo;
