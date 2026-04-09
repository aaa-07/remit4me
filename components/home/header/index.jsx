import classNames from 'classnames';
import {Inter} from 'next/font/google';
import {useState, useEffect} from 'react';
import styles from './index.module.css';
import Image from 'next/image';

const inter = Inter({subsets: ['latin']});

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0 || currentScrollY < lastScrollY) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      }

      setLastScrollY(currentScrollY);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={classNames(
        inter.className,
        styles.header,
        'flex items-center text-white transition-transform duration-300',
        lastScrollY === 0 ? '' : 'backdrop-blur-md',
        show ? 'translate-y-0' : '-translate-y-full',
        lastScrollY > 982 && lastScrollY < 6 * screenHeight ? 'bg-[#092929]' : lastScrollY === 0 ? 'bg-transparent' : 'bg-[#ffffff29]'
      )}
    >
      {/* <div className='text-[20px]/[20px] font-bold'>remit4me</div> */}
      <div className='text-[20px]/[20px] font-bold' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} ><Image src='/images/home/R4m-logo.png' alt='remit4me logo' width={200} height={90}/></div>
      {/* <div className='ml-auto text-[16px]/[16px] font-medium'>About us</div> */}
      <div className='text-[16px]/[16px] font-medium mx-6 cursor-pointer ml-auto' onClick={() => window.scrollTo({top: 982, behavior: 'smooth'})}>
        Why choose us
      </div>
      <div className='text-[16px]/[16px] font-medium cursor-pointer' onClick={() => (window.location.href = '#waitlist')}>
        Send money
      </div>
      <div className='flex items-center text-[20px]/[20px] font-medium ml-8 cursor-pointer' onClick={() => (window.location.href = '#partner')}>
        <img src='/images/home/heart.svg' alt='heart' className='mr-2' /> Become a partner
      </div>
    </div>
  );
};

export default Header;
