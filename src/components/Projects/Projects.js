import React from "react";

import { projects, ft } from "../../constants/constants";
import "react-multi-carousel/lib/styles.css";
import {
  ProjectsContainer,
  ProjectTitle,
  ProjectsSub,
  ProjectHeading,
  ImageSliderContainer,
} from "./ProjectsStyles";
import ImageSlider from "../ImageSlider/ImageSlider";

const Projects = () => (
  <ProjectsContainer id="work">
    <ProjectHeading>
      <ProjectTitle>Featured Works</ProjectTitle>
      <ProjectsSub>
        A picture's worth a thousand words. Here's a few thousand words to show
        what we're about. Passions &amp; ideas that move us, that pushes us to
        go beyond. Enjoy your time spent within our mind.
      </ProjectsSub>
    </ProjectHeading>
    <ImageSliderContainer>
      <ImageSlider slides={projects}></ImageSlider>
    </ImageSliderContainer>
  </ProjectsContainer>
);

export default Projects;
