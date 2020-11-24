import styled from "styled-components";
import { ButtonShadow } from "../../../assets/styled";

const Button = styled(ButtonShadow)`
  width: 50px;
  height: 25px;

  &:hover {
    font-weight: bold;
  }
`;

export { Button };
