import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  height: 90vh;
`;

export const ImageContainer = styled.aside`
  text-align: center;
  position: relative;
  max-width: 1440px;
  position: absolute;
  left: 50%;
  bottom: 7.2rem;
  transform: translateX(-50%);
  width: 100%;
  img {
    width: 100%;
  }
`;

export const ImageText = styled.p`
  margin-top: 2.4rem;
  font-style: italic;
  line-height: 125%;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
    letter-spacing: 0.01rem;
  }
`;

export const HeroTitle = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: var(--fs_xl);
  letter-spacing: -0.04em;
  position: absolute;
  text-align: center;
  line-height: 85%;
  max-width: 475px;
  font-weight: 400;
  color: #ffc837;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);
  z-index: -1;

  img {
    position: absolute;
    top: -14.4rem;
    left: -8.4rem;
    z-index: -1;
    height: 85%;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 9rem;
    img {
      left: -3.6rem;
      top: -12rem;
      height: 75%;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    img {
      transform: translateX(-2.4rem);
      left: -6rem;
      top: -10.8rem;
      height: 65%;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 7.2rem;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
    img {
      transform: translateX(-50%);
      top: -10.8rem;
      height: 75%;
      left: 50%;
    }
  }
`;
