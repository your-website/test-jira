import React from "react";
import {
  Container,
  ParagraphPopUp,
  ParagraphBoldPopUp,
  Button,
} from "./style/index";

const PopUp = ({ item }) => {
  const content = item ? (
    <Container>
      <ParagraphBoldPopUp>id</ParagraphBoldPopUp>
      <ParagraphPopUp>{item.id}</ParagraphPopUp>
      <ParagraphBoldPopUp>forks</ParagraphBoldPopUp>
      <ParagraphPopUp>{item.forks}</ParagraphPopUp>
      <ParagraphBoldPopUp>name</ParagraphBoldPopUp>
      <ParagraphPopUp>{item.name}</ParagraphPopUp>
      <ParagraphBoldPopUp>size</ParagraphBoldPopUp>
      <ParagraphPopUp>{item.size}</ParagraphPopUp>
      <ParagraphBoldPopUp>watchers</ParagraphBoldPopUp>
      <ParagraphPopUp>{item.watchers}</ParagraphPopUp>
      <ParagraphBoldPopUp>login</ParagraphBoldPopUp>
      <ParagraphPopUp>{item.login}</ParagraphPopUp>
      <Button>click</Button>
    </Container>
  ) : null;

  return content;
};

export default PopUp;
