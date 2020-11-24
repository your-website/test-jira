import styled from "styled-components";
import { ButtonShadow } from "../../../assets/styled";

const Button = styled(ButtonShadow)`
  margin-left: auto;
  height: 36px;
  width: 85px;
  background-color: #fff;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export { Button };
