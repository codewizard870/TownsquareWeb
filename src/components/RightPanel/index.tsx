import React, { useEffect, useRef, useState } from 'react';
interface Stage {
    stage: any;
    isVisible: boolean;
}

const RightPanelMenu = (props: Stage) => {
  return (
    <div className={`right-panel-menu fixed right-[-20px] top-1/3 z-50 font-Outfit font-bold text-sm text-[#7F7F7F] transform transition-transform -translate-x-20 ${
        props.isVisible ? '-translate-x-9' : 'translate-x-full'
      }`}>
      <ul className='space-y-4 list-disc'>
        <li className={props.stage === 'Introduction' ? 'active' : ''}>Introduction</li>
        <li className={props.stage === 'Vision' ? 'active' : ''}>Vision</li>
        <li className={props.stage === 'Features' ? 'active' : ''}>Features</li>
        <li className={props.stage === 'Early' ? 'active' : ''}>Get early access</li>
      </ul>
    </div>
  );
};

export default RightPanelMenu;
