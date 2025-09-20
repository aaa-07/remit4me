import useInView from '@/components/hooks/inView';
import classNames from 'classnames';
import { useRef } from 'react';

const Strength = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const isInView1 = useInView(ref1, 0.5);
  const isInView2 = useInView(ref2, 0.5);
  const isInView3 = useInView(ref3, 0.5);
  const isInView4 = useInView(ref4, 0.5);
  const isInView5 = useInView(ref5, 0.5);

  return (
    <div className='px-8 bg-[#092929] text-white pb-22 overflow-x-hidden'>
      <img src='/images/home/mobile/shield.png' alt='strength' height={322} width={322} className='max-w-none' />
      <div className={classNames('transition-all duration-1000', isInView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-25')} ref={ref1}>
        <div className={classNames('mt-5 mb-6 text-[36px]/[52px] font-bold')}>The Strength of Top Banks, The Simplicity of One Platform</div>
        <div className={classNames('text-[20px]/[36px] text-white')}>
          Every transfer you make travels through RBI - Authorised AD-I banks, wrapped in bank-grade encryption and constant monitoring.
        </div>
      </div>
      <div className={classNames('transition-all duration-1000', isInView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25')} ref={ref2}>
        <div className='mt-14 text-[20px]/[20px] font-semibold text-white mb-3'>Backed by AD-I Bank Partners</div>
        <div className='text-[16px]/[28px] text-[#C5C5C5] font-medium'>
          Every rupee you send moves through regulated, authorised banks that meet the highest security and compliance standards.
        </div>
      </div>
      <div className={classNames('transition-all duration-1000', isInView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25')} ref={ref3}>
        <div className='mt-14 text-[20px]/[20px] font-semibold text-white mb-3'>Bank-Grade Encryption</div>
        <div className='text-[16px]/[28px] text-[#C5C5C5] font-medium'>
          From the moment you initiate a transfer, your data and money are encrypted end-to-end - making interception virtually impossible.
        </div>
      </div>
      <div className={classNames('transition-all duration-1000', isInView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25')} ref={ref4}>
        <div className='mt-14 text-[20px]/[20px] font-semibold text-white mb-3'>24/7 Transaction Monitoring</div>
        <div className='text-[16px]/[28px] text-[#C5C5C5] font-medium'>
          Our systems and partner banks’ security teams work round the clock to detect and stop suspicious activity before it happens.
        </div>
      </div>
      <div className={classNames('transition-all duration-1000', isInView5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25')} ref={ref5}>
        <div className='mt-14 text-[20px]/[20px] font-semibold text-white mb-3'>Fully Compliant by Design</div>
        <div className='text-[16px]/[28px] text-[#C5C5C5] font-medium'>
          You automatically inherit complete RBI compliance and audit readiness - no extra legal or tech effort required on your part.
        </div>
      </div>
    </div>
  );
};

export default Strength;
