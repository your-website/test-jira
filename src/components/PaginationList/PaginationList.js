import React, { Component } from "react";
import { connect } from "react-redux";
import { setGithubRepo, requestGitHubRepo, showMoreRepo } from "../../actions";

import { uuid, compose, paginationPages } from "../../utils";
import withRequestRepo from "../hoc/withRequestRepo";
import { withRouter } from "react-router-dom";
import { Button, Container, Paragraph } from "./style";

class PaginationList extends Component {
  async getNewRepo(count) {
    const {
      requestGitHubRepo,
      setGithubRepo,
      sortOfRepositories,
      newRepositories,
      currentPage: { perPage },
      history,
    } = this.props;

    // prop from withRequestRepo HOC
    await newRepositories(count, perPage, {
      requestGitHubRepo,
      setGithubRepo,
      sortOfRepositories,
    });
    history.push(`/gitlist/${count}`);
  }

  setPage(action) {
    const { showMoreRepo, itemId } = this.props;
    const updatePage = 1;

    // show 10 repositories when person open new page
    showMoreRepo(updatePage);

    // go to the desired page
    if (action === "next") {
      const count = itemId + 1;
      this.getNewRepo(count);
    } else if (action === "prev") {
      const count = itemId - 1;
      this.getNewRepo(count);
    } else {
      this.getNewRepo(action);
    }
  }

  render() {
    const {
      githubRepo: { totalCount },
      itemId,
    } = this.props;
    const maxPage = Math.ceil(totalCount / 30); // Default one page = 30 results.
    const itemPage = itemId;
    const linksPage = paginationPages(itemPage, maxPage);

    const prevButton =
      itemPage === 1 ? null : (
        <Button onClick={() => this.setPage("prev")}>prev</Button>
      );

    const nextButton =
      itemPage > maxPage ? null : (
        <Button onClick={() => this.setPage("next")}>next</Button>
      );

    const moreLinks =
      itemPage < maxPage ? <Paragraph href="">...</Paragraph> : null;

    const renderRepo = linksPage.map((link) => {
      const key = uuid();

      if (link === itemPage) {
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
  setGithubRepo,
  requestGitHubRepo,
  showMoreRepo,
};

export default compose(
  withRequestRepo(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(PaginationList));
