import styled from "styled-components";

const Paragraph = styled.p`
  color: black;
  margin: 0;
`;

const ParagraphBold = styled(Paragraph)`
  font-weight: bold;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  border: 1px solid black;
`;

const Img = styled.img`
  width: 80px;
  height: auto;
  padding: 5px 0;
`;

export { Paragraph, Container, Img, Test, ParagraphBold };
