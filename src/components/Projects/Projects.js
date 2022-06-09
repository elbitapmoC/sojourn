import React from 'react';
import { projects } from '../../constants/constants';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProjectsContainer } from './ProjectsStyles';
import { Card } from '../Card/Card';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 75
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 45
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

const Projects = () => (
  <ProjectsContainer>
    <Carousel 
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
      dotListClass="custom-dot-list-style"
      containerClass="carousel-container"
      customTransition="all .5"
      transitionDuration={300}
      responsive={responsive}
      keyBoardControl={true}
      partialVisible={true}
      autoPlaySpeed={3500}
      focusOnSelect={true}
      swipeable={false}
      draggable={false}
      showDots={false}
      infinite={false}
      autoPlay={true}
    >
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
    </Carousel>
  </ProjectsContainer>
);

export default Projects;