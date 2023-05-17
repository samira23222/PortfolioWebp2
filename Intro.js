import './styles/style.scss';
import anime from 'animejs';
import React, { useEffect, useRef } from 'react';

function Intro() {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useEffect(() => {
    anime({
      targets: firstTextRef.current,
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      easing: 'easeInOutQuad',
    });

    anime({
      targets: secondTextRef.current,
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      easing: 'easeInOutQuad',
      delay: 500, // Adjust the delay as needed
    });
  }, []);

  return (
    <div>
      <div className="intro-text" ref={firstTextRef}>
        <h1>Samira Uriarte Zamudio</h1>
      </div>
      <div className="intro-text2" ref={secondTextRef}>
        <h2>Web Developer</h2>
      </div>
    </div>
  );
};

export default Intro;