import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Spline2() {
  const ref1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-3300px",
      end: "top top+=-3600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(0, ${150 * self.progress}vh)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-3900px",
      end: "top top+=-4200px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(${30 * self.progress}vw, 150vh)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-4500px",
      end: "top top+=-4800px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(30vw - ${10 * self.progress}vw), calc(150vh + ${20 * self.progress}vh))`
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <img ref={ref1} src="/images/features/spline2.svg" alt='spline2' className="absolute"
      style={{ left: "50%", top: "-100%" }}
    />
  )
}

export default Spline2