import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin-top: var(--space_xxl);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProjectHeading = styled.aside`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--space_800);
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }
`;

export const ProjectsSub = styled.p`
  max-width: 500px;
  font-size: 2rem;
`;

export const ProjectTitle = styled.p`
  text-align: center;
  font-family: "Helvetica", sans-serif;
  font-size: var(--fs_xxl);
  letter-spacing: -0.04em;
  margin-top: 0;
  max-width: 500px;
  line-height: 75%;
  position: relative;
  & img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Img = styled.img`
  margin-top: var(--space_600);
  &:not(:last-child) {
    margin-right: var(--space_600);
  }
`;

export const ImageSliderContainer = styled.aside`
  width: 960px;
  height: 420px;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
`;

export const Heading = styled.p`
  font-size: var(--fs_700);
  color: ${(props) => props.theme.colors.primary1};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 2.4rem);
  bottom: -2.4rem;
`;
export const numOutOfTotal = styled.p``;

export const ProjectCardContainer = styled.aside`
  max-width: 960px;
  width: 100%;
  height: 420px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-top: var(--space_600);
  padding-left: var(--space_600);
  padding-right: var(--space_600);
  margin-bottom: var(--space_600);
  border: 5px solid ${(props) => props.theme.colors.brightRed};
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
  display: inline-flex;
  align-self: center;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.background1};
    background-color: ${(props) => props.theme.colors.brightRed};
  }
`;
