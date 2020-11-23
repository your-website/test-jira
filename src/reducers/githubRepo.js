const githubRepo = (state, action) => {
  if (state === undefined) {
    return {
      githubRepo: {
        id: 876667,
        forks: 161,
        name: "instant.page",
        size: 51,
        watchers: 32,
        owner: {
          avatar_url: "https://avatars1.githubusercontent.com/u/47399700?v=4",
          login: "instantpage",
        },
      },
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
