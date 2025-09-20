import classNames from 'classnames';
import styles from './index.module.css';
import { useEffect, useState, useRef } from 'react';

const Journey = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const ref = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      //   console.log(ref.current.getBoundingClientRect().top);
      //   console.log(ref2.current.getBoundingClientRect().top);
      //   console.log(ref2.current.scrollWidth);
      setScreenWidth(window.innerWidth);
      const top = ref2.current.getBoundingClientRect().top;
      const scrollPercent = top < 0 ? Math.abs(top) / (ref2.current.scrollHeight - window.innerHeight) : 0;
      setScrollPercentage(Math.min(scrollPercent, 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='' ref={ref}>
      {/* <div className='text-[64px]/[92px] text-center text-[#1f1f1f]'>
        Your simplified journey to <br /> send money across the globe
      </div> */}
      <div className='h-full bg-[#092929]'>
        <div className='text-[64px]/[92px] text-center text-white font-extrabold pt-[155px]'>
          Your simplified journey to <br /> send money across the globe
        </div>
        <div className='text-[24px]/[42px] text-center text-white mt-10'>
          From deciding the amount to confirming delivery - every stage is designed <br /> to be simple, transparent, and fast. Here’s exactly how it happens.
        </div>
        <div className='pt-[calc(50vh-200px)] h-[200vh] relative' ref={ref2}>
          <div className={classNames('overflow-x-hidden w-full', { 'sticky top-[calc(50vh-200px)]': scrollPercentage > 0 })}>
            <div className={classNames('flex w-[2000px] relative', styles.cards)} style={{ transform: `translateX(-${scrollPercentage * (2000 - screenWidth)}px)` }}>
              <div className={classNames(styles.card, 'w-[400px] h-[526px] border-r-[#028E75] border-r-[1px]')}>
                <div className={classNames(styles.number)}>01</div>
                <div className={classNames(styles.title, 'text-[#028E75]')}>Enter Amount & Route</div>
                <div className={classNames(styles.content)}>
                  Start your transfer by entering how much you want to send, selecting the country you’re sending from and the country you’re sending to. See the live exchange
                  rate, fees, and exact amount the recipient will get - all before you begin.
                </div>
              </div>
              <div className={classNames(styles.card, 'w-[400px] h-[526px] border-r-[#028E75] border-r-[1px]')}>
                <div className={classNames(styles.number)}>02</div>
                <div className={classNames(styles.title, 'text-[#028E75]')}>Add Recipient Details</div>
                <div className={classNames(styles.content)}>
                  Provide your recipient’s name, bank details, and the reason for your transfer - whether it’s tuition fees, travel, investments, or family support. Save these
                  details securely for faster repeat transfers.
                </div>
              </div>
              <div className={classNames(styles.card, 'w-[400px] h-[526px] border-r-[#028E75] border-r-[1px]')}>
                <div className={classNames(styles.number)}>03</div>
                <div className={classNames(styles.title, 'text-[#028E75]')}>Complete KYC Online</div>
                <div className={classNames(styles.content)}>
                  Upload your ID and supporting documents through our secure, encrypted portal. Get verified online - no branch visits or paperwork delays.{' '}
                </div>
              </div>
              <div className={classNames(styles.card, 'w-[400px] h-[526px] border-r-[#028E75] border-r-[1px]')}>
                <div className={classNames(styles.number)}>04</div>
                <div className={classNames(styles.title, 'text-[#028E75]')}>Review & Confirm</div>
                <div className={classNames(styles.content)}>
                  Check all details - amount, fees, recipient info, and delivery time - in one clear summary. Once you’re satisfied, confirm your transfer with a single {' '}
                </div>
              </div>
              <div className={classNames(styles.card, 'w-[400px] h-[526px]')}>
                <div className={classNames(styles.number)}>05</div>
                <div className={classNames(styles.title, 'text-[#028E75]')}>Track & Get Confirmation</div>
                <div className={classNames(styles.content)}>
                  Follow your transfer in real-time from “Processing” to “Delivered.” Get instant updates via email or SMS when the funds arrive.{' '}
                </div>
              </div>
              <div
                className='absolute h-full bg-[#F0FFC4] z-[-1]'
                style={{ width: `${scrollPercentage * 2 * 100}%`, borderTopRightRadius: '300px', borderBottomRightRadius: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
