import styled from "styled-components";
import { ButtonRounder } from "../../../assets/styled";

const Button = styled(ButtonRounder)`
  font-size: 17px;
  height: 30px;
  margin-right: 5px;
  width: 120px;
  margin: 0 auto;

  @media screen and (max-width: 400px) {
    width: 90px;
    font-size: 14px;
  }
`;

const ButtonRepo = styled(Button)`
  margin-right: 20px;
  @media screen and (max-width: 800px) {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  @media screen and (max-width: 560px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

const ButtonAbout = styled(Button)`
  display: none;
  @media screen and (max-width: 560px) {
    display: block;
  }
`;

export { ButtonRepo, ButtonAbout };
