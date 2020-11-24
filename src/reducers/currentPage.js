const currentPage = (state, action) => {
  if (state === undefined) {
    return {
      perPage: 30,
    };
  }

  switch (action.type) {
    default:
      return state.currentPage;
  }
};

export default currentPage;
