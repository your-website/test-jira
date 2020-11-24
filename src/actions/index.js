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

export { setGithubRepo, requestGitHubRepo, showMoreRepo, loadingData };
