import styled from "styled-components";

const Paragraph = styled.p.attrs((props) => ({
  className: props.className,
}))`
  margin-right: auto;
  font-weight: bold;
`;

export { Paragraph };
