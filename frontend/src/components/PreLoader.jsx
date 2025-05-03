import React from 'react'

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn2';

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  z-index: 1;
`;

export const Loader = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #191919;
  color: #fff;
  padding: 20px;

  span {
    font-size: 80px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 520px) {
    span {
      font-size: 40px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
`;

export const Pius = styled.span`
  color: darkred;
`;
export const Virgin = styled.span`
  color: #04044f;
`;

export const Desc = styled.p`
  font-size: 22px;
  text-align: center;
`;

const pius = ['P', 'i', 'u', 's'];
const virgin = ['V', 'i', 'r', 'g', 'i', 'n'];


const PreLoader = ({preloader, setPreloader}) => {
    const [timer, setTimer] = useState(6);
    const id = useRef(null);

    const clear = () => {
      window.clearInterval(id.current);
      setPreloader(false);
    };

    useEffect(() => {
      id.current = window.setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }, []);

    useEffect(() => {
      if (timer === 0) {
        clear();
      }
    }, [timer]);

  return (
    <LoaderWrapper>
      <Loader>
        <Text>
          {pius.map((p, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.3} direction='down'>
              <Pius>{p}</Pius>
            </FadeIn>
          ))}
          {virgin.map((v, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.3} direction='down'>
              <Virgin>{v}</Virgin>
            </FadeIn>
          ))}
        </Text>

        <FadeIn delay={0.5} direction='up'>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            corporis vitae officia!
          </Desc>
        </FadeIn>
      </Loader>
    </LoaderWrapper>
  );
}

export default PreLoader
