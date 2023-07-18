import React, { useRef, useEffect, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import "./features.css";
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import Background from './background';
import Screen4 from './screen4';
gsap.registerPlugin(ScrollTrigger);

function Features() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2 - 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      console.log("position=", position)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="features-wrapper" id="feature">
      <Controller>
        <Scene duration={5000} pin offset={`${offset}px`}>
          <div className="w-full relative">
            <Background />
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen4 />
          </div>
        </Scene>
      </Controller>
    </div>
  )
}

export default Features