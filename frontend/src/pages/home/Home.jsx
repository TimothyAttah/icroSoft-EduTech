import React from 'react';
import Hero from './modules/hero/Hero';
import Partners from './modules/partner/Partners';
import Advert from './modules/advert/Advert';
import Programs from './modules/programs/Programs';
import Count from './modules/count/Count';
import Course from './modules/course/Course';
import NewProgram from './modules/programs/NewProgram';
import Milestone from './modules/milestone/Milestone';
import Options from './modules/options/Options';
import NewHero from './modules/hero/NewHero';
import Featured from './modules/featured/Featured';
import Options2 from './modules/options/Options2';
import Video from './modules/video/Video';
import Join from './modules/join/Join';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <NewHero /> */}
      {/* <Featured /> */}
      <Course/>
      <Milestone />
      <Options2 />
      <Video />
      <Join />
      {/* <Programs /> */}
      {/* <Partners />
      <Advert />
      <Programs />
      <Count /> */}
    </div>
  );
};

export default Home;
