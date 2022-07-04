import styled, { css } from "styled-components";

export const CapabilitiesContainer = styled.section`
  margin-top: var(--space_xxl);
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
  margin-bottom: var(--space_700);
`;

const baseHatStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fs_600);
`;

export const FirstHat = styled.aside`
  ${baseHatStyles}
  margin-right: var(--space_700);
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: unset;
    margin-bottom: 3.6rem;
  }
`;

export const SecondHat = styled.aside`
  ${baseHatStyles}
  margin-left: var(--space_700);
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: unset;
  }
`;
