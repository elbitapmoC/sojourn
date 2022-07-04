import Link from "next/link";
import React from "react";
import {
  Logo,
  LogoAlt,
  Nav,
  NavLinks,
  NavLink,
  Hamburger,
} from "./HeaderStyles";
import { logo } from "../../constants/constants";

function toggleMenu(e) {
  e.preventDefault();
  console.log("cliii");
}

const Header = () => (
  <>
    <LogoAlt>
      <Link href="./">
        <img src={logo.src} alt={logo.alt} />
      </Link>
    </LogoAlt>
    <Nav>
      <Logo>
        <Link href="./">
          <img src={logo.src} alt={logo.alt} />
        </Link>
      </Logo>
      <Hamburger onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
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
