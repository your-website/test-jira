import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setGithubRepo,
  requestGitHubRepo,
  showMoreRepo,
} from "../../actions";

import GithubService from "../../services/GithubService";
import { uuid } from "../../utils";

import { Button, Container, Paragraph } from "./style";
// = ({
//   currentPage,
//   githubRepo,
//   setCurrentPage,
//   setGithubRepo,
//   requestGitHubRepo,
//   showMoreRepo,
//   sortOfRepositories,
// })
class PaginationList extends Component {
  async newRepositories(page, perPage) {
    const { requestGitHubRepo, setGithubRepo, sortOfRepositories } = this.props;
    requestGitHubRepo();
    const data = await GithubService.getRepositories(
      page,
      perPage,
      sortOfRepositories
    );
    setGithubRepo(data);
  }

  paginationPages(page, maxPage) {
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

  setPage(action) {
    const { showMoreRepo, setCurrentPage } = this.props;
    const { page, perPage } = this.props.currentPage.page;
    const updatePage = 1;

    // show 10 repositories when person open new page
    showMoreRepo(updatePage);

    // go to the desired page
    if (action === "next") {
      let count = page + 1;
      setCurrentPage(count);
      this.newRepositories(count, perPage);
    } else if (action === "prev") {
      let count = page - 1;
      setCurrentPage(count);
      this.newRepositories(count, perPage);
    } else {
      setCurrentPage(action);
      this.newRepositories(action, perPage);
    }
  }

  render() {
    const { page } = this.props.currentPage;
    const { totalCount } = this.props.githubRepo;
    const maxPage = Math.ceil(totalCount / 30);
    const linksPage = this.paginationPages(page, maxPage);

    // Default one page = 30 results.

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

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList);
