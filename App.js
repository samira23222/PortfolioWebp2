import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import './styles/style.scss';
import CLOUDS from "vanta/dist/vanta.clouds.min.js";
import NavBar from './Nav.js';
import Intro from './Intro.js';
import Smolplane from './Smolplane.js';



function App() {
  const vantaRef = useRef(null);
  let vantaEffect = null;

  useEffect(() => {
    vantaEffect = CLOUDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
    });

    

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div className="container" ref={vantaRef}>
      {/* <nav className="nbar"> *
     <div className="nav-box"> <div className="b-ground">About</div></div>
        <div className="nav-box"><div className="b-ground2">Projects</div></div>
     <div className="nav-box"><div className="b-ground">Contact</div></div>
  </nav>*/}
  <NavBar />
  <Smolplane />
      <Intro />
    </div>
  );
}


export default App;