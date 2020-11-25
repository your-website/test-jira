import styled from "styled-components";

const ContainerColumn = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  margin-bottom: 10px;
  background: rgb(156, 177, 193);
  background: linear-gradient(
    45deg,
    rgba(11, 97, 119, 1) 0%,
    rgba(77, 116, 116, 1) 100%
  );

  @media screen and (max-width: 800px) {
    grid-template-columns: 120px repeat(4, 1fr);
    grid-template-rows: 60px 60px;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 60px 1fr 1fr;
    grid-template-rows: 60px;
  }
`;

export { Container, ContainerColumn };
