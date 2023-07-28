import React, { useRef, useEffect, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import "./features.css";
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import BackgroundRight from './background_right';
import Screen4 from './screen4';
import Screen5 from './screen5';
import Splin from './spline';
import Screen6 from './screen6';
import Screen7 from './screen7';
import Screen8 from './screen8';

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  return (
    <div className="features-wrapper component bg-black hidden md:block lg:block" id="feature" data-component="Features">
      <Controller>
        <Scene duration={5000} pin offset={`${offset}px`}>
          <div className="relative w-full">
            <BackgroundRight />
            <div className="w-full h-[1000vh] relative overflow-hidden">
              <Screen1 />
              <Screen2 />
              <Screen3 />
              <Screen4 />
              <Splin />
              <Screen5 />
              <Screen6 />
              <Screen7 />
              <Screen8 />
            </div>
          </div>
        </Scene>
      </Controller>
    </div>
  )
};

export default Features