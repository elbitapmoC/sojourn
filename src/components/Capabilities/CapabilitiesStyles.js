import styled, { css } from 'styled-components'

export const CapabilitiesContainer = styled.section`
  height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const HatsContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
`

export const HatDescription = styled.p`
  margin-top: 1.2rem;
`;

export const CapabilitiesTitle = styled.section`
  text-align: center;
  font-family: 'gallient';
  font-weight: normal;
  font-size: 10.8rem;
  margin-bottom: 6.4rem;
`;

const baseHatStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3.2rem;
`;

export const FirstHat = styled.aside`
  ${baseHatStyles}
  margin-right: 6.4rem;
`;

export const SecondHat = styled.aside`
  ${baseHatStyles}
    margin-left: 6.4rem;
`;
