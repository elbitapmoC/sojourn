import styled from "styled-components";

export const Background = styled.img`
  position: absolute;
  right: 0rem;
  top: 0rem;
  z-index: -1;
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
    max-width: 640px;
  }
  // sm: 640px
  // md: 768px
  // lg: 1024px
  // xl: 1280px
  // xxl: 1600px
  // xxxl: 1984px
`;
