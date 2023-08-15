import { useRef, useMemo } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function Screen8() {
  const ref1 = useRef(null);

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-4500px",
      end: "top top+=-4800px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - ${100 * self.progress}vw), -50%)`
        }
      },
    });

    // ScrollTrigger.create({
    //   trigger: "#feature",
    //   start: "top top+=-5100px",
    //   end: "top top+=-5400px",
    //   onUpdate: (self) => {
    //     if (ref1.current != null && (ref1.current as any).style != null) {
    //       let node = ref1.current as any;
    //       node.style.transform = `translate(calc(-50% - 100vw - ${100 * self.progress}vw), -50%)`
    //     }
    //   },
    // });

    ScrollTrigger.refresh();
  }, [ref1]);

  return (
    <div ref={ref1} className="absolute w-[740px] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center" style={{ left: "150vw", top: `50vh` }}>
      <img src="/images/features/feature9.png" alt='feature9' loading="lazy"/>
      <span className="text-[32px] font-medium text-center pt-10">
      Experience boundless possibilities with your on-chain verifiable identity – gain exclusive event access, exciting airdrop rewards, and in-app perks!
      </span>
    </div>
  )
}

export default Screen8