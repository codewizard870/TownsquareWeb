import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Spline1() {
  const ref1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-3300px",
      end: "top top+=-3600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(${50 * self.progress}vw, ${10 * self.progress}vh)`
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
          node.style.transform = `translate(calc(50vw - ${30 * self.progress}vw), 10vh)`
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
          node.style.transform = `translate(calc(20vw + ${30 * self.progress}vw), calc(10vh - ${10 * self.progress}vh))`
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <img ref={ref1} src="/images/features/spline1.svg" alt='spline1' className="absolute"
      style={{ left: "-50%", top: "-5%" }}
    />
  )
}

export default Spline1