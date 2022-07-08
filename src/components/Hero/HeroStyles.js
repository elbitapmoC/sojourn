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
  position: relative;
  margin-top: 0;
  line-height: 85%;
  margin-bottom: var(--space_700);
  font-size: var(--fs_xxl);
  max-width: 960px;
  width: 100%;
  font-weight: 400;
  font-family: Helvetica, sans-serif;
  letter-spacing: -0.04em;

  img {
    position: absolute;
    top: -10.8rem;
    left: 6rem;
    z-index: -1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 8.4rem;
    margin-bottom: var(--space_500);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 5.115rem;
    margin-bottom: var(--space_500);
  }
`;

export const HeroSubtitle = styled.aside`
  text-transform: uppercase;
  font-size: var(--fs_600);
  max-width: 500px;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.lg} {
    &:not(:last-child) {
      margin-right: unset;
      margin-bottom: var(--fs_600);
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 500px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 400px;
    text-transform: initial;
  }
`;
