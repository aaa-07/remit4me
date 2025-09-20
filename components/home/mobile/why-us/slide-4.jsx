import useInView from '@/components/hooks/inView';
import classNames from 'classnames';
import { useRef } from 'react';

const Slide4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.5);
  return (
    <div className='pb-30'>
      <div className='bg-[#F4FFAD] py-10 flex flex-col gap-9 relative z-[1]'>
        <img src='/images/home/mobile/why-us/education.svg' alt='education' width={191} height={56} className='ml-7' />
        <img src='/images/home/mobile/why-us/investment.svg' alt='investment' width={204} height={56} className='ml-[100px]' />
        <img src='/images/home/mobile/why-us/family.svg' alt='family' width={294} height={56} className='ml-9' />
        <img src='/images/home/mobile/why-us/travel.svg' alt='travel' width={146} height={56} className='ml-30' />
        <img src='/images/home/mobile/why-us/gift.svg' alt='gift' width={123} height={56} className='ml-14' />
        <img src='/images/home/mobile/why-us/medical.svg' alt='medical' width={166} height={56} className='ml-27' />
      </div>
      <div className={classNames('transition-all duration-1000', isInView ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0')} ref={ref}>
        <div className='mt-14 why-us-title-mobile pl-20 pr-14'>Transparent from Start to Finish</div>
        <div className='mt-4 why-us-description-mobile pl-20 pr-14'>Know exactly how much your recipient will get before you send, with no hidden surprises.</div>
      </div>
    </div>
  );
};

export default Slide4;
