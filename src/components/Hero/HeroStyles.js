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
  p {
    margin-top: 2.4rem;
  }
`;

export const HeroTitle = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: var(--fs_xl);
  letter-spacing: -0.04em;
  position: absolute;
  text-align: center;
  line-height: 85%;
  max-width: 630px;
  font-weight: 400;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);
  z-index: -1;

  img {
    position: absolute;
    top: -9.6rem;
    left: 6rem;
    z-index: -1;
    height: 90%;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 9rem;
    img {
      transform: translate(-50%);
      top: -8.4rem;
      height: 55%;
      left: 50%;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    img {
      transform: translate(-50%);
      top: -8.4rem;
      height: 55%;
      left: 50%;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 7.2rem;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
    img {
      transform: translate(-50%);
      top: -8.4rem;
      height: 55%;
      left: 50%;
    }
  }
`;
