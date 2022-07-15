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
  font-weight: 300;
  text-align: center;
`;

export const AboutTitle = styled.h1`
  text-align: center;
  font-family: "Helvetica", sans-serif;
  letter-spacing: -0.04em;
  font-size: var(--fs_xl);
  margin-bottom: var(--space_300);
  margin-top: 0;
  line-height: 75%;
  font-weight: 400;
`;

export const AboutButton = styled.a`
  margin-top: var(--space_500);
  border: 3px solid rgba(255, 255, 255, 0.35);
  padding-top: var(--space_300);
  padding-bottom: var(--space_300);
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: var(--fs_300);
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary1};
  background-color: ${(props) => props.theme.colors.brightRed};
  &:hover {
    cursor: pointer;
    background-color: white;
    color: ${(props) => props.theme.colors.brightRed};
    border: 3px solid rgba(122, 5, 215, 0.75);
  }
  span {
    font-weight: 700;
  }
`;
