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
      className={`right-panel-menu w-[110%] box-border m-0 md:backdrop-blur-none md:bg-transparent md:w-fit fixed bottom-0 right-[-7.5rem] md:right-[-20px] md:top-1/3 z-50 font-Outfit font-bold text-sm text-[#7F7F7F] transform transition-transform -translate-x-20 ${
        props.stage === "Early" && props.isVisible
          ? "-translate-x-[8.5rem] md:-translate-x-9"
          : props.isVisible
          ? "-translate-x-9"
          : "translate-x-full"
      }`}
    >
    
      <ul className="flex items-baseline justify-between pb-2 space-x-8 list-disc cursor-default md:flex-col md:space-y-2">
        <li
          className={
            props.stage === "Introduction" ? "active text-white text-white/50  text-base" : "cursor-pointer text-white/50 text-base"
          }
          onClick={() => handlePanelClick("homeDiv")}
        >
          Introduction
        </li>
        <li
          className={props.stage === "Vision" ? "active text-white/50 text-base" : "cursor-pointer text-white/50 text-base"}
          onClick={() => handlePanelClick("visionDiv")}
        >
          Vision
        </li>
        <li
          className={props.stage === "Features" ? "active text-white/50 text-base hidden md:list-item" : "cursor-pointer text-white/50 text-base hidden md:list-item"}
          onClick={() => handlePanelClick("feature")}
        >
          Features
        </li>
         <li
          className={props.stage === "FeaturesMobile" ? "active text-white/50 text-base  md:hidden" : "cursor-pointer text-white/50 text-base md:hidden"}
          onClick={() => handlePanelClick("feature_1")}
        >
          Features
        </li>
        <li
          className={props.stage === "Early" ? "active text-white/50 text-base" : "cursor-pointer text-white/50 text-base"}
          style={{whiteSpace: "nowrap"}}
          onClick={() => handlePanelClick("earlyAccessDiv")}
        >
          Get early access
        </li>
      </ul>
    </div>
  );
};

export default RightPanelMenu;
