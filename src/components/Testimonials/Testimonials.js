import React from "react";
import { companies } from "../../constants/constants";
import "react-multi-carousel/lib/styles.css";
import { ProjectsContainer, ImageList, Img } from "./TestimonialsStyles";

const Testimonials = () => (
  <ProjectsContainer>
    <h1 class="text-3xl">ACEEEEs</h1>
    {companies.map((p, i) => {
      return (
        <ImageList>
          {p.logos.map((logo, i) => {
            return <Img src={logo} draggable="false" />;
          })}
        </ImageList>
      );
    })}
  </ProjectsContainer>
);

export default Testimonials;
