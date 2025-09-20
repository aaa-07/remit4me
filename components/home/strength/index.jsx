import classNames from 'classnames';
import { useEffect, useState, useRef } from 'react';
import styles from './index.module.css';

const Strength = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const ref = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current.getBoundingClientRect().top > 0) {
        return;
      }
      const scrollPercent = ref.current.getBoundingClientRect().top / (ref.current.getBoundingClientRect().height - 1460);
      setScrollPercentage(Math.min(Math.abs(scrollPercent), 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // console.log('🚀 ~ Strength ~ scrollPercentage:', scrollPercentage);

  return (
    <>
      <div className='bg-[#1F1F1F] text-white pb-[100px] h-[250vh]' ref={ref}>
        <div className={classNames('max-w-[1512px] mx-auto sticky top-0', scrollPercentage === 1 ? styles.shield : '')}>
          <div className='flex relative'>
            <div className='ml-[160px] pt-[370px]'>
              <div
                className='mb-10 font-semibold absolute'
                style={{
                  top: `${400 - scrollPercentage * 260}px`,
                  fontSize: `${96 - scrollPercentage * 48}px`,
                  lineHeight: `${128 - scrollPercentage * 64}px`,
                  left: `${160}px`
                }}
              >
                The Strength of Top <br /> Banks, The Simplicity
                <br /> of One Platform
              </div>
              <div className={classNames('text-[24px]/[40px] transition-all duration-300', { 'opacity-0': scrollPercentage < 1 })}>
                Every transfer you make travels
                <br /> through RBI - Authorised AD-I <br />
                banks, wrapped in bank-grade <br />
                encryption and constant
                <br /> monitoring.
              </div>
            </div>
            <div className={classNames('transition-all duration-300', { 'opacity-0': scrollPercentage < 1 }, scrollPercentage < 1 ? 'ml-[200px]' : 'ml-[160px]')}>
              <div className='ml-[160px] pl-7 pb-[60px] pt-[220px] border-l-[1px] border-l-[#363636] border-b-[1px] border-b-[#363636]'>
                <div className='text-[24px]/[40px] font-semibold mb-3'>Backed by AD-I Bank Partners</div>
                <div className='text-[18px]/[28px] font-medium text-[#C5C5C5]'>
                  Every rupee you send moves through <br />
                  regulated, authorised banks that meet
                  <br /> the highest security and compliance
                  <br />
                  standards.
                </div>
              </div>
              <div className='ml-[300px] pl-7 pb-[60px] pt-20 border-l-[1px] border-l-[#363636]'>
                <div className='text-[24px]/[40px] font-semibold mb-3'>Bank-Grade Encryption</div>
                <div className='text-[18px]/[28px] font-medium text-[#C5C5C5]'>
                  From the moment you initiate a<br /> transfer, your data and money are
                  <br /> encrypted end-to-end - making <br />
                  interception virtually impossible.
                </div>
              </div>

              <div className='ml-[200px] pl-7 pb-[60px] pt-20 border-l-[1px] border-l-[#363636]  border-t-[1px] border-t-[#363636]'>
                <div className='text-[24px]/[40px] font-semibold mb-3'>24/7 Transaction Monitoring</div>
                <div className='text-[18px]/[28px] font-medium text-[#C5C5C5]'>
                  Our systems and partner banks’
                  <br /> security teams work round the clock to
                  <br /> detect and stop suspicious activity <br />
                  before it happens.{' '}
                </div>
              </div>

              <div className='pl-7 pb-[60px] pt-20 border-l-[1px] border-l-[#363636] border-b-[1px] border-b-[#363636] border-t-[1px] border-t-[#363636]'>
                <div className='text-[24px]/[40px] font-semibold mb-3'>Fully Compliant by Design</div>
                <div className='text-[18px]/[28px] font-medium text-[#C5C5C5]'>
                  You automatically inherit complete <br />
                  RBI compliance and audit readiness - <br />
                  no extra legal or tech effort required
                  <br /> on your part.{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strength;
