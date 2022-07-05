import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin-top: var(--space_xxl);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.section`
  text-align: center;
  font-family: "gallient";
  font-weight: bold;
  font-size: var(--fs_xl);
  margin-bottom: var(--space_600);
  margin-top: 0;
`;

export const Img = styled.img`
  margin-top: var(--space_600);
  &:not(:last-child) {
    margin-right: var(--space_600);
  }
`;

export const Heading = styled.p`
  font-size: var(--fs_700);
  font-weight: bold;
  color: white;
`;

export const ProjectCardContainer = styled.aside`
  position: relative;
  padding-top: var(--space_600);
  padding-left: var(--space_800);
  padding-right: var(--space_800);
  margin-bottom: var(--space_400);
  border: 5px solid rgba(255, 255, 255, 0.25);
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary1} 0%,
    black 100%
  );
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-top: var(--space_500);
    padding-right: var(--space_500);
    padding-left: var(--space_500);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: var(--space_300);
    padding-right: var(--space_300);
    padding-left: var(--space_300);
  }
`;

export const TagList = styled.ul`
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--fs_500);
  margin-top: var(--space_400);
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ImageList = styled.aside`
  display: flex;
  overflow: scroll;
`;

export const Tag = styled.li`
  display: inline;
  margin-right: var(--space_600);
  opacity: 60%;
  &:hover {
    color: ${(props) => props.theme.colors.brightRed};
    opacity: 100%;
  }
`;

export const ProjectsButton = styled.a`
  border: 3px solid rgba(52, 52, 52, 0.1);
  padding-top: var(--space_300);
  padding-bottom: var(--space_300);
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: var(--fs_300);
  text-transform: uppercase;
  font-weight: bold;
  display: inline-flex;
  align-self: center;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.background1};
    background-color: ${(props) => props.theme.colors.brightRed};
  }
`;
