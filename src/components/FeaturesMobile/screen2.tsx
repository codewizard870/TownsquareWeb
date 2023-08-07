import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Screen2() {
  const ref1 = useRef(null);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: "#feature",
  //     start: "top top+=-900px",
  //     end: "top top+=-1200px",
  //     onUpdate: (self) => {
  //       if (ref1.current != null && (ref1.current as any).style != null) {
  //         let node = ref1.current as any;
  //         node.style.opacity = self.progress;
  //         node.style.transform = `translate(calc(-50% - ${50 * self.progress}vw), -50%)`
  //       }
  //     },
  //   });

  //   ScrollTrigger.create({
  //     trigger: "#feature",
  //     start: "top top+=-1500px",
  //     end: "top top+=-1800px",
  //     onUpdate: (self) => {
  //       if (ref1.current != null && (ref1.current as any).style != null) {
  //         let node = ref1.current as any;
  //         node.style.opacity = 1 - self.progress;
  //         node.style.transform = `translate(calc(-50% - 50vw - ${50 * self.progress}vw), calc(-50% + ${50 * self.progress}vh))`
  //       }
  //     },
  //   });

  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/images/features/feature2.svg" alt="feature2" />
      <div className="px-4 mt-[32px]">
        <h1 className="text-[30px]  font-bold">
          One-click community onboarding
        </h1>
        <p className="text-[18px] font-normal leading-[30px]">
          Users now have to hop between multiple platforms to access the full
          offerings of a community.
        </p>
        <p>
          Community members on TowneSquare can access community servers with
          their token or NFT in just one-click. It also allows non-token
          communities to be created with the same full suite of features from
          governance to townhall spaces.
        </p>
      </div>
    </div>
  );
}

export default Screen2;
