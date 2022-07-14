import React from "react";
import { web3 } from "../../constants/constants";

import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroTextContainer,
  HeroSubtextContainer,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroTitle>
          Smart Contract Developer
          <img src={web3.src} alt={web3.alt} />
        </HeroTitle>
        <HeroSubtextContainer>
          <HeroSubtitle>We believe in thinking differently.</HeroSubtitle>
          <HeroSubtitle>
            By putting <span className="emphText">power</span>,{" "}
            <span className="emphText">control</span> &amp;{" "}
            <span className="emphText">confidentiality</span> back into the
            hands of creators.
          </HeroSubtitle>
        </HeroSubtextContainer>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default Hero;
