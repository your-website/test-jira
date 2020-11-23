import React from "react";
import { connect } from "react-redux";
import { Container, ButtonShow } from "./styles_GitList";

import GitItem from "../GitItem";
import PaginationList from "../PaginationList";
import GithubService from "../../services/GithubService";
import { showMoreRepo, loadingData } from "../../actions";

const GitList = ({ githubRepo, showMoreRepo, loadingData }) => {
  const { data, loading, showMore } = githubRepo;
  console.log(showMore);

  async function test() {
    loadingData();
    if (showMore === 3) {
      return;
    }
    const count = showMore + 1;
    showMoreRepo(count);
  }

  const Button =
    showMore < 3 ? <ButtonShow onClick={test}>Show more</ButtonShow> : null;

  return (
    <div>
      <Container className="gitList">
        <h3>GitList</h3>
        <GitItem countRepo={showMore} loading={loading} githubRepoData={data} />
        {Button}
        <PaginationList />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  showMoreRepo,
  loadingData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GitList);
