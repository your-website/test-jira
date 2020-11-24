const githubRepo = (state, action) => {
  if (state === undefined) {
    return {
      loading: false,
      showMore: 1,
      totalCount: 12,
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
        data: action.payload.items,
        showMore: state.githubRepo.showMore,
        totalCount: action.payload.total_count,
      };

    case "REQUEST_GITHUB_REPO":
      return {
        loading: true,
        data: state.githubRepo.data,
        showMore: state.githubRepo.showMore,
        totalCount: state.githubRepo.totalCount,
      };

    case "SHOW_MORE_REPO":
      return {
        loading: false,
        data: state.githubRepo.data,
        showMore: action.payload,
        totalCount: state.githubRepo.totalCount,
      };

    case "LOADING_DATA":
      return {
        loading: true,
        data: state.githubRepo.data,
        showMore: state.githubRepo.showMore,
        totalCount: state.githubRepo.totalCount,
      };

    default:
      return state.githubRepo;
  }
};

export default githubRepo;
