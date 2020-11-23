import React from "react";
import { Paragraph, Container, Img, Test } from "./styles_GitItem";

const GitItem = ({ githubRepo }) => {
  const { id, forks, name, size, watchers, owner } = githubRepo;
  const { avatar_url, login } = owner;
  console.log(githubRepo);
  const linkUser = `https://github.com/${login}`;
  return (
    <Container className="gitItem">
      <Img src={avatar_url} alt={name}></Img>
      <Test className="test">
        <Paragraph>id</Paragraph>
        <Paragraph>{id}</Paragraph>
      </Test>
      <Paragraph>
        forks <br /> {forks}
      </Paragraph>
      <Paragraph>
        name <br /> {name}
      </Paragraph>
      <Paragraph>
        size <br /> {size}
      </Paragraph>
      <Paragraph>
        watchers <br /> {watchers}
      </Paragraph>
      <Paragraph>
        login <br /> {login}
      </Paragraph>
      <a href={linkUser}>click</a>
    </Container>
  );
};

export default GitItem;
