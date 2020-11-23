import styled from "styled-components";

const Nav = styled.nav`
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
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const Li = styled.li`
  list-style: none;
  margin-left: 1rem;
`;

const Ul = styled.ul`
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: calc(10px + 1vmin);
  font-weight: bold;

  &:hover {
    border-bottom: 2px solid white;
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
`;

const LinkLogo = styled.a`
  text-decoration: none;
`;

export { Nav, Logo, Li, Link, Ul, LinkLogo, Button };
