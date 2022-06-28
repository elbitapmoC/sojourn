import React from "react";
import Link from "next/link";

import {
  AboutContainer,
  AboutDescription,
  AboutTitle,
  AboutButton,
} from "./AcomplishmentsStyles";

const Acomplishments = () => (
  <AboutContainer>
    <AboutTitle>here&#8217;s the story</AboutTitle>
    <AboutDescription>
      The great resignation&mdash; over 47 million Americans voluntarily quit
      their jobs&mdash; an unprecedented mass exit from the workforce. Keep
      reading to find out WHY this is important.
    </AboutDescription>
    <Link href="#about">
      <AboutButton>Keep Reading</AboutButton>
    </Link>
  </AboutContainer>
);

export default Acomplishments;
