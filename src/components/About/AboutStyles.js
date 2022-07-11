import styled from "styled-components";

export const Section = styled.section`
  margin-top: var(--space_xl);
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-gap: 16rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: unset;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const AboutTitle = styled.h1`
  position: relative;
  margin-top: 0;
  line-height: 85%;
  margin-bottom: var(--space_700);
  font-size: var(--fs_xxl);
  font-weight: 300;
  font-family: Helvetica, sans-serif;
  letter-spacing: -0.04em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 8.4rem;
    margin-bottom: var(--space_500);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 5.115rem;
    margin-bottom: var(--space_500);
  }
`;

export const AboutSubtitle = styled.h2`
  text-transform: uppercase;
  font-size: 3.2rem;
  line-height: 100%;
  font-weight: bold;
  margin-bottom: var(--space_800);

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: var(--fs_600);
  }
`;

export const Aside = styled.aside``;
export const Paragraph = styled.p`
   {
    font-weight: 300;
    font-size: 6rem;
    margin-bottom: var(--space_900);
    line-height: 124%;
    em {
      text-decoration: underline;
      font-style: italic;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
      margin-bottom: 6rem;
      font-size: 4.8rem;
    }
    @media ${(props) => props.theme.breakpoints.xl} {
      margin-bottom: 6rem;
      font-size: 3.6rem;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 4.8rem;
      font-size: 2.4rem;
    }
  }
`;

export const AboutButton = styled.a`
  border: 3px solid black;
  padding-top: var(--space_300);
  padding-bottom: var(--space_300);
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: var(--fs_300);
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.background1};
  background-color: ${(props) => props.theme.colors.brightRed};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};
  }
`;
