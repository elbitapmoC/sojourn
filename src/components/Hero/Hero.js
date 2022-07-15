import React from "react";
import { web3, campfire } from "../../constants/constants";

import { HeroContainer, HeroTitle, ImageContainer } from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroTitle>
          Smart Contract Developer
          <img src={web3.src} alt={web3.alt} />
        </HeroTitle>
        <ImageContainer>
          <img src={campfire.src} alt={campfire.alt}></img>
          <p>
            <em>
              We believe in thinking differently. By putting{" "}
              <span className="emphText">power</span>,{" "}
              <span className="emphText">control</span> &amp;{" "}
              <span className="emphText">confidentiality</span> back into the
              hands of users and creators alike.
            </em>
          </p>
        </ImageContainer>
      </HeroContainer>
    </>
  );
};

export default Hero;
