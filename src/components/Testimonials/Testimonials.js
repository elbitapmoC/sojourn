import React from "react";
import { companies } from "../../constants/constants";
import "react-multi-carousel/lib/styles.css";
import { ProjectsContainer, ImageList, Img } from "./TestimonialsStyles";
import Marquee from "react-fast-marquee";

const Testimonials = () => (
  <ProjectsContainer>
    <Marquee gradient={false} delay={0} speed={45}>
      <ImageList>
        {companies.map((company, i) => {
          return (
            <Img
              key={i}
              src={company.src}
              alt={company.alt}
              draggable="false"
            />
          );
        })}
      </ImageList>
    </Marquee>
  </ProjectsContainer>
);

export default Testimonials;
