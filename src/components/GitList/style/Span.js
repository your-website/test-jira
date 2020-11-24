import styled from "styled-components";

const Span = styled.span.attrs((props) => ({
  className: props.className,
}))`
  font-size: 16px;
  color: #8e7e7e;
  font-weight: normal;
  cursor: pointer;

  &.active {
    font-size: 16px;

    color: #000;
    text-decoration: underline;
  }
`;

export { Span };
