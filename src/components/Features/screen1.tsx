import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { images } from '../../constants/images';

function Screen1() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-7000px",
      end: "top top+=-7300px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(-50%, ${-200 * self.progress}px)`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-7000px",
      end: "top top+=-7300px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.transform = `translate(calc(-50% - ${300 * self.progress}px), ${-250 * self.progress}px)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-7000px",
      end: "top top+=-7300px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.opacity = self.progress;
          node.style.transform = `translate(calc(${-800 * self.progress}px), 0px)`
        }
      },
    });

    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-7600px",
      end: "top top+=-7900px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(calc(-50% - 300px - ${400 * self.progress}px), ${-250 + 500 * self.progress}px)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-7600px",
      end: "top top+=-7900px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(calc(-800px - ${400 * self.progress}px), ${500 * self.progress}px)`
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div ref={ref1} className="absolute w-[340px] flex flex-col left-1/2 -translate-x-1/2 top-0">
        <h1 className="text-3xl  font-semibold text-center">Introducing</h1>
        <div className="flex gap-4 self-center items-center">
          <img src={images.logo} alt="logo" className="w-12 h-12" />
          <h2 className="text-[40px] font-bold">Townsquare</h2>
        </div>
        <img src="/images/financial_img.png" alt="sign" className="self-center" />
      </div>
      <img ref={ref2} src="/images/features/feed.svg" alt='feature1' className="absolute w-[300px] self-center mt-10 -translate-x-1/2"
        style={{ left: `50%`, top: `160px` }}
      />
      <div ref={ref3} className="absolute w-[500px] opacity-0"
        style={{ left: `1500px`, top: `150px` }}
      >
        <h1 className="text-[40px] font-bold">
          Contextual social feed
        </h1>
        <span className="text-2xl">
          TowneSquare feed enables context-specific features for each post to maximize utility for viewers. Users can seamlessly transition between finance and social experience in one user-friendly feed.
        </span>
      </div>
    </>
  )
}

export default Screen1