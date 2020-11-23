const githubRepo = (state, action) => {
  if (state === undefined) {
    return {
      loading: false,
      showMore: 1,
      data: [
        {
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
      ],
    };
  }

  switch (action.type) {
    case "SET_GITHUB_REPO":
      return {
        loading: false,
        data: action.payload,
        showMore: state.githubRepo.showMore,
      };

    case "REQUEST_GITHUB_REPO":
      return {
        loading: true,
        data: state.githubRepo.data,
        showMore: state.githubRepo.showMore,
      };

    case "SHOW_MORE_REPO":
      return {
        loading: false,
        data: state.githubRepo.data,
        showMore: action.payload,
      };

    case "LOADING_DATA":
      return {
        loading: true,
        data: state.githubRepo.data,
        showMore: state.githubRepo.showMore,
      };

    default:
      return state.githubRepo;
  }
};

export default githubRepo;
