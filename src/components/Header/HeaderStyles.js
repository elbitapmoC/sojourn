import styled from 'styled-components';

export const NavContainer = styled.nav`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  background-color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
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
    color: #23005B;
    opacity: 1;
    cursor: pointer;
  }
`;

export const LogoStyling = styled.img`
  padding: 12px 12px 12px 12px;
  background-color: #0F1624;
`