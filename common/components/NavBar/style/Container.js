import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transform: translateX(0);

  @media screen and (max-width: 500px) {
    transition: transform 0.7s ease;
    transform: translateX(100%);
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-around;

    background-color: #0b4546;
    height: 100vh;
    width: 60%;
  }

  &.active {
    transform: translateX(0);
  }
`;

const ContainerBurgerMenu = styled.div`
  position: fixed;
  display: none;
  top: 35px;
  right: 30px;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export { Container, ContainerBurgerMenu };
