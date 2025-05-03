import React from 'react';
import Slider from 'react-slick';
import partnerLogo1 from '../../../../assets/Miscrosoft_Home.svg';
import partnerLogo2 from '../../../../assets/Purdue_Home.svg';
import partnerLogo3 from '../../../../assets/Google_Home.svg';
import partnerLogo4 from '../../../../assets/Caltech_Home.svg';
import partnerLogo5 from '../../../../assets/AWS_Home.svg';
import partnerLogo6 from '../../../../assets/Umass_48_mega_menu.svg';
import partnerLogo7 from '../../../../assets/University_Logo_Colored_48px.svg';
import partnerLogo8 from '../../../../assets/university-logo-coloured_imperial_homepage.svg';
import * as Styles from './PartnersStyles';

const Partners = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <Styles.PartnerContainer className='slider-container'>
      <h4>Partnering with the world's leading universities and companies</h4>
        <Styles.PartnerLogoContainer>
      <Slider {...settings}>
          <Styles.PartnerLogo>
            <img src={partnerLogo1} alt='' />
          </Styles.PartnerLogo>
          <Styles.PartnerLogo>
            <img src={partnerLogo2} alt='' />
          </Styles.PartnerLogo>
          <Styles.PartnerLogo>
            <img src={partnerLogo3} alt='' />
          </Styles.PartnerLogo>
          <Styles.PartnerLogo>
            <img src={partnerLogo4} alt='' />
          </Styles.PartnerLogo>
          <Styles.PartnerLogo>
            <img src={partnerLogo5} alt='' />
          </Styles.PartnerLogo>
          <Styles.PartnerLogo>
            <img src={partnerLogo8} alt='' />
          </Styles.PartnerLogo>
          <Styles.PartnerLogo>
            <img src={partnerLogo6} alt='' />
          </Styles.PartnerLogo>
          <Styles.PartnerLogo>
            <img src={partnerLogo7} alt='' />
          </Styles.PartnerLogo>
      </Slider>
        </Styles.PartnerLogoContainer>
    </Styles.PartnerContainer>
  );
};

export default Partners;
