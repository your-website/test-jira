const setGithubRepo = (newRepo) => {
  const { data } = newRepo;
  const { items, total_count } = data;
  return {
    type: "SET_GITHUB_REPO",
    payload: { items, total_count },
  };
};

const requestGitHubRepo = () => {
  return {
    type: "REQUEST_GITHUB_REPO",
  };
};

const setCurrentPage = (page) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: page,
  };
};

const showMoreRepo = (show) => {
  return {
    type: "SHOW_MORE_REPO",
    payload: show,
  };
};

const loadingData = () => {
  return {
    type: "LOADING_DATA",
  };
};

export {
  setGithubRepo,
  requestGitHubRepo,
  setCurrentPage,
  showMoreRepo,
  loadingData,
};
