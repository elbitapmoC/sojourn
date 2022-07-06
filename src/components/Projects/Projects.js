import React from "react";
import Link from "next/link";

import { featured, projects } from "../../constants/constants";
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
  ProjectsSub,
  ProjectHeading,
  Img,
} from "./ProjectsStyles";

const Projects = () => (
  <ProjectsContainer id="work">
    <ProjectHeading>
      <ProjectTitle>
        Featured Works
        {/* img */}
      </ProjectTitle>
      <ProjectsSub>
        A picture's worth a thousand words. Here's a few thousand words to show
        what we're about. Passions &amp; ideas that move us, that pushes us to
        go beyond. Enjoy your time spent within our mind.
      </ProjectsSub>
    </ProjectHeading>
    <ProjectCardContainer>
      {projects.map((p, i) => {
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
    <Link href="./projects">
      <ProjectsButton>See More projects</ProjectsButton>
    </Link>
  </ProjectsContainer>
);

export default Projects;
