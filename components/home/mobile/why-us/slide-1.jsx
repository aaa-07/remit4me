import useInView from '@/components/hooks/inView';
import classNames from 'classnames';
import { useRef } from 'react';

const Slide1 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, 0.5);
  const isInView2 = useInView(ref2, 0.5);
  return (
    <div className={classNames('px-7 bg-[#1f1f1f] pt-20 pb-10')}>
      <div className={classNames('transition-all duration-1000', isInView1 ? 'translate-y-0 opacity-100' : 'translate-y-50 opacity-0')} ref={ref1}>
        <div className='font-medium text-[16px]/[40px] text-white'>Why choose us?</div>
        <div className='text-[36px]/[56px] text-[#E9E9E9]'>A Smarter & secure Way to Send Your Money Across Borders</div>
      </div>
      <div className={classNames('transition-all duration-1000', isInView2 ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0')} ref={ref2}>
        <div className='mt-[140px] pl-13 pr-10 why-us-title-mobile'>End-to-End Simplicity</div>
        <div className='pl-13 pr-10 mt-4 text-[16px]/[28px] text-[#ABABAB]'>
          No multiple logins, branch visits, or paperwork, complete your transfer in one smooth journey, from start to confirmation.
        </div>
      </div>
    </div>
  );
};

export default Slide1;
