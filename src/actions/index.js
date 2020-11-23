const githubRepoRequested = (newRepo) => {
  const { data } = newRepo;
  const { items } = data;
  return {
    type: "SET_GITHUB_REPO",
    payload: items,
  };
};

const requestGutHubRepo = () => {
  return {
    type: "REQUEST_GITHUB_REPO",
  };
};

export { githubRepoRequested, requestGutHubRepo };
