import Link from "next/link";
import React from "react";
import {
  NavContainer,
  Background,
  Logo,
  Nav,
  NavLinks,
  NavLink,
  Hamburger,
} from "./HeaderStyles";
import { logo, flower } from "../../constants/constants";

const Header = () => (
  <>
    <Background src={flower.src} alt={flower.alt} />
    <Nav>
      <Logo>
        <Link href="./">
          <img src={logo.src} alt={logo.alt} />
        </Link>
      </Logo>
      <Hamburger>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </Hamburger>
      <NavLinks>
        <li>
          <Link href="./#hats">
            <NavLink>Capabilities.</NavLink>
          </Link>
        </li>
        <li>
          <Link href="./#about">
            <NavLink>About.</NavLink>
          </Link>
        </li>
        <li>
          <Link href="./#work">
            <NavLink>Work.</NavLink>
          </Link>
        </li>
        <li>
          <Link href="./#contact">
            <NavLink>Contact.</NavLink>
          </Link>
        </li>
      </NavLinks>
    </Nav>
  </>
);

export default Header;
