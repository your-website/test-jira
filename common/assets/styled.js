import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  font-size: 16px;
  border: 1px solid black;
  color: black;
  background-color: #fff;
  cursor: pointer;
`;

const ButtonShadow = styled(Button)`
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 2px 3px 6px rgba(32, 49, 67, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  &:hover {
    background-color: #efefef;
    box-shadow: 2px 3px 6px rgba(32, 49, 67, 0.8);
  }
`;

const ButtonRounder = styled(Button)`
  border-radius: 15px;
  background-color: #fff;
  transition: all 0.1s ease;

  &:hover {
    background-color: rgb(236 247 255);
    border: 1px solid #fff;
  }
`;

const DefaultLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 500px) {
    font-size: calc(10px + 1vmin);
  }
`;

export { Button, ButtonShadow, ButtonRounder, DefaultLink };
