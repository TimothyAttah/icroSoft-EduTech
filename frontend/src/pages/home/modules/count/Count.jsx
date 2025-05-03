import React, { useEffect } from 'react'
import * as Styles from './CountStyles'

const Count = () => {
  const progress1 = () => {
    let progressValue = document.querySelector('.progressValue');
    let progressValue1 = document.querySelector('.progressValue1');
    let progressValue2 = document.querySelector('.progressValue2');
    let progressValue3 = document.querySelector('.progressValue3');



    let progressStartValue = 0,
      progressEndValue = 894,
      progressStartValue1 = 0,
      progressEndValue1 = 115,
      progressStartValue2 = 0,
      progressEndValue2 = 39,
      progressStartValue3 = 0,
      progressEndValue3 = 7,
      speed = 90;



    let progressCount = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}`
      if (progressStartValue === progressEndValue) {
        clearInterval(progressCount);
      }
    }, 20);


     let progressCount1 = setInterval(() => {
       progressStartValue1++;

       progressValue1.textContent = `${progressStartValue1}`;
       if (progressStartValue1 === progressEndValue1) {
         clearInterval(progressCount1);
       }
     }, speed);

     let progressCount2 = setInterval(() => {
       progressStartValue2++;

       progressValue2.textContent = `${progressStartValue2}`;
       if (progressStartValue2 === progressEndValue2) {
         clearInterval(progressCount2);
       }
     }, 400);

    let progressCount3 = setInterval(() => {
      progressStartValue3++;

      progressValue3.textContent = `${progressStartValue3}`;
      if (progressStartValue3 === progressEndValue3) {
        clearInterval(progressCount3);
      }
    }, 500);
  }


  useEffect(() => {
    progress1();

  }, [])

  return (
    <Styles.CountContainer>
      <Styles.CountListContainer>
        <Styles.CountList>
          <Styles.ProgressValue className='progressValue'>
            894
          </Styles.ProgressValue>
          <Styles.CountText>trained students</Styles.CountText>
        </Styles.CountList>
        <Styles.CountList>
          <Styles.ProgressValue className='progressValue1'>
            115
          </Styles.ProgressValue>
          <Styles.CountText>website and apps built</Styles.CountText>
        </Styles.CountList>
        <Styles.CountList>
          <Styles.ProgressValue className='progressValue2'>
            37
          </Styles.ProgressValue>
          <Styles.CountText>our partners</Styles.CountText>
        </Styles.CountList>
        <Styles.CountList>
          <Styles.ProgressValue className='progressValue3'>
            7
          </Styles.ProgressValue>
          <Styles.CountText>years of experience</Styles.CountText>
        </Styles.CountList>
      </Styles.CountListContainer>
    </Styles.CountContainer>
  );
}

export default Count
