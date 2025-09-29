import classNames from 'classnames';
import styles from './index.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={classNames('h-[844px] relative', styles.hero)}>
      <div className='text-[40px]/[56px] font-extrabold absolute top-[134px] left-[28px] z-[1] text-white opacity-90 uppercase'>
        Send money <br /> at ease
      </div>
      <div className='text-[20px]/[32px]  absolute top-[266px] left-[28px] z-[1] text-white'>
        Whether for education,
        <br /> family, or investments, send <br />
        money worldwide with clarity
        <br /> and trust.
      </div>
      <Image
        src='/images/home/mobile/graduate.png'
        alt='Graduate'
        width={390}
        height={502}
        className={classNames('absolute bottom-0 left-1/2 translate-x-[-50%]', styles.graduate)}
      />
      <Image
        src='/images/home/mobile/graduate-family.png'
        alt='Graduate Family'
        width={390}
        height={403}
        className={classNames('absolute bottom-0 left-1/2 translate-x-[-50%]', styles.graduateFamily)}
      />
      {/* <img
        src='/images/home/mobile/student.png'
        alt='hero'
        width={390}
        height={523}
        className={classNames(styles.first, 'absolute bottom-0 left-1/2 translate-x-[-50%] max-w-none')}
      />
      <img
        src='/images/home/mobile/business.png'
        alt='hero'
        width={390}
        height={523}
        className={classNames(styles.second, 'absolute bottom-0 left-1/2 translate-x-[-50%] max-w-none')}
      />
      <img src='/images/home/1.svg' alt='arrow' width={363} height={83} className={classNames(styles.third, 'absolute z-[2] bottom-[200px] left-1/2 translate-x-[-50%]')} />
      <img src='/images/home/2.svg' alt='arrow' width={363} height={83} className={classNames(styles.fourth, 'absolute z-[2] bottom-[200px] left-1/2 translate-x-[-50%]')} /> */}
      <button
        className='bg-white text-[#232C43] block mb-4 rounded-[36px] font-bold text-[18px] mx-auto h-[55px] w-[280px] sticky z-[2] cursor-pointer'
        style={{top: 'calc(100vh - 100px)'}}
        onClick={() => (window.location.href = '#waitlist-mobile')}
      >
        Send money
      </button>
    </div>
  );
};

export default Hero;
