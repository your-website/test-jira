import styled from "styled-components";

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

export { Button, ButtonShadow };
