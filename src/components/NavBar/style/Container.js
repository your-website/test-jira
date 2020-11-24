import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: transform 0.7s ease;
  transform: translateX(0);

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 0;
    right: 0;

    background-color: #0b4546;
    height: 100vh;
    width: 60%;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerBurgerMenu = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;
`;

export { Container, ContainerBurgerMenu };
