import React, { Component } from "react";
import { connect } from "react-redux";
import { showMoreRepo, loadingData } from "../../actions";

import { Container, ButtonShow } from "./style";

import GitItem from "../GitItem";
import PaginationList from "../PaginationList";

class GitList extends Component {
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

  render() {
    const { githubRepo } = this.props;
    const { data, loading, showMore } = githubRepo;
    // showMore - how many results to show. max 30 repPage

    const Button =
      showMore < 3 ? (
        <ButtonShow
          onClick={() => this.showOrHideDataInPage(3, showMore + 1, showMore)}
        >
          Show more
        </ButtonShow>
      ) : (
        <ButtonShow
          onClick={() => this.showOrHideDataInPage(1, showMore - 2, showMore)}
        >
          Hide
        </ButtonShow>
      );

    return (
      <div>
        <Container className="gitList">
          <h2>GitHub List Repositories</h2>
          <p>
            Sort of: <span>default</span>
            <span>stars</span>
          </p>
          <GitItem countRepo={showMore} loading={loading} data={data} />
          {Button}
          <PaginationList />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(GitList);
