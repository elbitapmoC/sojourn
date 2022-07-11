import React from "react";
import Clipboard from "./../Clipboard/Clipboard";
import {
  Section,
  AboutTitle,
  AboutSubtitle,
  Aside,
  Paragraph,
} from "./AboutStyles";
import Link from "next/link";

const About = () => {
  return (
    <Section>
      <AboutTitle>About</AboutTitle>
      <Aside>
        <AboutSubtitle>
          Sojourner - Scripture &amp; integrity first company. We aim to be as
          Jacob was to Laban.
        </AboutSubtitle>
        <Paragraph>
          We believe, the{" "}
          <em>building of anything starts with a strong foundation</em>&#9866;
          we expect houses to last for decades, we take this same approach with
          Web3. Start with quality and end with quality. We share our passion
          through our work and challenge the status quoa. Just so happens with
          this, we can shape the future and bring value to creators.
        </Paragraph>
        <Paragraph>
          We aim to empower artists &amp; creators to push the boundaries of
          culture, fashion, design and so much more.
        </Paragraph>
        <Paragraph>Interested in building the future with us?</Paragraph>
        <Clipboard />
      </Aside>
    </Section>
  );
};

export default About;
