import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroTextContainer,
} from "./HeroStyles";

const Hero = (props) => (
  <HeroContainer>
    <HeroTextContainer>
      <HeroTitle>
        <i>Web3</i> &amp; Brand Development
      </HeroTitle>
      <HeroSubtitle>We believe in thinking differently.</HeroSubtitle>
      <HeroSubtitle>
        By putting power, control &amp; confidentiality back into the hands of
        users.
      </HeroSubtitle>
    </HeroTextContainer>
  </HeroContainer>
);

export default Hero;
