import Link from "next/link";
import React from "react";
import { Logo, Nav, NavLinks, NavLink, Hamburger } from "./HeaderStyles";
import { logo } from "../../constants/constants";

const Header = () => (
  <>
    <Nav>
      <Logo>
        <Link href="./">
          <img src={logo.src} alt={logo.alt} />
        </Link>
      </Logo>
      <Hamburger>
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
