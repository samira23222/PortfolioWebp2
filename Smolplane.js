import './styles/style.scss';
import anime from 'animejs';
import React, { useEffect, useRef } from 'react';

function Smolplane() {
  const airplaneRef = useRef(null);

  useEffect(() => {
    const airplaneAnimation = anime({
      targets: airplaneRef.current,
      translateX: ['-100%', '100%'],
      duration: 5000, // Adjust the duration for a slower animation
      easing: 'linear',
      loop: true,
    });

    return () => {
      airplaneAnimation.pause();
    };
  }, []);

  return (
    <div className="airplane-container">
      <div className="airplane" ref={airplaneRef}>
        <span className="airplane-text">I also want to be an Airlines commerical pilot someday! :D</span>
      </div>
    </div>
  );
}

export default Smolplane;