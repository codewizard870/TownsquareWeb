import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Text1() {
  const ref1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-3300px",
      end: "top top+=-3600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(${110 * self.progress}vw, 10vh)`
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
          node.style.transform = `translate(calc(110vw + ${10 * self.progress}vw), 10vh)`
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
          node.style.transform = `translate(calc(120vw + ${10 * self.progress}vw), 10vh)`
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <img ref={ref1} src="/images/text_own.svg" alt='text_own' className="fixed"
      style={{ left: "-60%", top: "30%" }}
    />
  )
}

export default Text1