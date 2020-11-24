import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ContainerMobile = styled.div`
  display: none;
  transition: transform 0.7s ease;

  @media screen and (max-width: 500px) {
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
`;

const ContainerBurgerMenu = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;
`;

export { Container, ContainerBurgerMenu, ContainerMobile };
