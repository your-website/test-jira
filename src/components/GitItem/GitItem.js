import React from "react";
import {
  Paragraph,
  Container,
  Img,
  Test,
  ParagraphBold,
} from "./styles_GitItem";

const GitItem = ({ githubRepo }) => {
  const { id, forks, name, size, watchers, owner } = githubRepo;
  const { avatar_url, login } = owner;
  console.log(githubRepo);
  const linkUser = `https://github.com/${login}`;
  return (
    <Container className="gitItem">
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
      <a href={linkUser}>click</a>
    </Container>
  );
};

export default GitItem;
