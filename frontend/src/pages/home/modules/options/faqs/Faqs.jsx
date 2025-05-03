import React, { useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp, FaPlus, FaMinus } from 'react-icons/fa';
import * as Styles from './FaqsStyles';
import { faqData } from './faqData';

const Faqs = () => {
  // const toggleFaq = () => {
  //   const faqs = document.querySelectorAll('.faq');
  //   faqs.forEach((faq) => {
  //     faq.addEventListener('click', () => {
  //       faq.classList.toggle('active');
  //     });
  //   });
  // };

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);

    // const faqs = document.querySelectorAll('.faq');
    // faqs.forEach((faq) => {
    //   faq.addEventListener('click', () => {
    //     // faq.classList.toggle('active');

    //     setClicked(faq.classList.toggle('active'));
    //   });
    // });

    // setClicked(!clicked);
  };

  return (
    <Styles.Faqs>
      <h1>why choose us</h1>
      {faqData.map((item, index) => (
        <Styles.FaqContainer
          className={`${clicked === index ? ' faq active' : 'faq'}`}
        >
          <Styles.FaqQuestion
            className='question'
            onClick={() => toggle(index)}
          >
            <h3>{item.question}</h3>
            <div>
              <FaCaretDown />
            </div>
          </Styles.FaqQuestion>
          <Styles.FaqAnswer className='answer'>
            <p>{item.answer}</p>
          </Styles.FaqAnswer>
        </Styles.FaqContainer>
      ))}
    </Styles.Faqs>
  );
};

export default Faqs;
