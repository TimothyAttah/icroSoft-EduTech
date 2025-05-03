import React from 'react';
import { programsCourseData } from '../programs/programData';
import * as Styles from './NewProgramStyles';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const NewProgram = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

   var settingsMedium = {
     dots: true,
     infinite: true,
     slidesToShow: 2,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     pauseOnHover: true,
   };
   var settingsSmaller = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     pauseOnHover: true,
   };
  return (
    <Styles.ProgramContainer>
      <Styles.ProgramTitle>choose your course</Styles.ProgramTitle>
      <Styles.ProgramSubTitle>
        Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod
        pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem
        venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac
        tempor lorem convallis ut
      </Styles.ProgramSubTitle>
      <Styles.ProgramListsContainer>
        <Slider {...settings}>
          {programsCourseData.map((item, i) => (
            <Styles.ProgramListItemContainer key={i}>
              <Styles.ProgramImg>
                <img src={item.programPic} alt='' />
              </Styles.ProgramImg>
              <Styles.ProgramInfo>
                <Styles.ProgramingCardInfoPrice>
                  <Link>view program</Link>
                  <p>
                    price: <span>$200</span>
                  </p>
                </Styles.ProgramingCardInfoPrice>
                <Styles.ProgramInfoTitle>
                  {item.programName}
                </Styles.ProgramInfoTitle>
                <Styles.ProgramInfoSubTitle>
                  {item.programDesc}
                </Styles.ProgramInfoSubTitle>
                <Styles.DurationBox>
                  <h5>
                    {' '}
                    Duration: <br />
                    {item.programDuration}
                  </h5>
                  <h5>
                    Cohorts Starts: <br />
                    {item.programDate}
                  </h5>
                </Styles.DurationBox>
              </Styles.ProgramInfo>
            </Styles.ProgramListItemContainer>
          ))}
        </Slider>
      </Styles.ProgramListsContainer>
      <Styles.ProgramListsContainerMedium>
        <Slider {...settingsMedium}>
          {programsCourseData.map((item, i) => (
            <Styles.ProgramListItemContainer key={i}>
              <Styles.ProgramImg>
                <img src={item.programPic} alt='' />
              </Styles.ProgramImg>
              <Styles.ProgramInfo>
                <Styles.ProgramingCardInfoPrice>
                  <Link>view program</Link>
                  <p>
                    price: <span>$200</span>
                  </p>
                </Styles.ProgramingCardInfoPrice>
                <Styles.ProgramInfoTitle>
                  {item.programName}
                </Styles.ProgramInfoTitle>
                <Styles.ProgramInfoSubTitle>
                  {item.programDesc}
                </Styles.ProgramInfoSubTitle>
                <Styles.DurationBox>
                  <h5>
                    {' '}
                    Duration: <br />
                    {item.programDuration}
                  </h5>
                  <h5>
                    Cohorts Starts: <br />
                    {item.programDate}
                  </h5>
                </Styles.DurationBox>
              </Styles.ProgramInfo>
            </Styles.ProgramListItemContainer>
          ))}
        </Slider>
      </Styles.ProgramListsContainerMedium>
      <Styles.ProgramListsContainerSmaller>
        <Slider {...settingsSmaller}>
          {programsCourseData.map((item, i) => (
            <Styles.ProgramListItemContainer key={i}>
              <Styles.ProgramImg>
                <img src={item.programPic} alt='' />
              </Styles.ProgramImg>
              <Styles.ProgramInfo>
                <Styles.ProgramingCardInfoPrice>
                  <Link>view program</Link>
                  <p>
                    price: <span>$200</span>
                  </p>
                </Styles.ProgramingCardInfoPrice>
                <Styles.ProgramInfoTitle>
                  {item.programName}
                </Styles.ProgramInfoTitle>
                <Styles.ProgramInfoSubTitle>
                  {item.programDesc}
                </Styles.ProgramInfoSubTitle>
                <Styles.DurationBox>
                  <h5>
                    {' '}
                    Duration: <br />
                    {item.programDuration}
                  </h5>
                  <h5>
                    Cohorts Starts: <br />
                    {item.programDate}
                  </h5>
                </Styles.DurationBox>
              </Styles.ProgramInfo>
            </Styles.ProgramListItemContainer>
          ))}
        </Slider>
      </Styles.ProgramListsContainerSmaller>
    </Styles.ProgramContainer>
  );
};

export default NewProgram;
