import styled from "styled-components";

const Img = styled.img`
  width: 80px;
  height: auto;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 120px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  @media screen and (max-width: 560px) {
    width: 60px;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export { Img };
