import { useRef, useMemo, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { images } from "../../constants/images";
import Marquee from "react-fast-marquee";

function Screen1() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-200px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.opacity = 1 - self.progress * 1;
          node.style.transform = `translate(-50%, ${-45 * self.progress}vh)`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-200px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.transform = `translate(calc(-50% - ${
            20 * self.progress
          }vw), calc(-50% - ${510 * self.progress}px + ${
            25 * self.progress
          }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-300px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.transform = `translate(calc(${-120 * self.progress}vw + ${
            230 * self.progress
          }px), -50%)`;
        }
      },
    });

    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-800px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.transform = `translate(calc(-50% - 20vw - ${
            100 * self.progress
          }vw), calc(-50% - 510px + 25vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-800px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.transform = `translate(calc(-120vw + 235px - ${
            100 * self.progress
          }vw), calc(-50%))`;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  // useEffect(() => {
  //   window.scrollTo({ 
  //     top: ref4?.current?.offsetTop | , 
  //     behavior: "smooth" 
  //   });
  
    
  // }, [])
  

  return (
    <>
      <div
        ref={ref1}
        className="absolute w-[340px] flex flex-col left-1/2 -translate-x-1/2 top-[25vh]"
      >
        <h1 className="text-3xl font-semibold text-center">Introducing</h1>
        <div className="flex items-center self-center gap-4">
          <img src={images.logo} alt="logo" className="w-12 h-12" />
          <h2 className="text-[40px] font-bold">TowneSquare</h2>
        </div>
        <img
          src="/images/financial_img.png"
          alt="sign"
          className="self-center space-squiggle"
        />
      </div>

      {/* <img ref={ref2} src="/images/features/feed.svg" alt='feature1' className="absolute w-[300px] self-center  -translate-x-1/2 -translate-y-1/2"
        style={{ left: `50vw`, top: `calc(25vh + 510px)` }}
      /> */}

      <div
        ref={ref2}
        // src="/images/features/feed.svg"
        // alt="feature1"
        className="absolute h-[635px] self-center hover:cursor-move overflow-y-scroll overscroll-contain  -translate-x-1/2 -translate-y-1/2"
        style={{ left: `50vw`, top: `calc(25vh + 510px)` }}
      >
       
        <div ref={ref4} className="relative h-fit">
           <div className="sticky top-0 left-0 right-0 z-50 w-full h-full">
            <img className="w-full h-full " src="/images/features/feed_m.svg" />
            {/* Contacts */}
          </div>
          <div className="sticky top-0 z-40 m-0">
            <img className="h-full" src="/images/features/For_You.svg" />
          </div>
          {/* <div className="sticky bottom-0 left-0 right-0 z-50 w-full h-full">
           
            Contacts
          </div> */}
        </div>
      </div>
      <div
        ref={ref3}
        className="absolute w-[500px] -translate-y-1/2"
        style={{ left: `150vw`, top: `50vh` }}
      >
        <h1 className="contextual-title">Contextual Social Feed</h1>
        <span className="townesquare-text-base">
          TowneSquare feed enables context-specific features for each post to
          maximize utility for viewers. Users can seamlessly transition between
          finance and social experience in one user-friendly feed.
        </span>
      </div>
    </>
  );
}

export default Screen1;
