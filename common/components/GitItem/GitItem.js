import React from "react";
import { URL } from "../../assets/CONST";

import {
  ButtonRepo,
  ButtonAbout,
  Paragraph,
  ParagraphBold,
  Img,
  Container,
  ContainerColumn,
  Link,
} from "./style";

import PopUp from '../PopUp'

const GitItem = ({ setPopUp, loading, data, openPopUp }) => {
  function openOrClosePopUp(e) {
    setPopUp(e.target.id)
  }

  function renderRepositories(data) {
    const page = data.map((ele) => {
      const { id, forks, name, size, watchers, owner } = ele;
      const { avatar_url, login } = owner;
      const linkUser = `${URL}/${login}`;

      return (
        <Container key={id} id={id} className="gitItem">
          <Img src={avatar_url} alt={name}></Img>
          <ContainerColumn>
            <ParagraphBold>id</ParagraphBold>
            <Paragraph>{id}</Paragraph>
          </ContainerColumn>
          <ContainerColumn>
            <ParagraphBold>forks</ParagraphBold>
            <Paragraph>{forks}</Paragraph>
          </ContainerColumn>
          <ContainerColumn>
            <ParagraphBold>size</ParagraphBold>
            <Paragraph>{size}</Paragraph>
          </ContainerColumn>
          <ContainerColumn>
            <ParagraphBold>watchers</ParagraphBold>
            <Paragraph>{watchers}</Paragraph>
          </ContainerColumn>
          <ContainerColumn>
            <ParagraphBold>login</ParagraphBold>
            <Paragraph>{login}</Paragraph>
          </ContainerColumn>
          <ButtonAbout id={id} onClick={openOrClosePopUp} >Show more</ButtonAbout>
          <ButtonRepo>
            <Link href={linkUser}>Repositories</Link>
          </ButtonRepo>
        </Container>
      );
    });

    return page;
  }

  function itemId() {
    const result = data.find(ele => ele.id === +openPopUp)
    return result
  }

  const popUpData = openPopUp !== null ? itemId() : null;
  const content = openPopUp !== null ? <PopUp setPopUp={setPopUp} data={popUpData} /> : null;

  if (loading) {
    return <p>loading</p>;
  } else {
    return (<div>{renderRepositories(data)} {content}</div>);
  }
};

export default GitItem;
