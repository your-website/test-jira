import React from "react";
import GithubService from "../../api/apiClient";

const withRequestRepo = () => (Wrapped) => {
  async function requestNewRepositories(page, perPage, actions) {
    const { setLoadingPage, setRepo, sortOfRep } = actions;
    setLoadingPage(true);
    const data = await GithubService.getRepositories(
      page,
      perPage,
      sortOfRep
    );
    const { data: final } = data;
    setRepo(final);
    setLoadingPage(false)
  }

  return (props) => {
    return <Wrapped {...props} requestNewRepositories={requestNewRepositories}></Wrapped>;
  };
};

export default withRequestRepo;
