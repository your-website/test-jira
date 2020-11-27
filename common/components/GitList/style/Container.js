import styled from "styled-components";

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

export { Container };
