import React from "react";

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

const GitItem = ({ loading, githubRepoData, countRepo }) => {
  const test = githubRepoData.map((ele) => {
    const { id, forks, name, size, watchers, owner } = ele;
    const { avatar_url, login } = owner;
    const linkUser = `https://github.com/${login}`;

    return (
      <Container key={id} className="gitItem">
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
        <ButtonAbout>Show more</ButtonAbout>
        <ButtonRepo>
          <Link href={linkUser}>Repositories</Link>
        </ButtonRepo>
      </Container>
    );
  });

  const showCurrentRepo = test.map((ele, index) => {
    const a = countRepo * 10;
    if (index < a) {
      return ele;
    }
  });

  if (loading) {
    return <p>loading</p>;
  } else {
    return showCurrentRepo;
  }
};

export default GitItem;
