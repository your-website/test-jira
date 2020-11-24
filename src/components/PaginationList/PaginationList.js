import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setGithubRepo,
  requestGitHubRepo,
  showMoreRepo,
} from "../../actions";

import GithubService from "../../services/GithubService";

import { Button, Container, Paragraph } from "./style";

const PaginationList = ({
  currentPage,
  githubRepo,
  setCurrentPage,
  setGithubRepo,
  requestGitHubRepo,
  showMoreRepo,
}) => {
  const { page, perPage } = currentPage;
  const { totalCount } = githubRepo;

  // Default one page = 30 results.
  const maxPage = totalCount / 30;

  const linksPage = [];

  //
  if (page >= 3) {
    for (let i = page - 2; i < page + 3; i++) {
      linksPage.push(i);
    }
  } else {
    for (let i = 1; i < page + 5; i++) {
      linksPage.push(i);
    }
  }

  async function funcData(page, perPage) {
    requestGitHubRepo();
    const data = await GithubService.getRepositories(page, perPage);
    console.log(data);
    setGithubRepo(data);
  }

  function setPage(action) {
    const updatePage = 1;
    showMoreRepo(updatePage);

    if (action === "next") {
      let count = page + 1;
      setCurrentPage(count);
      funcData(count, perPage);
    } else if (action === "prev") {
      let count = page - 1;
      setCurrentPage(count);
      funcData(count, perPage);
    } else {
      setCurrentPage(action);
      funcData(action, perPage);
    }
  }

  const prevButton =
    page === 1 ? null : <Button onClick={() => setPage("prev")}>prev</Button>;

  const nextButton =
    page === maxPage ? null : (
      <Button onClick={() => setPage("next")}>next</Button>
    );

  const moreLinks = page < maxPage ? <Paragraph href="">...</Paragraph> : null;

  return (
    <Container>
      {prevButton}
      {linksPage.map((link) => {
        if (link === page) {
          return (
            <Paragraph
              style={{ textDecoration: "underline", color: "blue" }}
              onClick={() => setPage(link)}
              key={link}
            >
              {link}
            </Paragraph>
          );
        }
        return (
          <Paragraph onClick={() => setPage(link)} key={link}>
            {link}
          </Paragraph>
        );
      })}
      {moreLinks}
      {nextButton}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  setCurrentPage,
  setGithubRepo,
  requestGitHubRepo,
  showMoreRepo,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList);
