import React from "react";
import { hats } from "../../constants/constants";
import {
  CapabilitiesTitle,
  CapabilitiesContainer,
  FirstHat,
  SecondHat,
  HatDescription,
  HatsContainer,
} from "./CapabilitiesStyles";
const Capabilities = () => (
  <CapabilitiesContainer id="hats">
    <CapabilitiesTitle>my different hats</CapabilitiesTitle>
    <HatsContainer>
      <FirstHat className="emphText">
        <img src={hats.web} alt={hats.webalt} />
        <HatDescription>Web Developer</HatDescription>
      </FirstHat>
      <SecondHat className="emphText">
        <img src={hats.product} alt={hats.productalt} />
        <HatDescription>Product Designer</HatDescription>
      </SecondHat>
    </HatsContainer>
  </CapabilitiesContainer>
);

export default Capabilities;
