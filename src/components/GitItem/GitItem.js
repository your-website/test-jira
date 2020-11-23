import React from "react";
import {
  Paragraph,
  Container,
  Img,
  Test,
  ParagraphBold,
  Link,
  ButtonRepo,
  ButtonAbout,
} from "./styles_GitItem";

const GitItem = ({ loading, githubRepoData }) => {
  const test = githubRepoData.map((ele) => {
    const { id, forks, name, size, watchers, owner } = ele;
    const { avatar_url, login } = owner;
    const linkUser = `https://github.com/${login}`;

    return (
      <Container key={id} className="gitItem">
        <Img src={avatar_url} alt={name}></Img>
        <Test>
          <ParagraphBold>id</ParagraphBold>
          <Paragraph>{id}</Paragraph>
        </Test>
        <Test>
          <ParagraphBold>forks</ParagraphBold>
          <Paragraph>{forks}</Paragraph>
        </Test>
        <Test>
          <ParagraphBold>size</ParagraphBold>
          <Paragraph>{size}</Paragraph>
        </Test>
        <Test>
          <ParagraphBold>watchers</ParagraphBold>
          <Paragraph>{watchers}</Paragraph>
        </Test>
        <Test>
          <ParagraphBold>login</ParagraphBold>
          <Paragraph>{login}</Paragraph>
        </Test>
        <ButtonAbout>Show more</ButtonAbout>
        <ButtonRepo>
          <Link href={linkUser}>Repositories</Link>
        </ButtonRepo>
      </Container>
    );
  });

  if (loading) {
    return <p>loading</p>;
  } else {
    return test;
  }
};

export default GitItem;
