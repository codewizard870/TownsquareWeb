import React, { useEffect, useRef, useState } from 'react';
import Waitlist from '../Waitlist';

type Props = {
    isVisible: boolean;
    onClose: () => void;
};

const Transparency: React.FC<Props> = ({ isVisible, onClose }) => {  
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-[1000] animated-slide-in ${isVisible ? 'animated-slide-in' : 'animated-slide-out'}`}>
        
        <Waitlist isModel={true} onClose={onClose} />
    </div>
  );
};

export default Transparency;
