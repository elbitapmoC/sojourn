import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
`;

export const HeroTextContainer = styled.aside`
  position: absolute;
  bottom: 30%;
  transform: translateY(30%);
`;

export const HeroSubtextContainer = styled.aside`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 0;
  font-family: "Helvetica", sans-serif;
  line-height: 85%;

  margin-bottom: var(--space_700);
  font-size: var(--fs_xxl);
  max-width: 960px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4.4rem;
    margin-bottom: var(--space_500);
  }
`;

export const HeroSubtitle = styled.aside`
  text-transform: uppercase;
  font-size: var(--fs_600);
  max-width: 500px;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: unset;
    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
`;
