import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setGithubRepo,
  requestGitHubRepo,
} from "../../actions";
import GithubService from "../../services/GithubService";

import { Container, Button, Paragraph } from "./styles_Pagination";

const PaginationList = ({
  currentPage,
  setCurrentPage,
  setGithubRepo,
  requestGitHubRepo,
}) => {
  const { page, perPage } = currentPage;

  const moreLinks = <Paragraph href="">...</Paragraph>;

  const linksPage = [];

  for (let i = page; i < page + 5; i++) {
    linksPage.push(i);
  }

  async function funcData(e, ee) {
    requestGitHubRepo();
    const data = await GithubService.getRepositories(e, ee);
    console.log(data);
    setGithubRepo(data);
  }

  function setPage(action) {
    if (action === "next") {
      let count = page + 1;
      setCurrentPage(count);
      funcData(count, perPage);
    } else if (action === "prev") {
      let count = page - 1;
      setCurrentPage(count);
      funcData(count, perPage);
    } else {
      let count = action;
      setCurrentPage(count);
      funcData(count, perPage);
    }
  }

  const prevButton =
    page === 1 ? null : <Button onClick={() => setPage("prev")}>prev</Button>;

  return (
    <Container>
      {prevButton}
      {linksPage.map((link) => {
        return (
          <Paragraph onClick={() => setPage(link)} key={link}>
            {link}
          </Paragraph>
        );
      })}
      {moreLinks}
      <Button onClick={() => setPage("next")}>next</Button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList);
