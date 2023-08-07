import React from 'react';
import Waitlist from '../Waitlist';

type Props = {
    isVisible: boolean;
    isJoinAppear: boolean;
    onClose: () => void;
};

const Transparency: React.FC<Props> = ({ isJoinAppear, isVisible, onClose }) => {  
  return (
    <>
      {
        isJoinAppear ?
          <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-[1000] ${isVisible ? 'animated-slide-in' : 'animated-slide-out'}`}>
              <Waitlist isModel={true} onClose={onClose} />
          </div>
          :
          null
      }
    </>
  );
};

export default Transparency;
