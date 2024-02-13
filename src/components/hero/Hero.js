import React from 'react';
import { HeroWrapper, HeroContainer, SelfieContainer, Selfie } from './HeroStyles';

const Hero = () => {
  return (
    <HeroWrapper>
        <HeroContainer>
            <h1>Hey, I'm Shane</h1>
            <p className="typewriter"></p>
        </HeroContainer>
        <SelfieContainer>
            <Selfie src="/images/face.png" alt="Selfie"></Selfie>
        </SelfieContainer>
    </HeroWrapper>
  );
};

export default Hero;
