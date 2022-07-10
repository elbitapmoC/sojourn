import styled from "styled-components";

export const Section = styled.section`
  margin-top: var(--space_xl);
  display: grid;
  grid-template: 1fr / 1fr 3fr;
  grid-gap: 16rem;
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
  margin-top: 3rem;
  text-transform: uppercase;
  font-size: 3.2rem;
  line-height: 100%;
  font-weight: bold;
  margin-bottom: 10.8rem;
`;

export const Aside = styled.aside``;
export const Paragraph = styled.p`
   {
    font-weight: 300;
    font-size: 6rem;
    margin-bottom: 9.6rem;
    line-height: 124%;
    em {
      text-decoration: underline;
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
