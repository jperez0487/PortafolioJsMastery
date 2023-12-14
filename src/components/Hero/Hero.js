import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a <br/>
        Mi Portafolio Personal
      </SectionTitle>
      <SectionText>
        El proposito de JS MAstery es ...El proposito de JS MAstery es ...El proposito de JS MAstery es ...El proposito de JS MAstery es ...El proposito de JS MAstery es ...El proposito de JS MAstery es ...El proposito de JS MAstery es ...El proposito de JS MAstery es ...El proposito de JS MAstery es ...
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Leer mas</Button>
    </LeftSection>
  </Section>
);

export default Hero;