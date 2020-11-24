function paginationPages(page, maxPage) {
  const linksPage = [];
  // check the maximum number of pages received from API
  if (page >= 3 && page < maxPage) {
    for (let i = page - 2; i < page + 3; i++) {
      linksPage.push(i);
    }
  } else if (page + 1 > maxPage) {
    for (let i = 1; i < page + 1; i++) {
      linksPage.push(i);
    }
  } else if (page + 2 > maxPage) {
    for (let i = 1; i < page + 2; i++) {
      linksPage.push(i);
    }
  } else if (page + 3 > maxPage) {
    for (let i = 1; i < page + 3; i++) {
      linksPage.push(i);
    }
  } else if (page + 4 > maxPage) {
    for (let i = 1; i < page + 4; i++) {
      linksPage.push(i);
    }
  } else {
    for (let i = 1; i < page + 5; i++) {
      linksPage.push(i);
    }
  }
  return linksPage;
}

export { paginationPages };
