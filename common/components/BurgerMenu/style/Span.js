import styled from "styled-components";

const DefaultSpan = styled.span`
  position: absolute;
  top: 50%;
  margin-top: -1px;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 2px;
  background-color: #222;

  &::before {
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 50%;
    margin-left: -10px;
    width: 20px;
    height: 2px;
    background-color: #222;
  }

  &::after {
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 50%;
    margin-left: -10px;
    width: 20px;
    height: 2px;
    background-color: #222;
  }
`;

const Span = styled(DefaultSpan).attrs((props) => ({
  className: props.className,
}))`
  &::before {
    content: "";
    display: block;
    transition: 0.2s;
    transform: rotate(35deg) translateX(8px) translateY(-9px);
    width: 10px;
    background-color: #222;

    transform-origin: top bottom;
  }

  &::after {
    content: "";
    display: block;
    transition: 0.2s;
    transform: rotate(-35deg) translateX(9px) translateY(6px);
    width: 11px;
    transform-origin: right bottom;
  }

  &.active::before {
    transform: rotate(35deg) translateX(0) translateY(0);
    transform-origin: left bottom;
  }
  &.active::after {
    transform: rotate(-35deg) translateX(0) translateY(0);
    transform-origin: left top;
  }
`;

export { Span };
