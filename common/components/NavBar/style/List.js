import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  margin-left: 1rem;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const Ul = styled.ul`
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 0;
  }
`;

export { Li, Ul };
