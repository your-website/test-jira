import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import { compose } from "../../utils";
import withRequestRepo from "../hoc/withRequestRepo";
import { withRouter } from "react-router-dom";

import GitItem from '../GitItem'
import PaginationList from '../PaginationList'

import { Container, ButtonShow, Paragraph, Span } from "./style";

const GitList = ({ repositories, page, setPageResultsHtml, setLoadingPage, perPageResults, pageId, setRepo, requestNewRepositories }) => {
  const [sortOfRep, setSortOfRep] = useState(null)
  const { items } = repositories;
  const { loading, pageResultsHtml } = page;

  // maxValue no more than 30
  function showOrHideDataInPage(maxValue, value, currentValue) {
    // spinner if data loading
    setLoadingPage(true);
    if (currentValue === maxValue) {
      return;
    }
    // if value: 1 - show 10 results in page
    // if value: 2 - show 20 results in page
    // if value: 3 - show 30 results in page
    setPageResultsHtml(value);
    setLoadingPage(false);
  }

  async function sortRepo(e) {
    const value = e.target.textContent;

    if (value === "default") {
      setSortOfRep(null)
    } else setSortOfRep(value);

    // prop from withRequestRepo HOC
    requestNewRepositories(pageId, perPageResults, {
      setLoadingPage,
      setRepo,
      sortOfRep: value,
    });
  };

  const showResults = items.slice(0, pageResultsHtml * 10);
  const moreResults = pageResultsHtml + 1;
  const hideResults = pageResultsHtml - 2;

  const Button =
    pageResultsHtml < 3 ? (
      <ButtonShow
        onClick={() => showOrHideDataInPage(3, moreResults, pageResultsHtml)}
      >
        Show more
      </ButtonShow>
    ) : (
        <ButtonShow
          onClick={() => showOrHideDataInPage(1, hideResults, pageResultsHtml)}
        >
          Hide
        </ButtonShow>
      );

  return (
    <Container className="gitList">
      <h2>GitHub List Repositories</h2>
      <Paragraph>
        Sort of:{" "}
        <Span
          className={sortOfRep === null ? "active" : null}
          onClick={sortRepo}
        >
          default
            </Span>{" "}
        <Span
          className={sortOfRep ? "active" : null}
          onClick={sortRepo}
        >
          stars
            </Span>
      </Paragraph>
      <GitItem loading={loading} data={showResults} />
      {Button}
      <PaginationList
        pageId={pageId}
        sortOfRep={sortOfRep}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  page: state.page
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch)
}

export default compose(
  withRequestRepo(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(GitList));
