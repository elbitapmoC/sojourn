import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin-top: 48rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.section`
  text-align: center;
  font-family: "gallient";
  font-weight: normal;
  font-size: var(--fs_xl);
  margin-bottom: 4.8rem;
  margin-top: 0;
`;

export const Img = styled.img`
  margin-top: 4.8rem;
  &:not(:last-child) {
    margin-right: 4.8rem;
  }
`;

export const Heading = styled.p`
  font-size: var(--fs_700);
  font-weight: bold;
  color: white;
`;

export const ProjectCardContainer = styled.aside`
  position: relative;
  padding-top: 4.8rem;
  padding-left: 9.6rem;
  padding-right: 9.6rem;
  margin-bottom: 2.4rem;
  border: 5px solid rgba(255, 255, 255, 0.25);
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary1} 0%,
    black 100%
  );
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-top: 3.6rem;
    padding-right: 3.6rem;
    padding-left: 3.6rem;
  }
`;

export const TagList = styled.ul`
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--fs_500);
  margin-top: 2.4rem;
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
  margin-right: 4.8rem;
  opacity: 60%;
  &:hover {
    color: ${(props) => props.theme.colors.brightRed};
    opacity: 100%;
  }
`;

export const ProjectsButton = styled.a`
  border: 3px solid rgba(52, 52, 52, 0.1);
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
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
