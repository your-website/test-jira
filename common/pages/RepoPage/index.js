import React from "react";
import styled from "styled-components";
import { DefaultLink } from '../../assets/styled'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 78vh;
  margin-bottom: 30px;
  @media screen and (max-width: 400px) {
    padding: 0 2px;
  }
`;

export { Container };

const HomePage = () => {
  return (
    <Container>
      <DefaultLink className="router_link" to="/repositories/1">click to start searching for repositories</DefaultLink>
    </Container>
  );
};

export default HomePage;
