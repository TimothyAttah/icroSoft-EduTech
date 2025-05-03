import React from 'react';
import {
  FaArrowAltCircleRight,
  FaArrowLeft,
  FaArrowRight,
  FaLongArrowAltRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Styles from './HeroStyles';
import Slider from 'react-slick';
import courseImg from '../../../../assets/awsdeveloper.png';

const Hero = () => {
  //  const settings = {
  //    dots: true,
  //    infinite: true,
  //    slidesToShow: 1,
  //    slidesToScroll: 1,
  //    autoplay: true,
  //    speed: 7000,
  //    autoplaySpeed: 3000,
  //    cssEase: 'linear',
  //  };

  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: true,
  };
  return (
    <Styles.HeroContainer>
      <Slider {...settings}>
        <Styles.HeroSliderContainer>
          <Styles.HeroSliderBgContainer slider='slider1'>
            <Styles.HeroSliderInfoContainer>
              <Styles.HeroSliderInfoLogoContainer>
                <img src='/images/home_logo.png' alt='' />
              </Styles.HeroSliderInfoLogoContainer>
              <Styles.HeroSliderTitle>
                complete online courses
              </Styles.HeroSliderTitle>
              <Styles.HeroSliderDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse
                tempora beatae eos a, dicta nam eius nisi fugit eveniet harum
                culpa inventore iure, officiis, porro repellendus quaerat
                molestias perspiciatis.
              </Styles.HeroSliderDesc>
              <Styles.HeroSliderButtonBox>
                <Link to='/about_us'>
                  <button>Learn more</button>
                  <div>
                    <FaArrowRight />
                  </div>
                </Link>
                <Link to='/courses'>
                  <button>view all courses</button>
                  <div>
                    <FaArrowRight />
                  </div>
                </Link>
              </Styles.HeroSliderButtonBox>
            </Styles.HeroSliderInfoContainer>
          </Styles.HeroSliderBgContainer>
        </Styles.HeroSliderContainer>
        <Styles.HeroSliderContainer>
          <Styles.HeroSliderBgContainer slider='slider1'>
            <Styles.HeroSliderInfoContainer>
              <Styles.HeroSliderInfoLogoContainer>
                <img src='/images/home_logo.png' alt='' />
              </Styles.HeroSliderInfoLogoContainer>
              <Styles.HeroSliderTitle>
                complete online courses
              </Styles.HeroSliderTitle>
              <Styles.HeroSliderDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse
                tempora beatae eos a, dicta nam eius nisi fugit eveniet harum
                culpa inventore iure, officiis, porro repellendus quaerat
                molestias perspiciatis.
              </Styles.HeroSliderDesc>
              <Styles.HeroSliderButtonBox>
                <Link to='/about_us'>
                  <button>Learn more</button>
                  <div>
                    <FaArrowRight />
                  </div>
                </Link>
                <Link to='/courses'>
                  <button>view all courses</button>
                  <div>
                    <FaArrowRight />
                  </div>
                </Link>
              </Styles.HeroSliderButtonBox>
            </Styles.HeroSliderInfoContainer>
          </Styles.HeroSliderBgContainer>
        </Styles.HeroSliderContainer>
        <Styles.HeroSliderContainer>
          <Styles.HeroSliderBgContainer slider='slider1'>
            <Styles.HeroSliderInfoContainer>
              <Styles.HeroSliderInfoLogoContainer>
                <img src='/images/home_logo.png' alt='' />
              </Styles.HeroSliderInfoLogoContainer>
              <Styles.HeroSliderTitle>
                complete online courses
              </Styles.HeroSliderTitle>
              <Styles.HeroSliderDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse
                tempora beatae eos a, dicta nam eius nisi fugit eveniet harum
                culpa inventore iure, officiis, porro repellendus quaerat
                molestias perspiciatis.
              </Styles.HeroSliderDesc>
              <Styles.HeroSliderButtonBox>
                <Link to='/about_us'>
                  <button>Learn more</button>
                  <div>
                    <FaArrowRight />
                  </div>
                </Link>
                <Link to='/courses'>
                  <button>view all courses</button>
                  <div>
                    <FaArrowRight />
                  </div>
                </Link>
              </Styles.HeroSliderButtonBox>
            </Styles.HeroSliderInfoContainer>
          </Styles.HeroSliderBgContainer>
        </Styles.HeroSliderContainer>
      </Slider>
      <Styles.HeroCardContainer>
        <Styles.HeroCardInfo>
          <Styles.HeroCardInfoPrice>
            <Link to='/courses'>view program</Link>
            <p>
              price: <span>$200</span>
            </p>
          </Styles.HeroCardInfoPrice>
          <Styles.HeroCardInfoTitle>AWS Developer</Styles.HeroCardInfoTitle>
          <Styles.HeroCardInfoSubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            consequuntur exercitationem earum possimus.
          </Styles.HeroCardInfoSubTitle>
          <Styles.HeroCardInfoPrice>
            <p>
              duration: <span>10 Weeks</span>
            </p>
          </Styles.HeroCardInfoPrice>
          <Styles.HeroCardInfoPrice>
            <p>
              cohorts start: <span>24 May 25</span>
            </p>
          </Styles.HeroCardInfoPrice>
        </Styles.HeroCardInfo>
        <Styles.HeroCardImg>
          <img src={courseImg} alt='' />
        </Styles.HeroCardImg>
      </Styles.HeroCardContainer>
    </Styles.HeroContainer>
  );
};

export default Hero;
