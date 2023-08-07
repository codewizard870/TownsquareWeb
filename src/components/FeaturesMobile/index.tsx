import React, { useRef, useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./features.css";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import BackgroundRight from "./background_right";
import Screen4 from "./screen4";
import Screen5 from "./screen5";
gsap.registerPlugin(ScrollTrigger);

function FeaturesMobile() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log("position=", position)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let percentage = 0;
  const transform = () => {
    const sticky = document.querySelector(".feature-sticky");
    const offSetTop = sticky?.parentElement?.offsetTop;
    const scrollSection = sticky?.querySelector(".scroll_section");
    let value = 0;
    let limit = 400;
    if (window.innerWidth < 768) {
      limit = 600;
    }

    if (offSetTop !== undefined) {
      value = ((window.scrollY - offSetTop) / window.innerHeight) * 100;
      percentage = value < 0 ? 0 : value > limit ? limit : value;
    }
    scrollSection?.setAttribute(
      "style",
      `transform:translate3d(${-percentage}vw, 0, 0)`
    );
  };

  window.addEventListener("scroll", (e) => {
    transform();
  });

  return (
    <div className="bg-black md:hidden" id="feature_1" data-component="FeaturesMobile">
      <Controller>
        <Scene duration={1000} pin>
          <div className="w-full">
            <BackgroundRight />
            <Screen1 />
            {/* <Splin /> */}
          </div>
        </Scene>
      </Controller>
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <div className="h-[300vh] mt-20">
        <div className=" bg-[#5E409E] bg-feature-line bg-no-repeat sticky feature-sticky overflow-hidden top-0 h-[100vh]">
          <div className="relative scroll_section h-[100%] w-[300vw] will-change-transform gap-x-[4.5rem] flex">
            <div className="flex flex-col items-center justify-center w-screen h-screen mx-8">
              <img src="/images/features/feature_mobile_1.svg" alt="feature7" />
              <p className="text-[18px] mx-6 mt-20 font-medium text-center">
                Self-bank yourself with crypto payments that can go to anyone
                anywhere you want
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-screen h-screen mx-8">
              <img className="" src="/images/features/feature_mobile_2.svg" alt="feature7" />
              <p className="text-[18px] mt-20 font-medium text-center">
                Discover new friends, communities, creators, and on-chain items
                based on your interests
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-screen h-screen">
              <img className="" src="/images/features/feature9.svg" alt="feature9" />
              <p className="text-[18px] mt-20 font-medium text-center">
                Experience boundless possibilities with your on-chain verifiable
                identity – gain exclusive event access, exciting airdrop
                rewards, and in-app perks!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesMobile;
