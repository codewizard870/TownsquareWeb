import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Screen2() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-7600px",
      end: "top top+=-7900px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.opacity = self.progress;
          node.style.transform = `translate(calc(${-1200 * self.progress}px), ${-250 * self.progress}px)`
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
          node.style.opacity = self.progress;
          node.style.transform = `translate(calc(${-1300 * self.progress}px), 0px)`
        }
      },
    });

    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-8200px",
      end: "top top+=-8500px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(calc(-1200px - ${400 * self.progress}px), ${-250 + 500 * self.progress}px)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-8200px",
      end: "top top+=-8500px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.opacity = 1 - self.progress;
          node.style.transform = `translate(calc(-1300px - ${400 * self.progress}px), ${500 * self.progress}px)`
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <img ref={ref2} src="/images/features/feature2.svg" alt='feature1' className="absolute w-[300px] self-center mt-10 -translate-x-1/2 opacity-0"
        style={{ left: "1500px", top: `160px` }}
      />
      <div ref={ref3} className="absolute w-[500px] opacity-0"
        style={{ left: `2000px`, top: `60px` }}
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