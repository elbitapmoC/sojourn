import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin-top: var(--space_600);
`;

export const Img = styled.img`
  margin-right: 10rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 6rem;
  }
`;

export const ImageList = styled.aside`
  margin-top: var(--space_400);
  display: flex;
  justify-content: center;
`;
