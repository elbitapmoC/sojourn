import styled from "styled-components";

export const AboutContainer = styled.section`
  margin-top: var(--space_xxl);
  margin-bottom: var(--space_xl);

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
  font-size: var(--fs_600);
  text-align: center;
`;

export const AboutTitle = styled.h1`
  text-align: center;
  font-family: "Helvetica", sans-serif;
  font-size: var(--fs_xl);
  margin-bottom: 0;
  margin-top: 0;
`;

export const AboutButton = styled.a`
  margin-top: var(--space_500);
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
