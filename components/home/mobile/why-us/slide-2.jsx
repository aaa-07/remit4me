import useInView from '@/components/hooks/inView';
import classNames from 'classnames';
import { useRef } from 'react';

const Slide2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.5);
  return (
    <div className='pb-12'>
      <div className='px-5 bg-[#289B85] h-[224px] relative pt-[42px] z-[1]'>
        <img src='/images/home/mobile/why-us/slide-1.png' alt='slide-1' className='' width={319} height={338} />
      </div>
      <div className='mt-[200px] text-[16px]/[28px] text-[#1A1A1A] text-center opacity-0'>What is it if you are a partner?</div>
      <div className={classNames('transition-all duration-1000', isInView ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0')} ref={ref}>
        <div className='why-us-title-mobile pl-20 pr-10'>Backed by trusted top banks</div>
        <div className='mt-4 why-us-description-mobile pl-20 pr-10'>Your money moves through authorised banks, fully compliant with RBI regulations.</div>
        <div className='mt-8 flex items-center gap-4 pl-20'>
          <img src='/images/home/mobile/why-us/icici.png' alt='icici' width={82} height={83} />
          <img src='/images/home/mobile/why-us/sbi.png' alt='sbi' width={123} height={83} />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
