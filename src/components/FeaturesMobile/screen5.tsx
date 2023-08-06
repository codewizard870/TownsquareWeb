import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Screen5() {
  const ref1 = useRef(null);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: "#feature",
  //     start: "top top+=-2700px",
  //     end: "top top+=-3000px",
  //     onUpdate: (self) => {
  //       if (ref1.current != null && (ref1.current as any).style != null) {
  //         let node = ref1.current as any;
  //         node.style.transform = `translate(0, ${-30 * self.progress}vh)`
  //       }
  //     },
  //   });
  //   ScrollTrigger.create({
  //     trigger: "#feature",
  //     start: "top top+=-3300px",
  //     end: "top top+=-3600px",
  //     onUpdate: (self) => {
  //       if (ref1.current != null && (ref1.current as any).style != null) {
  //         let node = ref1.current as any;
  //         node.style.transform = `translate(0, calc(-30vh - ${100 * self.progress}vh))`
  //       }
  //     },
  //   });
  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <>
      <div  className='flex flex-col items-center py-24 mx-3 rounded-3xl justify-center h-full bg-[#5E409E]'>
        <h1 className="text-[27px] text-center font-bold">
          Own, spend, and social<br/>anytime anywhere
        </h1>
        <img src='/images/features/feature_sign.svg'/>
      </div>
    </>
  )
}

export default Screen5