import React from 'react';
import AboutInfo from './modules/aboutInfo/AboutInfo';
import AboutHero from './modules/aboutHero/AboutHero';
import Milestone from '../home/modules/milestone/Milestone';
import AboutTeacher from './modules/aboutTeacher/AboutTeacher';

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutInfo />
      <Milestone />
      <AboutTeacher />
    </div>
  );
};

export default About;
