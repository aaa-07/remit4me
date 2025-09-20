import useInView from '@/components/hooks/inView';
import classNames from 'classnames';
import { useRef } from 'react';

const Journey = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const isInView1 = useInView(ref1, 1);
  const isInView2 = useInView(ref2, 0.5);
  const isInView3 = useInView(ref3, 0.5);
  const isInView4 = useInView(ref4, 0.5);
  const isInView5 = useInView(ref5, 0.5);
  const isInView6 = useInView(ref6, 0.5);
  return (
    <div className='bg-[#092929] px-11 py-30 flex flex-col items-center overflow-x-hidden'>
      <div
        className={classNames('text-[36px]/[52px] font-bold text-white transition-all duration-1000', isInView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24')}
        ref={ref1}
      >
        Your simplified journey to send money across the globe
      </div>
      <div className={classNames('flex mt-22 mb-12 w-full transition-all duration-1000', isInView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24')} ref={ref2}>
        <div className='text-[24px]/[36px] text-[#ABABAB] pt-1'>01</div>
        <div className='text-[24px]/[42px] font-semibold text-[#028E75] ml-6'>
          Enter Amount &<br /> Route
        </div>
      </div>
      <div className={classNames('flex mb-12 w-full transition-all duration-1000', isInView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24')} ref={ref3}>
        <div className='text-[24px]/[36px] text-[#ABABAB] pt-1'>02</div>
        <div className='text-[24px]/[42px] font-semibold text-[#028E75] ml-6'>
          Add Recipient
          <br /> Details
        </div>
      </div>
      <div className={classNames('flex mb-12 w-full transition-all duration-1000', isInView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24')} ref={ref4}>
        <div className='text-[24px]/[36px] text-[#ABABAB] pt-1'>03</div>
        <div className='text-[24px]/[42px] font-semibold text-[#028E75] ml-6'>
          Complete KYC <br />
          Online
        </div>
      </div>
      <div className={classNames('flex mb-12 w-full transition-all duration-1000', isInView5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24')} ref={ref5}>
        <div className='text-[24px]/[36px] text-[#ABABAB] pt-1'>04</div>
        <div className='text-[24px]/[42px] font-semibold text-[#028E75] ml-6'>
          Review & <br />
          Confirm
        </div>
      </div>
      <div className={classNames('w-full flex transition-all duration-1000', isInView6 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24')} ref={ref6}>
        <div className='text-[24px]/[36px] text-[#ABABAB] pt-1'>05</div>
        <div className='text-[24px]/[42px] font-semibold text-[#028E75] ml-6'>
          Track & Get <br /> Confirmation
        </div>
      </div>
    </div>
  );
};

export default Journey;
