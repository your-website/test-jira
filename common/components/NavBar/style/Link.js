import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 500px) {
    font-size: calc(10px + 1vmin);
  }
`;

export { NavLink };
