import Image from 'next/image';
import styles from './hero.module.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    // setInterval(() => {
    //   setShow(!show);
    // }, 5000);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <div className='relative h-full'>
          <h1 className='text-[126px]/[154px] font-[900] uppercase text-white opacity-90 absolute top-[100px] left-[138px] z-[1]'>
            Send money <br /> at ease{' '}
          </h1>
          <div className='text-[28px]/[40px] font-medium text-white absolute top-[460px] left-[138px] z-[1]'>
            Whether for education, <br /> family, or investments, send
            <br /> money worldwide with <br />
            clarity and trust.
          </div>
          <Image src='/images/home/graduate.png' alt='Graduate' width={753} height={753} className={classNames('absolute bottom-0 left-1/2 translate-x-[-50%]', styles.graduate)} />
          <Image
            src='/images/home/graduate-family.png'
            alt='Graduate Family'
            width={1121}
            height={753}
            className={classNames('absolute bottom-0 left-1/2 translate-x-[-50%]', styles.graduateFamily)}
          />

          {/* <img src='/images/home/1.png' alt='arrow' width={730} height={730} className={classNames(styles.first, 'absolute bottom-0 left-1/2 translate-x-[-50%]')} />
          <img src='/images/home/2.png' alt='arrow' width={730} height={730} className={classNames(styles.second, 'absolute bottom-0 left-1/2 translate-x-[-50%]')} />
          <img src='/images/home/1.svg' alt='arrow' width={363} height={83} className={classNames(styles.third, 'absolute z-[2] bottom-[300px] left-1/2 translate-x-[-50%]')} />
          <img src='/images/home/2.svg' alt='arrow' width={363} height={83} className={classNames(styles.fourth, 'absolute z-[2] bottom-[300px] left-1/2 translate-x-[-50%]')} /> */}
          <Image src='/images/home/line.svg' alt='line' width={543} height={666} className='absolute bottom-0 left-1/2 translate-x-[-50%]' />
          <button
            className='bg-white text-[#232C43] rounded-[36px] font-bold text-[18px] mx-auto h-[55px] w-[280px] absolute bottom-[140px] left-1/2 translate-x-[-50%] z-[2] cursor-pointer'
            onClick={() => (window.location.href = '#waitlist')}
          >
            Send money
          </button>
          <div className={classNames('absolute bottom-0 left-0 w-full  z-[2]', scrollY > 982 ? 'bg-white' : 'bg-[#1f1f1f]')} style={{ height: `${Math.min(scrollY, 982)}px` }} />
        </div>
      </div>
    </>
  );
};

export default Hero;
