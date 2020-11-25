import React from "react";
import onClickOutside from "react-onclickoutside";

import { Container, ButtonPop, ParagraphPop, ParagraphBoldPop, ImgPop, ContainerColumnPop, LinkPop } from './style'

const PopUp = ({ setPopUp, data }) => {
  const { id, forks, size, watchers, owner: { login, avatar_url } } = data;

  PopUp.handleClickOutside = () => {
    setPopUp(null)
  }

  return (
    <Container>
      <ImgPop src={avatar_url} alt={name}></ImgPop>
      <ContainerColumnPop>
        <ParagraphBoldPop>id</ParagraphBoldPop>
        <ParagraphPop>{id}</ParagraphPop>
      </ContainerColumnPop>
      <ContainerColumnPop>
        <ParagraphBoldPop>forks</ParagraphBoldPop>
        <ParagraphPop>{forks}</ParagraphPop>
      </ContainerColumnPop>
      <ContainerColumnPop>
        <ParagraphBoldPop>size</ParagraphBoldPop>
        <ParagraphPop>{size}</ParagraphPop>
      </ContainerColumnPop>
      <ContainerColumnPop>
        <ParagraphBoldPop>watchers</ParagraphBoldPop>
        <ParagraphPop>{watchers}</ParagraphPop>
      </ContainerColumnPop>
      <ContainerColumnPop>
        <ParagraphBoldPop>login</ParagraphBoldPop>
        <ParagraphPop>{login}</ParagraphPop>
      </ContainerColumnPop>
      <ButtonPop>
        <LinkPop href={avatar_url}>Repositories</LinkPop>
      </ButtonPop>
    </Container>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => PopUp.handleClickOutside
};

export default onClickOutside(PopUp, clickOutsideConfig);

