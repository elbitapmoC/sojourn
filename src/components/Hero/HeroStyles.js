import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
`;

export const HeroTextContainer = styled.aside`
  position: absolute;
  bottom: var(--space_800);
  @media ${(props) => props.theme.breakpoints.sm} {
    bottom: var(--space_700);
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 0;
  font-family: "Helvetica", sans-serif;
  margin-top: var(--space_500);
  font-size: var(--fs_xl);
  max-width: 1200px;
  width: 100%;
`;

export const HeroSubtitle = styled.span`
  text-transform: uppercase;
  font-size: var(--fs_600);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-weight: normal;
  }
`;
