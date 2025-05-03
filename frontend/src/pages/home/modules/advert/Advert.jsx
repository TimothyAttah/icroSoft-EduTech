import React from 'react';
import * as Styles from './AdvertStyles'
import adVic from '../../../../assets/adVic.mp4';
import coursePic1 from '../../../../assets/cert.png';
import coursePic2 from '../../../../assets/instructor.png';
import coursePic3 from '../../../../assets/conducive.png';

const Advert = () => {
  return (
    <div>
      <Styles.HomeCourseInfoTitleBox>
        <div>
          <h2>
            we don't just learn, <br /> we build <br />{' '}
            <span>real world applications</span>
          </h2>
        </div>
        <div>
          <video src={adVic} controls />
        </div>
      </Styles.HomeCourseInfoTitleBox>
      <Styles.HomeCourseInfoWrapper>
        <Styles.HomeCourseInfoBox>
          <div>
            <img src={coursePic1} alt='' />
          </div>
          <div>
            <h4>
              1. Certification Trainings <br />
              (Online & In-Class Training).
            </h4>
            <p>
              Our trainings are available both <span>In-Class</span> or{' '}
              <span>Online based</span> sessions. You get{' '}
              <span>step by step guidance</span> from the trainer in the
              sessions. The trainer shares their screen and guilds you through
              the programming session. Trainees share their screen for{' '}
              <span className='bold'>code review</span> and{' '}
              <span className='bold'>error solving</span>
            </p>
          </div>
        </Styles.HomeCourseInfoBox>
        <Styles.HomeCourseInfoBox>
          <div>
            <img src={coursePic2} alt='' />
          </div>
          <div>
            <h4>2. Only Requirement is to have your own laptop.</h4>
            <p>
              Regardless of your <span>Level of Education</span> or{' '}
              <span>Background of Study,</span> you can get into software
              development. By{' '}
              <span className='bold'>
                joining our step by step guided training
              </span>{' '}
              and your growth is <span className='bold'>fast-paced</span>. We
              have students from the <span>age of 13 to 40</span> learning and
              applying programming skills.
            </p>
          </div>
        </Styles.HomeCourseInfoBox>
        <Styles.HomeCourseInfoBox>
          <div>
            <img src={coursePic3} alt='' />
          </div>
          <div>
            <h4>3. Join Campers Group and Get Involved in Internal Projects</h4>
            <p>
              The campers group has a network of{' '}
              <span className='bold'>technologists/trainers</span> who are
              brilliant tech researchers where you get access to the{' '}
              <span className='bold'>latest tech skills</span> and job
              readiness. We absorb <span>the most outstanding trainees </span>{' '}
              to join our <span className='bold'>internal projects</span> as
              Junior Software Developers.
            </p>
          </div>
        </Styles.HomeCourseInfoBox>
      </Styles.HomeCourseInfoWrapper>
    </div>
  );
};

export default Advert;
