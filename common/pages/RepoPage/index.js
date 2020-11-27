import React from "react";
import { Container, LinkRepo, H1 } from "./style";

const HomePage = () => {
  return (
    <Container>
      <H1>Search of GitHub API:</H1>
      <LinkRepo className="router_link" to="/repositories/1">
        Click here to start searching for repositories
      </LinkRepo>
    </Container>
  );
};

export default HomePage;
