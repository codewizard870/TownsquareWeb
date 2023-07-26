import React, { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function BackgroundText() {
  const ref1 = useRef(null);

  //    useEffect(() => {
  //     ScrollTrigger.create({
  //       trigger: "#feature",
  //       start: "top top+=-3300px",
  //       end: "top top+=-3600px",
  //       onUpdate: (self) => {
  //         if (ref1.current != null && (ref1.current as any).style != null) {
  //           let node = ref1.current as any;
  //           node.style.transform = `translate(calc(-50% - ${100 * self.progress}vw), -50%)`
  //         }
  //       },
  //     });

  //     ScrollTrigger.create({
  //       trigger: "#feature",
  //       start: "top top+=-3900px",
  //       end: "top top+=-4200px",
  //       onUpdate: (self) => {
  //         if (ref1.current != null && (ref1.current as any).style != null) {
  //           let node = ref1.current as any;
  //           node.style.transform = `translate(calc(-50% - 100vw - ${100 * self.progress}vw), -50%)`
  //         }
  //       },
  //     });

  //     ScrollTrigger.refresh();

  //   }, []);
const sticky = document.getElementById("first");
const sticky2 = document.getElementById("feature");
console.log(sticky?.offsetTop, "gggg", sticky2, sticky2?.offsetTop)



  gsap.to(".bg_text", {
    scrollTrigger: {
      trigger: "#first",
      start: "top top+=-9003px",
      end: "top top+=-9601px",
      markers: true,
      toggleActions: "restart none reverse pause",
      scrub: true,
      //horizontal:true,
      
      onLeave:() => {
        const sticky = document.querySelector(".bg_text");
         sticky?.setAttribute("style", "right:10%")
        console.log(sticky, "are you")
      },
      onLeaveBack:() => {
        const sticky = document.querySelector(".bg_text");
        sticky?.setAttribute("style", "right:20%")
        console.log(sticky, "are you 2")
      },
      onEnterBack:() => {
        console.log("are you 3")
      },
      onEnter:() => {
        const sticky = document.querySelector(".bg_text");
        sticky?.setAttribute("style", "right:80%")
        console.log("are onEnter")
      }
    },
    color:"blue"
  });

  // gsap.to(".bg_text", {
  //   scrollTrigger: {
  //     trigger: "#feature",
  //     start: "top top+=-3900px",
  //     markers: true,
  //     toggleActions: "restart none reverse none",
  //   },
   
  // });

  return (
    <div
      ref={ref1}
      className="absolute flex items-start justify-center w-screen h-screen bg_text"
    >
      <p className="text-red-600 text-[167px] whitespace-nowrap">
        Own, spend,social
      </p>
    </div>
  );
}

export default BackgroundText;
