import React from "react";
import { web3, campfire } from "../../constants/constants";

import {
  HeroContainer,
  HeroTitle,
  ImageContainer,
  ImageText,
} from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroTitle>
          Sr. User
          <br />
          Interface Engineer
          <img src={web3.src} alt={web3.alt} />
        </HeroTitle>
        <ImageContainer>
          <img draggable="false" src={campfire.src} alt={campfire.alt}></img>
          <ImageText>
            We believe in thinking differently. By putting{" "}
            <span className="emphText">power</span>,{" "}
            <span className="emphText">control</span> &amp;{" "}
            <span className="emphText">confidentiality</span> back into the
            hands of users and creators alike.
          </ImageText>
        </ImageContainer>
      </HeroContainer>
    </>
  );
};

export default Hero;
