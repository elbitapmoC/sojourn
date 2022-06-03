import Link from 'next/link';
import React from 'react';
import { NavContainer, LogoStyling, NavLink, LinksContainer } from './HeaderStyles';
import { logo } from '../../constants/constants';

const Header = () =>  (
  <NavContainer>
    <Link href="/">
      <LogoStyling src={logo.src} alt={logo.alt} />
    </Link>

    <LinksContainer>
      <li>
        <Link href="#capabilities">
          <NavLink>Capabilities.</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About.</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#work">
          <NavLink>Work.</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="#contact">
          <NavLink>Contact.</NavLink>
        </Link>
      </li>        
    </LinksContainer>
  </NavContainer>
);

export default Header;
