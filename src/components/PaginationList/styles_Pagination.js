import styled from "styled-components";
import { ButtonShadow } from "../../assets/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled(ButtonShadow)`
  width: 50px;
  height: 25px;

  &:hover {
    font-weight: bold;
  }
`;

const Link = styled.a`
  text-decoration: none;
  margin: 0 10px;
  color: #000;
  transition: all 0.2s ease;

  &:hover {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    text-decoration: underline;
  }
`;
export { Container, Button, Link };
