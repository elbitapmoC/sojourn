import styled from "styled-components";

export const AboutContainer = styled.section`
  margin-top: 48rem;
  margin-bottom: 24rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutDescription = styled.p`
  width: 100%;
  font-size: 3.2rem;
  text-align: center;
`;

export const AboutTitle = styled.h1`
  text-align: center;
  font-family: "gallient";
  font-weight: normal;
  font-size: 10.8rem;
  margin-bottom: 2.4rem;
  margin-top: 0;
`;

export const AboutButton = styled.a`
  margin-top: 3.2rem;
  border: 3px solid black;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.colors.background1};
  background-color: ${(props) => props.theme.colors.brightRed};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};
  }
`;
