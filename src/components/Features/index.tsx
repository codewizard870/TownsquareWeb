import { gsap } from 'gsap';
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Features() {
  return (
    <div className='features component' data-component="Features">
      <Tween
        to={{
          x: '300px',
          scrollTrigger: {
            trigger: '.square',
            start: '-200px center',
            end: '200px center',
            scrub: 0.5,
          },
        }}
      >
        <div className="square" style={{ width: '100px', height: '100px', background: '#ccc' }} />
      </Tween>
    </div>
  )
};

export default Features