const githubRepoRequested = (newRepo) => {
  const { data } = newRepo;
  const { items } = data;
  console.log("actions");
  console.log(items);
  return {
    type: "SET_GITHUB_REPO",
    payload: items,
  };
};

export { githubRepoRequested };
