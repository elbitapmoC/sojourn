import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin-top: 48rem;
`;

export const ProjectTitle = styled.section`
  text-align: center;
  font-family: "gallient";
  font-weight: normal;
  font-size: 10.8rem;
  margin-bottom: 6.4rem;
  margin-top: 0;
`;

export const Img = styled.img`
  margin-top: 4.8rem;
  &:not(:last-child) {
    margin-right: 10rem;
  }
`;

export const BlogCard = styled.aside``;

export const Heading = styled.p`
  font-size: 4.8rem;
  font-weight: bold;
  color: #f2f2f2;
`;

export const CardInfo = styled.p``;

export const ProjectCardContainer = styled.aside`
  background-color: ${(props) => props.theme.colors.primary1};
  // height: 400px;
  position: relative;
  padding-top: 4.8rem;
  padding-left: 9.6rem;
  padding-right: 9.6rem;
`;

export const TagList = styled.ul`
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  margin-top: 2.4rem;
`;

export const ImageList = styled.ul`
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
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
