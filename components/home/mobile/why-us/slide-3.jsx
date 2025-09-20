import useInView from '@/components/hooks/inView';
import classNames from 'classnames';
import { useRef } from 'react';

const Slide3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.5);
  return (
    <div className='pb-25'>
      <div
        className='px-5 h-[348px] relative pt-[130px] z-[1]'
        style={{ backgroundImage: 'url(/images/home/mobile/why-us/hotel.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <img src='/images/home/mobile/why-us/slide-2.png' alt='slide-1' className='' width={322} height={319} />
      </div>
      <div className='mt-[136px] text-[16px]/[28px] text-[#1A1A1A] text-center opacity-0'>What is it if you are a partner?</div>
      <div className={classNames('transition-all duration-1000', isInView ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0')} ref={ref}>
        <div className='why-us-title-mobile pl-20 pr-10'>More Than Just Family Transfers</div>
        <div className='mt-4 why-us-description-mobile pl-20 pr-10'>
          Whether you’re paying tuition fees, buying property abroad, investing, or supporting someone - do it from one place.
        </div>
      </div>
    </div>
  );
};

export default Slide3;
