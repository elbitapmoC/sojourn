import React from "react";
import Link from "next/link";
import Clipboard from "../Clipboard/Clipboard";

import { AboutContainer, AboutDescription, AboutTitle } from "./CTAStyles";

const CTA = () => (
  <AboutContainer id="contact">
    <AboutTitle>let&#8217;s build the future</AboutTitle>
    <AboutDescription>
      We can't see into it (the future) but can definitely shape it.
    </AboutDescription>
    <Clipboard />
  </AboutContainer>
);

export default CTA;
