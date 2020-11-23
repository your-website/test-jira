const githubRepo = (state, action) => {
  if (state === undefined) {
    return {
      githubRepo: "hello",
    };
  }

  switch (action.type) {
    case "ADD_REPO":
      return {
        githubRepo: action.payload,
      };

    default:
      return state.githubRepo;
  }
};

export default githubRepo;
