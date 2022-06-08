import styled from 'styled-components'

export const AboutContainer = styled.section`
  height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
`

export const AboutDescription = styled.p`
  width:100%;
  font-size: 3.2rem;
  text-align: center;
  color: ${props => props.theme.colors.lightPurple};
`;

export const AboutTitle = styled.h1`
  text-align: center;
  font-family: 'gallient';
  font-weight: normal;
  font-size: 10.8rem;
  margin-bottom: 6.4rem;
  margin-top: 0;
`;