import useInView from '@/components/hooks/inView';
import classNames from 'classnames';
import { useRef } from 'react';

const Slide6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.5);
  return (
    <div className='pb-35'>
      <div className='h-[315px] bg-[#C3FFAD] relative z-[1]'>
        <img src='/images/home/mobile/why-us/student.png' alt='slide-6' width={358} height={358} className='absolute bottom-0 left-1/2 -translate-x-1/2' />
      </div>
      <div className={classNames('transition-all duration-1000', isInView ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0')} ref={ref}>
        <div className='mt-14 why-us-title-mobile pl-20 pr-10'>Transfer globally without friction</div>
        <div className='mt-4 why-us-description-mobile pl-20 pr-10'>
          Whether you're paying tuition fees, buying property abroad, investing, or supporting someone - do it from one place.
        </div>
      </div>
    </div>
  );
};

export default Slide6;
