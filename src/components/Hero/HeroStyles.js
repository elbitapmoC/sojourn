import styled from 'styled-components';

export const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  z-index: -1;
`;

export const HeroContainerPosition = styled.aside`
  position: absolute;
  margin: 7.2rem 7.2rem 0rem 7.2rem;
  bottom: 14.4rem;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 0;
  font-family: "gallient";
  font-size: 10.8rem;
  font-weight: normal;
  max-width: 1200px;
  width: 100%;
`;

export const HeroSubtitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.colors.lightPurple};
  font-size: 3.2rem;
  margin-bottom: 6.4rem;
`;