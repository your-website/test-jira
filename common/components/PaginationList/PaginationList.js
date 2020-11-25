import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import { uuid, compose, paginationPages } from "../../utils";
import withRequestRepo from "../hoc/withRequestRepo";
import { withRouter } from "react-router-dom";
import { Button, Container, Paragraph } from "./style";

const PaginationList = ({ page, repositories, requestNewRepositories, setPageResultsHtml, setLoadingPage, setRepo, sortOfRep, pageId, history }) => {
  const { perPageResults } = page
  const { total_count } = repositories

  async function getNewRepo(count) {
    // prop from withRequestRepo HOC
    await requestNewRepositories(count, perPageResults, {
      setLoadingPage,
      setRepo,
      sortOfRep
    });
    history.push(`/repositories/${count}`);
  }

  function linkToNewPage(action) {
    // show 10 repositories when person open new page
    setPageResultsHtml(1);

    // go to the desired page
    if (action === "next") {
      const count = pageId + 1;
      getNewRepo(count);
    } else if (action === "prev") {
      const count = pageId - 1;
      getNewRepo(count);
    } else {
      getNewRepo(action);
    }
  }

  const maxPage = Math.ceil(total_count / 30); // Default one page = 30 results.
  const linksPage = paginationPages(pageId, maxPage);

  const prevButton =
    pageId === 1 ? null : (
      <Button onClick={() => linkToNewPage("prev")}>prev</Button>
    );

  const nextButton =
    pageId > maxPage ? null : (
      <Button onClick={() => linkToNewPage("next")}>next</Button>
    );

  const moreLinks =
    pageId < maxPage ? <Paragraph href="">...</Paragraph> : null;

  const renderLinks = linksPage.map((link) => {
    const key = uuid();

    if (link === pageId) {
      return (
        <Paragraph
          style={{ textDecoration: "underline", color: "blue" }}
          onClick={() => linkToNewPage(link)}
          key={key}
        >
          {link}
        </Paragraph>
      );
    }
    return (
      <Paragraph onClick={() => linkToNewPage(link)} key={key}>
        {link}
      </Paragraph>
    );
  });

  return (
    <Container>
      {prevButton}
      {renderLinks}
      {moreLinks}
      {nextButton}
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
)(withRouter(PaginationList));

