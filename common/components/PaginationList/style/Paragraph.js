import styled from "styled-components";

const Paragraph = styled.p`
  margin: 0 10px;
  color: #000;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    text-decoration: underline;
  }
`;
export { Paragraph };
