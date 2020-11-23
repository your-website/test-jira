import githubRepo from "./githubRepo";
import currentPage from "./currentPage";

const reducer = (state, action) => {
  return {
    githubRepo: githubRepo(state, action),
    currentPage: currentPage(state, action),
  };
};

export default reducer;
