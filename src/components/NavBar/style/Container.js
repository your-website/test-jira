import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: transform 0.7s ease;
  transform: translateX(0);

  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    transform: translateX(100%);
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #0b4546;
    height: 100vh;
    width: 60%;
  }

  &.active {
    transform: translateX(0);
  }
`;

const ContainerBurgerMenu = styled.div`
  position: absolute;
  display: none;
  top: 35px;
  right: 30px;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export { Container, ContainerBurgerMenu };
