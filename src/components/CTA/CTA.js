import React from "react";
import Link from "next/link";

import {
  AboutContainer,
  AboutDescription,
  AboutTitle,
  AboutButton,
} from "./CTAStyles";

const CTA = () => (
  <AboutContainer id="contact">
    <AboutTitle>let&#8217;s build the future</AboutTitle>
    <AboutDescription>
      I can’t see into it (the future) but can definitely shape it.
    </AboutDescription>
    <Link href="#about">
      <AboutButton>let's build!</AboutButton>
    </Link>
  </AboutContainer>
);

export default CTA;
