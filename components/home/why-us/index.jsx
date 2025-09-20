import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import Slide1 from './slide-1';
import Slide2 from './slide-2';
import Slide3 from './slide-3';
import Slide4 from './slide-4';
import Slide5 from './slide-5';
import Slide6 from './slide-6';
import Slide7 from './slide-7';
import Connector, { BlackConnector, WhiteConnector } from './connector';

const WhyUs = ({ exchangeRate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const ref = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const scrollPercent = 982 + top < 0 ? Math.abs(982 + top) / (ref.current.scrollHeight - 982 - window.innerHeight) : 0;

      setScrollWidth(ref2.current.scrollWidth);
      setScrollY(window.scrollY);
      setScreenWidth(window.innerWidth);
      // const scrollPercent = top < 0 ? Math.abs(top) / (ref.current.scrollHeight - window.innerHeight) : 0;
      setScrollPercentage(Math.min(scrollPercent, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.whyUs} ref={ref} style={{ zIndex: scrollY > 482 ? 1 : -1 }}>
      <div className='sticky top-0 h-screen overflow-x-hidden'>
        <div className='flex w-[14867px]' style={{ transform: `translateX(-${scrollPercentage * (scrollWidth - screenWidth)}px)` }} ref={ref2}>
          <Slide1 scrollY={scrollY} />
          <Slide2 scrollPercentage={scrollPercentage} />
          <Slide3 scrollPercentage={scrollPercentage} />
          <Slide4 scrollPercentage={scrollPercentage} />
          <Slide5 scrollPercentage={scrollPercentage} exchangeRate={exchangeRate} />
          <Slide6 scrollPercentage={scrollPercentage} />
          <Slide7 scrollPercentage={scrollPercentage} />
          {scrollY > 982 && (
            <>
              <div className='absolute top-1/2 left-[860px] -translate-y-1/2 z-[1]'>
                <BlackConnector />
              </div>
              <div className='absolute top-1/2 left-[3330px] -translate-y-1/2 z-[1]'>
                <WhiteConnector />
              </div>
              <div className='absolute top-1/2 left-[5472px] -translate-y-1/2 z-[1]'>
                <WhiteConnector />
              </div>
              <div className='absolute top-1/2 left-[8200px] -translate-y-1/2 z-[1]'>
                <WhiteConnector />
              </div>
              <div className='absolute top-1/2 left-[10175px] -translate-y-1/2 z-[1]'>
                <WhiteConnector />
              </div>
              <div className='absolute top-1/2 left-[12192px] -translate-y-1/2 z-[1]'>
                <WhiteConnector />
              </div>
              <img src='/images/home/why-us/line.svg' alt='bg' className='absolute top-1/2 left-[860px] h-[1px]' />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
