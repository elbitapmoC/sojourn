import styled from "styled-components";

export const Background = styled.img`
  position: absolute;
  right: 0rem;
  top: 0rem;
  z-index: -1;
  @media ${(props) => props.theme.breakpoints.xl} {
    height: clamp(65rem, 40vw + 1rem, 40vw);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: clamp(48rem, 40vw + 1rem, 40vw);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: clamp(36rem, 40vw + 1rem, 40vw);
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  @media ${(props) => props.theme.breakpoints.xxxl} {
    max-width: 1600px;
  }
  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 1280px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 1024px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 768px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 640px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: unset;
    margin-left: var(--space_500);
    margin-right: var(--space_500);
  }
`;
