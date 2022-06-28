import React from "react";
import { HeroContainer, HeroTitle, HeroSubtitle } from "./HeroStyles";

const Hero = (props) => (
  <HeroContainer>
    <HeroSubtitle>Hello, I'm Bazell&mdash; I do web3 development</HeroSubtitle>
    <HeroTitle>
      I strive to put <span className="emphText">power</span>,{" "}
      <span className="emphText">control</span> &amp;{" "}
      <span className="emphText">confidentiality</span> back into the hands of
      users.
    </HeroTitle>
  </HeroContainer>
);

export default Hero;
