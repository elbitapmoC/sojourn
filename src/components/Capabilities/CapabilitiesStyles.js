import styled, { css } from "styled-components";

export const CapabilitiesContainer = styled.section`
  margin-top: 48rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HatsContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const HatDescription = styled.p`
  margin-top: 1.2rem;
`;

export const CapabilitiesTitle = styled.section`
  text-align: center;
  font-family: "gallient";
  font-weight: normal;
  font-size: var(--fs_xl);
  margin-bottom: 6.4rem;
`;

const baseHatStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fs_600);
`;

export const FirstHat = styled.aside`
  ${baseHatStyles}
  margin-right: 6.4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: unset;
  }
`;

export const SecondHat = styled.aside`
  ${baseHatStyles}
  margin-left: 6.4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: unset;
  }
`;
