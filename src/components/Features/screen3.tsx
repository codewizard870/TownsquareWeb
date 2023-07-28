import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function Screen3() {
  const ref1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1500px",
      end: "top top+=-1800px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - ${100 * self.progress}vw), -50%)`
        }
      },
    });
    
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2100px",
      end: "top top+=-2400px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - 100vw - ${100 * self.progress}vw), calc(-50% + ${100 * self.progress}vh))`
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={ref1} className="absolute flex items-center gap-[75px] -translate-x-1/2 -translate-y-1/2"
      style={{ left: "150vw", top: `50vh`, minWidth: "1000px" }}
    >
      <img src="/images/features/feature3.svg" alt='feature3' className="min-w-[300px]" />
      <div>
        <h1 className="text-[40px] leading-[50px] font-bold">
          An easy-to-use<br /> Web3 identity frontend
        </h1>
        <p className="text-[22px] leading-[34px] font-[400] mt-4">
          Your user profile on TowneSquare is an identity system that seamlessly connects on-chain credentials, NFT membership, and other verifiable experiences to enable new use cases such as ticketing, reward drops, and authentication services.
        </p>
      </div>
    </div>
  )
}

export default Screen3