import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
`;

export const HeroTextContainer = styled.aside`
  position: absolute;
  bottom: 9.6rem;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 0;
  font-family: "gallient";
  font-size: var(--fs_xl);
  font-weight: normal;
  max-width: 1200px;
  width: 100%;
`;

export const HeroSubtitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: var(--fs_600);
  margin-bottom: 6.4rem;
`;
