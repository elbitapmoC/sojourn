import React from "react";
import { featured, circle } from "../../constants/constants";
import "react-multi-carousel/lib/styles.css";
import {
  ProjectsContainer,
  Heading,
  Tag,
  TagList,
  ImageList,
  Img,
  ProjectTitle,
  ProjectCardContainer,
} from "./ProjectsStyles";

const Projects = () => (
  <ProjectsContainer id="work">
    <ProjectTitle>featured works</ProjectTitle>
    <ProjectCardContainer>
      {featured.map((p, i) => {
        return (
          <aside key={i}>
            <Heading title>{p.title}</Heading>
            <TagList>
              {p.tags.map((t, i) => {
                return <Tag key={i}>{t}</Tag>;
              })}
            </TagList>
            <ImageList>
              {p.images.map((img, i) => {
                return (
                  <Img key={i} src={img.src} alt={img.alt} draggable="false" />
                );
              })}
            </ImageList>
          </aside>
        );
      })}
    </ProjectCardContainer>
  </ProjectsContainer>
);

export default Projects;
