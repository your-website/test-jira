import githubRepo from "./githubRepo";

const reducer = (state, action) => {
  return {
    githubRepo: githubRepo(state, action),
  };
};

export default reducer;
