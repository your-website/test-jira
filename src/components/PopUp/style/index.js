import styled from "styled-components";
import { Paragraph, ParagraphBold, ButtonRepo } from "../../GitItem/style";

const Container = styled.div`
  background-color: #dad9d9;
  position: fixed;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ParagraphPopUp = styled(Paragraph)`
  color: black;
`;

const ParagraphBoldPopUp = styled(ParagraphBold)`
  color: black;
`;
const Button = styled(ButtonRepo)`
  margin: 15px auto 0;
`;

export { Container, ParagraphPopUp, ParagraphBoldPopUp, Button };
