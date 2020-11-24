import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 90px;
  background: rgb(11, 69, 70);
  background: linear-gradient(
    45deg,
    rgba(11, 69, 70, 1) 0%,
    rgba(144, 196, 235, 1) 100%
  );
  padding: 0 20px;

  @media screen and (max-width: 500px) {
    height: 125px;
  }
`;

export { Nav };
