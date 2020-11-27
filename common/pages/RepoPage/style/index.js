import styled from "styled-components";
import { DefaultLink } from "../../../assets/styled";
import { H1 } from "../../../assets/styled";

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

const LinkRepo = styled(DefaultLink)`
  color: #455990;
  transition: color 0.2s ease;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

export { Container, LinkRepo, H1 };
