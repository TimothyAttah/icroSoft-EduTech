import React from 'react';
import { techsData } from './techData';
import { FadeIn } from '../../components/FadeIn';
import * as Styles from './TechStyles';
import TechListCard from './TechListCard';

const Tech = () => {
  return (
    <>
      <Styles.TechsMainContainer>
        <Styles.TechTitle>Choose your course</Styles.TechTitle>
        <Styles.TechSubTitle>
          Select your course and register today to be part of our next cohort
          starting on 10th June, 2025.
        </Styles.TechSubTitle>
        <Styles.TechWrapper>
          {techsData.map((item, i) => (
            <FadeIn key={i} direction='down' delay={0.1 * i}>
              <TechListCard data={item} />
            </FadeIn>
          ))}
        </Styles.TechWrapper>
      </Styles.TechsMainContainer>
    </>
  );
};

export default Tech;
