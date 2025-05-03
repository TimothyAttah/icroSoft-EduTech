import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Div = styled.div`
  width: 300px;
  height: 250px;
  background-color: green;
  color: aliceblue;
`;

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <Div>
          <h3>1</h3>
        </Div>
        <Div>
          <h3>2</h3>
        </Div>
        <Div>
          <h3>3</h3>
        </Div>
        <Div>
          <h3>4</h3>
        </Div>
        <Div>
          <h3>5</h3>
        </Div>
        <Div>
          <h3>6</h3>
        </Div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
