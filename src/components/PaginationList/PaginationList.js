import React from "react";
import { connect } from "react-redux";

import { Container, Button, Link } from "./styles_Pagination";

const PaginationList = ({ currentPage }) => {
  const { page } = currentPage;

  const moreLinks = <Link href="">...</Link>;

  const linksPage = [];

  for (let i = page; i < page + 5; i++) {
    linksPage.push(i);
  }

  console.log(linksPage);

  return (
    <Container>
      <Button>prev</Button>
      {linksPage.map((link) => {
        return (
          <Link key={link} href="">
            {link}
          </Link>
        );
      })}
      {moreLinks}
      <Button>next</Button>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(PaginationList);
