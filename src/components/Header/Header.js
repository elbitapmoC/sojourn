import React, { useState } from "react";
import Link from "next/link";
import {
  Logo,
  LogoAlt,
  Nav,
  NavLinks,
  NavLink,
  Hamburger,
} from "./HeaderStyles";
import { logo } from "../../constants/constants";

const Header = () => {
  const [navToggled, setNavToggled] = useState(false);
  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };

  return (
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
        <Hamburger onClick={handleNavToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </Hamburger>
        <NavLinks className={`${navToggled ? "open" : ""}`}>
          <li>
            <Link href="./about">
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
};

export default Header;
