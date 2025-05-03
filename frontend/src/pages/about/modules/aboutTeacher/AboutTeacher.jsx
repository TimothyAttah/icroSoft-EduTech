import React from 'react';
import * as Styles from './AboutTeacherStyles';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGooglePlus,
} from 'react-icons/fa';
import { FadeIn } from '../../../../components/FadeIn';

const AboutTeacher = () => {
  return (
    <Styles.AboutTeacherContainer>
      <FadeIn delay={0.2} direction='down'>
        <Styles.AboutTeacherTitle>Meet the Teachers</Styles.AboutTeacherTitle>
      </FadeIn>

      <Styles.AboutTeacherLists>
        <FadeIn delay={0.2} direction='down'>
          <Styles.AboutTeacherListItem>
            <Styles.AboutTeacherListItemPic>
              <img
                src='images/teacher_1.jpg'
                alt='https://unsplash.com/@nickkarvounis'
              />
            </Styles.AboutTeacherListItemPic>
            <Styles.AboutTeacherListItemDetails>
              <h4>Jonathan Smith</h4>
              <p>Marketing</p>
              <div>
                <FaGooglePlus />
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </Styles.AboutTeacherListItemDetails>
          </Styles.AboutTeacherListItem>
        </FadeIn>
        <FadeIn delay={0.3} direction='down'>
          <Styles.AboutTeacherListItem>
            <Styles.AboutTeacherListItemPic>
              <img
                src='images/teacher_2.jpg'
                alt='https://unsplash.com/@nickkarvounis'
              />
            </Styles.AboutTeacherListItemPic>
            <Styles.AboutTeacherListItemDetails>
              <h4>Jonathan Smith</h4>
              <p>Marketing</p>
              <div>
                <FaGooglePlus />
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </Styles.AboutTeacherListItemDetails>
          </Styles.AboutTeacherListItem>
        </FadeIn>
        <FadeIn delay={0.4} direction='down'>
          <Styles.AboutTeacherListItem>
            <Styles.AboutTeacherListItemPic>
              <img
                src='images/teacher_3.jpg'
                alt='https://unsplash.com/@nickkarvounis'
              />
            </Styles.AboutTeacherListItemPic>
            <Styles.AboutTeacherListItemDetails>
              <h4>Jonathan Smith</h4>
              <p>Marketing</p>
              <div>
                <FaGooglePlus />
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </Styles.AboutTeacherListItemDetails>
          </Styles.AboutTeacherListItem>
        </FadeIn>
        <FadeIn delay={0.5} direction='down'>
          <Styles.AboutTeacherListItem>
            <Styles.AboutTeacherListItemPic>
              <img
                src='images/teacher_4.jpg'
                alt='https://unsplash.com/@nickkarvounis'
              />
            </Styles.AboutTeacherListItemPic>
            <Styles.AboutTeacherListItemDetails>
              <h4>Jonathan Smith</h4>
              <p>Marketing</p>
              <div>
                <FaGooglePlus />
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </Styles.AboutTeacherListItemDetails>
          </Styles.AboutTeacherListItem>
        </FadeIn>
        <FadeIn delay={0.6} direction='down'>
          <Styles.AboutTeacherListItem>
            <Styles.AboutTeacherListItemPic>
              <img
                src='images/teacher_5.jpg'
                alt='https://unsplash.com/@nickkarvounis'
              />
            </Styles.AboutTeacherListItemPic>
            <Styles.AboutTeacherListItemDetails>
              <h4>Jonathan Smith</h4>
              <p>Marketing</p>
              <div>
                <FaGooglePlus />
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </Styles.AboutTeacherListItemDetails>
          </Styles.AboutTeacherListItem>
        </FadeIn>
        <FadeIn delay={0.7} direction='down'>
          <Styles.AboutTeacherListItem>
            <Styles.AboutTeacherListItemPic>
              <img
                src='images/teacher_6.jpg'
                alt='https://unsplash.com/@nickkarvounis'
              />
            </Styles.AboutTeacherListItemPic>
            <Styles.AboutTeacherListItemDetails>
              <h4>Jonathan Smith</h4>
              <p>Marketing</p>
              <div>
                <FaGooglePlus />
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </Styles.AboutTeacherListItemDetails>
          </Styles.AboutTeacherListItem>
        </FadeIn>
      </Styles.AboutTeacherLists>
    </Styles.AboutTeacherContainer>
  );
};

export default AboutTeacher;
