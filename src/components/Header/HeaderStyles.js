import styled from "styled-components";

export const NavContainer = styled.nav`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const LinksContainer = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  margin: 0 3.2rem 0 auto;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: #1a1a1a;
  transition: 0.4s ease;
  &:hover {
    color: #d72929;
    opacity: 1;
    cursor: pointer;
  }
`;

export const LogoStyling = styled.img`
  padding: 8px 8px 8px 3.2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Background = styled.img`
  position: absolute;
  right: 0rem;
  top: 0rem;
  z-index: -1;
`;
