import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 10vh;
  background: rgb(11, 69, 70);
  background: linear-gradient(
    45deg,
    rgba(11, 69, 70, 1) 0%,
    rgba(144, 196, 235, 1) 100%
  );
  padding: 0 20px;

  @media screen and (max-width: 500px) {
    height: 15vh;
  }
`;

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

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Li = styled.li`
  list-style: none;
  margin-left: 1rem;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const Ul = styled.ul`
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 500px) {
    font-size: calc(10px + 1vmin);
  }
`;

const Button = styled.button`
  margin-left: auto;
  font-size: 16px;
  border: 1px solid black;
  height: 36px;
  width: 85px;
  color: black;
  text-decoration: none;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const LinkLogo = styled.a`
  text-decoration: none;
`;

export {
  Nav,
  Logo,
  Li,
  Link,
  Ul,
  LinkLogo,
  Button,
  Container,
  ContainerBurgerMenu,
};
