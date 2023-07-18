import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Background() {
  const ref2 = useRef(null);

  useEffect(() => {

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <img ref={ref2} src="/images/features/right_web.svg" alt='feature1' className="absolute"
        style={{ right: "-50px", top: "-600px" }}
      />
    </>
  )
}

export default Background