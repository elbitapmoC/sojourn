import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, HeroContainerPosition } from './HeroStyles';

const Hero = (props) => (
  <HeroContainer>
    <HeroContainerPosition>
    <HeroSubtitle>
      Welcome, I'm Bazell&mdash; a frontend web3 developer
    </HeroSubtitle>
    <HeroTitle>I strive to put <span className='emphText'>power</span>, <span className='emphText'>control</span> &amp; <span className='emphText'>confidentiality</span> back into the hands of users.</HeroTitle>
    </HeroContainerPosition>
  </HeroContainer>
);

export default Hero;