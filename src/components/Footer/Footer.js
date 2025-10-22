import React from "react";
import Link from "next/link";

import {
  FooterWrapper,
  FooterLinkImages,
  FooterParagraph,
} from "./FooterStyles";
import { socialIcons } from "../../constants/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <FooterParagraph>&copy; Sojourner | 2022–{currentYear}</FooterParagraph>
      <aside>
        {socialIcons.map((social, i) => {
          return (
            <Link target="_blank" href={social.href} key={i}>
              <FooterLinkImages
                src={social.src}
                alt={social.alt}
                draggable="false"
              />
            </Link>
          );
        })}
      </aside>
    </FooterWrapper>
  );
};

export default Footer;
