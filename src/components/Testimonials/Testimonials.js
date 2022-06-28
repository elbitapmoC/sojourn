import React from "react";
import { companies } from "../../constants/constants";
import "react-multi-carousel/lib/styles.css";
import { ProjectsContainer, ImageList, Img } from "./TestimonialsStyles";
import Marquee from "react-fast-marquee";

const Testimonials = () => (
  <ProjectsContainer>
    <Marquee gradient={false} speed={60}>
      <ImageList>
        {companies.map((p, i) => {
          return (
            <li>
              {p.logos.map((logo, i) => {
                return <Img src={logo} draggable="false" />;
              })}
            </li>
          );
        })}
      </ImageList>
    </Marquee>
  </ProjectsContainer>
);

export default Testimonials;
