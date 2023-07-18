import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Screen2() {
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-900px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.opacity = self.progress;
          node.style.transform = `translate(calc(${-80 * self.progress}vw), 0vh)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-900px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.opacity = self.progress;
          node.style.transform = `translate(calc(${-75 * self.progress}vw), 0px)`
        }
      },
    });

    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1500px",
      end: "top top+=-1800px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(calc(-80vw - ${50 * self.progress}vw), ${50 * self.progress}vh)`
        }
      },
    });

    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1500px",
      end: "top top+=-1800px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(calc(-75vw - ${50 * self.progress}vw), ${50 * self.progress}vh)`
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <img ref={ref2} src="/images/features/feature2.svg" alt='feature1' className="absolute w-[300px] self-center -translate-x-1/2 opacity-0"
        style={{ left: "100vw", top: `10vh` }}
      />
      <div ref={ref3} className="absolute w-[500px] opacity-0"
        style={{ left: `120vw`, top: `15vh` }}
      >
        <h1 className="text-[40px] font-bold">
          One-click community onboarding
        </h1>
        <span className="text-2xl">
          Users now have to hop between multiple platforms to access the full offerings of a community.
          <br/><br/>
          Community members on TowneSquare can access community servers with their token or NFT in just
          one-click. It also allows non-token communities to be created with the same full suite of features from governance to townhall spaces.
        </span>
      </div>
    </>
  )
}

export default Screen2