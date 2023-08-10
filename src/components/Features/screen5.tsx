import { useRef, useMemo } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Screen5() {
  const ref1 = useRef(null);

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2700px",
      end: "top top+=-3000px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(0, ${-30 * self.progress}vh)`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-3300px",
      end: "top top+=-3600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(0, calc(-30vh - ${
            100 * self.progress
          }vh))`;
        }
      },
    });
    ScrollTrigger.refresh();
  }, [ref1]);

  return (
    <>
      <div
        ref={ref1}
        className="absolute"
        style={{ left: "40vw", top: "100vh" }}
      >
        <h1 className="text-[48px] font-bold">
          Own, spend, and social
          <br />
          anytime anywhere
        </h1>
      </div>
    </>
  );
}

export default Screen5;
