import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroTextContainer,
  HeroSubtextContainer,
} from "./HeroStyles";

const Hero = (props) => (
  <HeroContainer>
    <HeroTextContainer>
      <HeroTitle>
        <em>Web3</em> &amp; Brand Development
      </HeroTitle>
      <HeroSubtextContainer>
        <HeroSubtitle>We believe in thinking differently.</HeroSubtitle>
        <HeroSubtitle>
          By putting <span className="emphText">power</span>,{" "}
          <span className="emphText">control</span> &amp;{" "}
          <span className="emphText">confidentiality</span> back into the hands
          of users.
        </HeroSubtitle>
      </HeroSubtextContainer>
    </HeroTextContainer>
  </HeroContainer>
);

export default Hero;
