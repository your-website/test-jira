const currentPage = (state, action) => {
  if (state === undefined) {
    return {
      page: 1,
      perPage: 30,
    };
  }

  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        perPage: state.currentPage.perPage,
        page: action.payload,
      };

    default:
      return state.githubRepo;
  }
};

export default currentPage;
