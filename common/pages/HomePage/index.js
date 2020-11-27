import React from "react";

import styled from "styled-components";
import { H1 } from "../../assets/styled";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 74vh;
  margin-bottom: 30px;
  @media screen and (max-width: 400px) {
    padding: 0 2px;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <H1>Home Page</H1>
    </Container>
  );
};

export default HomePage;
