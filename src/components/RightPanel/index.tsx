import React, { useEffect, useState } from "react";
interface Stage {
  stage: any;
  isVisible: boolean;
}

const RightPanelMenu = (props: Stage) => {
  const handlePanelClick = (title: string) => {
    document
      .getElementById(title)!
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  return (
    <div
      className={`right-panel-menu border-t-2 border-white w-[110%] px-22 md:border-none md:w-fit fixed bottom-0 right-[-7.5rem] md:right-[-20px] md:top-1/3 z-50 font-Outfit font-bold text-sm text-[#7F7F7F] transform transition-transform -translate-x-20 ${
        props.stage === "Early" && props.isVisible
          ? "-translate-x-[8.5rem] md:-translate-x-9"
          : props.isVisible
          ? "-translate-x-9"
          : "translate-x-full"
      }`}
    >
      <div className="backdrop-brightness-50 bg-white/30">

      </div>
      <ul className="flex items-center justify-between space-x-2 list-disc cursor-default md:flex-col md:space-y-2">
        <li
          className={
            props.stage === "Introduction" ? "active" : "cursor-pointer"
          }
          onClick={() => handlePanelClick("homeDiv")}
        >
          Introduction
        </li>
        <li
          className={props.stage === "Vision" ? "active" : "cursor-pointer"}
          onClick={() => handlePanelClick("visionDiv")}
        >
          Vision
        </li>
        <li
          className={props.stage === "Features" ? "active" : "cursor-pointer"}
          onClick={() => handlePanelClick("feature")}
        >
          Features
        </li>
        <li
          className={props.stage === "Early" ? "active" : "cursor-pointer"}
          onClick={() => handlePanelClick("earlyAccessDiv")}
        >
          Get early access
        </li>
      </ul>
    </div>
  );
};

export default RightPanelMenu;
