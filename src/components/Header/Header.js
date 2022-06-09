import Link from 'next/link';
import React from 'react';
import { NavContainer, LogoStyling, NavLink, LinksContainer, Background } from './HeaderStyles';
import { logo, flower } from '../../constants/constants';

const Header = () =>  (
  <>
    <Background src={flower.src} alt={flower.alt} />
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
  </>
);

export default Header;
