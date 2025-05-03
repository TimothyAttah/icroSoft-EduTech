import React from 'react';
import * as Styles from './AboutInfoStyles';
import { FadeIn } from '../../../../components/FadeIn';

const AboutInfo = () => {
  return (
    <Styles.AboutInfoContainer>
      <Styles.AboutInfoBox>
        <FadeIn delay={0.2} direction='right'>
          <Styles.AboutInfoText>
            <h2>Our Platform's main goal</h2>
            <p>
              Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
              euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
              viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum
              interdum dui, ac tempor lorem convallis ut. Maecenas rutrum
              viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus
              pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Integer id convallis
              libero, sed blandit nibh. Nam ultricies tristique nibh, consequat
              ornare nibh. Quisque vitae odio ligula.
            </p>
          </Styles.AboutInfoText>
        </FadeIn>
        <FadeIn delay={0.3} direction='left'>
          <Styles.AboutInfoImg>
            <img
              src='images/about_1.jpg'
              alt='https://unsplash.com/@jtylernix'
            ></img>
          </Styles.AboutInfoImg>
        </FadeIn>
      </Styles.AboutInfoBox>
      <Styles.AboutInfoBox primary='true'>
        <FadeIn delay={0.2} direction='left'>
          <Styles.AboutInfoText>
            <h2>eLearn's Visionl</h2>
            <p>
              Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
              euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
              viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum
              interdum dui, ac tempor lorem convallis ut. Maecenas rutrum
              viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus
              pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Integer id convallis
              libero, sed blandit nibh. Nam ultricies tristique nibh, consequat
              ornare nibh. Quisque vitae odio ligula.
            </p>
          </Styles.AboutInfoText>
        </FadeIn>
        <FadeIn delay={0.3} direction='right'>
          <Styles.AboutInfoImg>
            <img
              src='images/about_1.jpg'
              alt='https://unsplash.com/@jtylernix'
            ></img>
          </Styles.AboutInfoImg>
        </FadeIn>
      </Styles.AboutInfoBox>
    </Styles.AboutInfoContainer>
  );
};

export default AboutInfo;
