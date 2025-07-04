import React from 'react';
import styled from 'styled-components';

const MilestoneBg = styled.div`
  background: url('/images/milestones.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Milestone = () => {
  return (
    <>
      <div class='milestones'>
        <div
          class='parallax_background parallax-window'
          data-parallax='scroll'
          data-image-src='images/milestones.jpg'
          data-speed='0.8'
        ></div>
        <div class='container'>
          <div class='row milestones_container'>
            <div class='col-lg-3 milestone_col'>
              <div class='milestone text-center'>
                <div class='milestone_icon'>
                  <img src='images/milestone_1.svg' alt='' />
                </div>
                <div class='milestone_counter' data-end-value='1548'>
                  0
                </div>
                <div class='milestone_text'>Online Courses</div>
              </div>
            </div>

            <div class='col-lg-3 milestone_col'>
              <div class='milestone text-center'>
                <div class='milestone_icon'>
                  <img src='images/milestone_2.svg' alt='' />
                </div>
                <div class='milestone_counter' data-end-value='7286'>
                  0
                </div>
                <div class='milestone_text'>Students</div>
              </div>
            </div>

            <div class='col-lg-3 milestone_col'>
              <div class='milestone text-center'>
                <div class='milestone_icon'>
                  <img src='images/milestone_3.svg' alt='' />
                </div>
                <div class='milestone_counter' data-end-value='257'>
                  0
                </div>
                <div class='milestone_text'>Teachers</div>
              </div>
            </div>

            <div class='col-lg-3 milestone_col'>
              <div class='milestone text-center'>
                <div class='milestone_icon'>
                  <img src='images/milestone_4.svg' alt='' />
                </div>
                <div class='milestone_counter' data-end-value='39'>
                  0
                </div>
                <div class='milestone_text'>Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Milestone;
