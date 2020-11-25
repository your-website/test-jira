import React from "react";
import { Container, LinkRepo } from './style'

const HomePage = () => {
  return (
    <Container>
      <h2>Search of GitHub API:</h2>
      <LinkRepo className="router_link" to="/repositories/1">Click here to start searching for repositories</LinkRepo>
    </Container>
  );
};

export default HomePage;
