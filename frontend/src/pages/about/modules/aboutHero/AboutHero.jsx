import React from 'react';
import * as Styles from './AboutHeroStyles';
import { FadeIn } from '../../../../components/FadeIn';

const AboutHero = () => {
  return (
    <div>
      <Styles.AboutHeroContainer>
        <Styles.AboutHeroInfoContainer>
          <FadeIn delay={0.2} direction='down'>
            <h1>About us</h1>
          </FadeIn>
        </Styles.AboutHeroInfoContainer>
      </Styles.AboutHeroContainer>
    </div>
  );
};

export default AboutHero;
