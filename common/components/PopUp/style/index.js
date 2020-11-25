import styled from "styled-components";
import {
  ButtonRepo,
  Paragraph,
  ParagraphBold,
  Img,
  ContainerColumn,
  Link,
} from "../../GitItem/style";

const Container = styled.div`
  position: fixed;
  top: 15%;
  right: 15%;
  background-color: #ffffff;
  border: 1px solid black;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonPop = styled(ButtonRepo)`
  color: #000;
  display: block;
  margin: 20px auto 0;
`;
const ParagraphPop = styled(Paragraph)`
  color: #000;
  display: block;
  margin-top: 6px;
`;
const ParagraphBoldPop = styled(ParagraphBold)`
  color: #000;
  display: block;
  margin-top: 15px;
`;
const ImgPop = styled(Img)`
  margin-top: 20px;
  color: #000;
  display: block;
`;
const ContainerColumnPop = styled(ContainerColumn)`
  color: #000;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const LinkPop = styled(Link)`
  color: #000;
  display: block;
`;

export { Container, ButtonPop, ParagraphPop, ParagraphBoldPop, ImgPop, ContainerColumnPop, LinkPop };
