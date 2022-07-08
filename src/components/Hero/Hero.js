import React from "react";
import { web3 } from "../../constants/constants";

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
        Smart Contract Development
        <img src={web3.src} alt={web3.alt} />
      </HeroTitle>
      <HeroSubtextContainer>
        <HeroSubtitle>I believe in thinking differently.</HeroSubtitle>
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
