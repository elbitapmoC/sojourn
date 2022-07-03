import styled from "styled-components";

export const Logo = styled.div`
  padding: 1vh 1vw;
  text-align: center;
  & img {
    height: 5rem;
    width: 5rem;
  }
  img:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.aside`
  position: absolute;
  top: 4.8rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  z-index: 10;
  @media ${(props) => props.theme.breakpoints.sm} {
    position: fixed;
    z-index: 3;
  }
`;

export const Hamburger = styled.div`
  display: none;
  & div {
    width: 30px;
    height: 3px;
    background: #f2f5f7;
    margin: 5px;
    transition: all 0.3s ease;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 2;
    transition: all 0.7s ease;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  // padding: 0 0.7vw;
  // justify-content: space-evenly;
  align-items: center;
  & li a {
    text-decoration: none;
    margin: 0 2.25vw;
  }
  & li {
    position: relative;
  }
  & li a::before {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background-color: #61dafb;
    position: absolute;
    transition: all ease-in-out 250ms;
    margin: 0 0 0 10%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    position: fixed;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(50px at 90% -20%);
    -webkit-clip-path: circle(50px at 90% -10%);
    transition: all 0.3s ease-out;
    pointer-events: none;
    &.open {
      clip-path: circle(150% at 90% -10%);
      -webkit-clip-path: circle(150% at 90% -10%);
      pointer-events: all;
    }
    & li {
      opacity: 0;
    }
    & li:nth-child(1) {
      transition: all 0.2s ease 0.2s;
    }
    & li:nth-child(2) {
      transition: all 0.2s ease 0.23s;
    }
    & li:nth-child(3) {
      transition: all 0.2s ease 0.26s;
    }
    & li:nth-child(4) {
      transition: all 0.2s ease 0.27s;
    }
    & li:nth-child(5) {
      transition: all 0.2s ease 0.28s;
    }
    & li:nth-child(6) {
      transition: all 0.2s ease 0.29s;
      margin: 0;
    }
    & li:nth-child(7) {
      transition: all 0.2s ease 0.3s;
      margin: 0;
    }
  }
`;

export const NavLink = styled.a`
  font-size: var(--fs_500);
  color: #1a1a1a;
  transition: 0.23s ease-in-out;
  &:hover {
    color: #d72929;
    cursor: pointer;
  }
`;
