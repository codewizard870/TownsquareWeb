import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Spline3() {
  const ref1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-3300px",
      end: "top top+=-3600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(0, ${100 * self.progress}vh)`
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
          node.style.transform = `translate(${20 * self.progress}vw, 100vh)`
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <img ref={ref1} src="/images/features/spline3.svg" alt='spline3' className="absolute"
      style={{ right: "0", top: "-100%" }}
    />
  )
}

export default Spline3