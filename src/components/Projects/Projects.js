import React from "react";
import Link from "next/link";

import { featured } from "../../constants/constants";
import "react-multi-carousel/lib/styles.css";
import {
  ProjectsContainer,
  Heading,
  Tag,
  TagList,
  ImageList,
  ProjectTitle,
  ProjectCardContainer,
  ProjectsButton,
  Li,
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
                  <img key={i} src={img.src} alt={img.alt} draggable="false" />
                );
              })}
            </ImageList>
          </aside>
        );
      })}
    </ProjectCardContainer>
    <Link href="./projects">
      <ProjectsButton>See More projects</ProjectsButton>
    </Link>
  </ProjectsContainer>
);

export default Projects;
