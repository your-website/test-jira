import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-left: 1rem;

  &:hover {
    border-bottom: 2px solid white;
  }
`;

export { NavLink };
