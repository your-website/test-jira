import styled from "styled-components";
import { Button } from "../../assets/styled";

const Paragraph = styled.p`
  color: white;
  margin: 0;
`;

const ParagraphBold = styled(Paragraph)`
  font-weight: bold;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const ButtonNav = styled(Button)`
  border-radius: 15px;
  background-color: #fff;
  font-size: 17px;
  height: 30px;
  margin-right: 5px;
  transition: all 0.1s ease;
  width: 120px;
  margin: 0 auto;

  &:hover {
    background-color: rgb(236 247 255);
    border: 1px solid #fff;
  }

  @media screen and (max-width: 400px) {
    width: 90px;
    font-size: 14px;
  }
`;

const ButtonRepo = styled(ButtonNav)`
  @media screen and (max-width: 800px) {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  @media screen and (max-width: 560px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

const ButtonAbout = styled(ButtonNav)`
  display: none;
  @media screen and (max-width: 560px) {
    display: block;
  }
`;

const Test = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  margin-bottom: 10px;
  background: rgb(156, 177, 193);
  background: linear-gradient(
    45deg,
    rgba(11, 97, 119, 1) 0%,
    rgba(77, 116, 116, 1) 100%
  );

  @media screen and (max-width: 800px) {
    grid-template-columns: 120px repeat(4, 1fr);
    grid-template-rows: 60px 60px;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 60px 1fr 1fr;
    grid-template-rows: 60px;
  }
`;

const Img = styled.img`
  width: 80px;
  height: auto;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 120px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  @media screen and (max-width: 560px) {
    width: 60px;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export {
  Paragraph,
  Container,
  Img,
  Test,
  ParagraphBold,
  Link,
  ButtonRepo,
  ButtonAbout,
};
