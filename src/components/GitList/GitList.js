import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showMoreRepo,
  loadingData,
  requestGitHubRepo,
  setGithubRepo,
} from "../../actions";

import { Container, ButtonShow, Paragraph, Span } from "./style";
import { compose } from "../../utils";
import withRequestRepo from "../hoc/withRequestRepo";

import GitItem from "../GitItem";
import PaginationList from "../PaginationList";

class GitList extends Component {
  state = {
    sortOfRepositories: null,
  };

  // maxValue no more than 30
  showOrHideDataInPage(maxValue, value, currentValue) {
    const { loadingData, showMoreRepo } = this.props;
    // spinner if data loading
    loadingData();
    if (currentValue === maxValue) {
      return;
    }
    // if value: 1 - show 10 results in page
    // if value: 2 - show 20 results in page
    // if value: 3 - show 30 results in page
    showMoreRepo(value);
  }

  sortRepo = async (e) => {
    const {
      currentPage,
      setGithubRepo,
      requestGitHubRepo,
      newRepositories,
    } = this.props;

    const value = e.target.textContent;

    if (value === "default") {
      this.setState({ sortOfRepositories: null });
    } else this.setState({ sortOfRepositories: value });

    // prop from withRequestRepo HOC
    newRepositories(currentPage.page, currentPage.perPage, {
      requestGitHubRepo,
      setGithubRepo,
      sortOfRepositories: value,
    });
  };

  render() {
    const { sortOfRepositories } = this.state;
    const {
      githubRepo: { data, loading, showMore },
    } = this.props;

    // showMore - how many results to show. max 30 repPage
    const showResults = data.slice(0, showMore * 10);
    const moreResults = showMore + 1;
    const hideResults = showMore - 2;

    const Button =
      showMore < 3 ? (
        <ButtonShow
          onClick={() => this.showOrHideDataInPage(3, moreResults, showMore)}
        >
          Show more
        </ButtonShow>
      ) : (
        <ButtonShow
          onClick={() => this.showOrHideDataInPage(1, hideResults, showMore)}
        >
          Hide
        </ButtonShow>
      );

    return (
      <div>
        <Container className="gitList">
          <h2>GitHub List Repositories</h2>
          <Paragraph>
            Sort of:{" "}
            <Span
              className={sortOfRepositories === null ? "active" : null}
              onClick={this.sortRepo}
            >
              default
            </Span>{" "}
            <Span
              className={sortOfRepositories ? "active" : null}
              onClick={this.sortRepo}
            >
              stars
            </Span>
          </Paragraph>
          <GitItem loading={loading} data={showResults} />
          {Button}
          <PaginationList sortOfRepositories={sortOfRepositories} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  showMoreRepo,
  loadingData,
  requestGitHubRepo,
  setGithubRepo,
};

export default compose(
  withRequestRepo(),
  connect(mapStateToProps, mapDispatchToProps)
)(GitList);
