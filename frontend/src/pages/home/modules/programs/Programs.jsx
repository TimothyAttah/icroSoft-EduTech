import React from 'react';
import { Link } from 'react-router-dom';
import { programsCourseData } from './programData'
import * as Styles from './ProgramsStyles'

const Programs = () => {
  return (
    <Styles.ProgramsContainer>
      <h1>Choose your course</h1>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi cupiditate numquam? Laudantium esse ipsa corporis exercitationem, quam eum vel iste sapiente quod modi rerum laboriosam quibusdam totam. Amet, quia!
      </p>
      <Styles.ProgramsListContainer>
        {programsCourseData.map((item, i) => (
          <Link key={i}>
            <Styles.ProgramsList>
              <Styles.ProgramsImgContainer>
                <img src={item.programPic} alt='' />
              </Styles.ProgramsImgContainer>
              <Styles.ProgramsInfoContainer>
                <h4>{item.programName}</h4>
                <p>
                  Duration: <span>{item.programDuration}</span>
                </p>
                <small>
                  Cohort Starts: <span> {item.programDate}</span>
                </small>
                <button>view program</button>
              </Styles.ProgramsInfoContainer>
            </Styles.ProgramsList>
          </Link>
        ))}
      </Styles.ProgramsListContainer>
    </Styles.ProgramsContainer>
  );
}

export default Programs
