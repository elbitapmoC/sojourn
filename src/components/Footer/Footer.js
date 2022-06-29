import React from "react";
import Link from "next/link";
import { FooterWrapper, FooterLinksContainer } from "./FooterStyles";
import { socialIcons } from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; Sojourner LLC | 2022</p>
      <FooterLinksContainer>
        {socialIcons.map((social, i) => {
          return (
            <Link href={social.href} key={i}>
              <img src={social.logo} alt={social.alt} draggable="false" />
            </Link>
          );
        })}
      </FooterLinksContainer>
    </FooterWrapper>
  );
};

export default Footer;
