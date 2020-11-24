import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setGithubRepo,
  requestGitHubRepo,
  showMoreRepo,
} from "../../actions";

import { uuid, compose, paginationPages } from "../../utils";
import withRequestRepo from "../hoc/withRequestRepo";

import { Button, Container, Paragraph } from "./style";

class PaginationList extends Component {
  getNewRepo(count) {
    const {
      requestGitHubRepo,
      setGithubRepo,
      sortOfRepositories,
      newRepositories,
      currentPage: { perPage },
    } = this.props;

    // prop from withRequestRepo HOC
    newRepositories(count, perPage, {
      requestGitHubRepo,
      setGithubRepo,
      sortOfRepositories,
    });
  }

  setPage(action) {
    const {
      showMoreRepo,
      setCurrentPage,
      currentPage: { page },
    } = this.props;
    const updatePage = 1;

    // show 10 repositories when person open new page
    showMoreRepo(updatePage);

    // go to the desired page
    if (action === "next") {
      let count = page + 1;
      setCurrentPage(count);
      this.getNewRepo(count);
    } else if (action === "prev") {
      let count = page - 1;
      setCurrentPage(count);
      this.getNewRepo(count);
    } else {
      setCurrentPage(action);
      this.getNewRepo(action);
    }
  }

  render() {
    const {
      currentPage: { page },
      githubRepo: { totalCount },
    } = this.props;
    const maxPage = Math.ceil(totalCount / 30); // Default one page = 30 results.
    const linksPage = paginationPages(page, maxPage);

    const prevButton =
      page === 1 ? null : (
        <Button onClick={() => this.setPage("prev")}>prev</Button>
      );

    const nextButton =
      page > maxPage ? null : (
        <Button onClick={() => this.setPage("next")}>next</Button>
      );

    const moreLinks =
      page < maxPage ? <Paragraph href="">...</Paragraph> : null;

    const renderRepo = linksPage.map((link) => {
      const key = uuid();

      if (link === page) {
        return (
          <Paragraph
            style={{ textDecoration: "underline", color: "blue" }}
            onClick={() => this.setPage(link)}
            key={key}
          >
            {link}
          </Paragraph>
        );
      }
      return (
        <Paragraph onClick={() => this.setPage(link)} key={key}>
          {link}
        </Paragraph>
      );
    });

    return (
      <Container>
        {prevButton}
        {renderRepo}
        {moreLinks}
        {nextButton}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  setCurrentPage,
  setGithubRepo,
  requestGitHubRepo,
  showMoreRepo,
};

export default compose(
  withRequestRepo(),
  connect(mapStateToProps, mapDispatchToProps)
)(PaginationList);
