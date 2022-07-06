import styled from "styled-components";

export const Logo = styled.div`
  padding: 1vh 1vw;
  text-align: center;
  img:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const LogoAlt = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline-table;
    position: fixed;
    left: 2.4rem;
    right: 2.4rem;
    top: 2.4rem;
    z-index: 1;
    img {
      width: 5.6rem;
    }
  }
`;

export const Nav = styled.aside`
  position: fixed;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary1};
  background-color: ${(props) => props.theme.colors.background1};
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  z-index: 10;
  @media ${(props) => props.theme.breakpoints.sm} {
    position: fixed;
    bottom: 0;
    top: unset;
    z-index: 3;
  }
`;

export const Hamburger = styled.div`
  display: none;
  & div {
    width: 30px;
    height: 3px;
    background: red;
    margin: 5px;
    transition: all 0.3s ease;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    position: absolute;
    cursor: pointer;
    right: 0;
    bottom: 0;
    background-color: white;
    padding: 1.2rem;
    z-index: 2;
    transition: all 0.7s ease;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
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
    background-color: red;
    position: absolute;
    transition: all ease-in-out 250ms;
    margin: 0 0 0 10%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    position: fixed;
    height: 50vh;
    width: 100%;
    flex-direction: column;
    transition: all 0.3s ease-out;
    justify-content: flex-end;
    bottom: -50vh;

    & li {
      width: 100%;
      text-align: center;
      background-color: ${(props) => props.theme.colors.background1};
      border-top: 1.25px solid rgba(52, 52, 52, 0.125);
      & a {
        display: block;
        padding: 2.4rem;
      }
    }
    &.open {
      bottom: 0;
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
