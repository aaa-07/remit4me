import Image from 'next/image';
import classNames from 'classnames';
import { useRef } from 'react';
import useInView from '@/components/hooks/inView';

const ConverterCard = ({ exchangeRate }) => {
  return (
    <div className='converter-shadow rounded-[22px] bg-white px-4 pt-4 pb-6 w-[330px] absolute left-1/2 -translate-x-1/2 bottom-[-180px]'>
      <div className='py-1 pl-1 pr-3 flex items-center bg-[#F3F3F3] rounded-[17px] w-[220px] mb-2.5'>
        <div className='flex items-center gap-2 bg-[#E2E2E2] rounded-[17px] pl-2 py-2 pr-3'>
          <img src='/images/home/why-us/lock.svg' alt='lock' width={11} height={11} />
          <div className='text-[#232C43] text-[11px]/[11px] font-medium'>23h</div>
        </div>
        <div className='text-[#232C43] text-[13px]/[13px] font-medium ml-3'>1 USD = {exchangeRate} INR</div>
        {/* <img src='/images/home/why-us/right-arrow.svg' alt='arrow' width={6} height={3} className='ml-auto' /> */}
      </div>
      <div className='flex mb-1.5'>
        <img src='/images/home/why-us/download.svg' alt='left' width={14} height={14} />
        <div className='text-[#232C43] text-[13px]/[27px] ml-2 font-medium'>Recipient receive</div>
      </div>
      <div className='flex items-center'>
        <div className='bg-[#F3F3F3] rounded-[17px] py-1.5 pl-1.5 pr-2.5 flex items-center'>
          <img src='/images/home/why-us/us.svg' alt='usd' width={22} height={22} />
          <div className='text-[#232C43] text-[14px]/[27px] font-medium mx-3'>USD</div>
          {/* <img src='/images/home/why-us/down-arrow.svg' alt='usd' width={8} height={4} /> */}
        </div>
        <div className='text-[#232C43] text-[27px]/[27px] font-extrabold ml-auto'>1,000.00</div>
      </div>

      <div className='mt-4 mb-7 bg-[#FFFFD9] rounded-2xl py-3 pl-3 flex items-center'>
        <img src='/images/home/why-us/link.svg' alt='info' width={11} height={11} />
        <div className='ml-2 text-[#232C43] text-[10px]/[10px]'>
          Sending over 25,000 USD? <span className='font-medium underline'>We'll discount our fee</span>{' '}
        </div>
      </div>

      <div className='flex mb-1.5'>
        <img src='/images/home/why-us/upload.svg' alt='left' width={14} height={14} />
        <div className='text-[#232C43] text-[13px]/[27px] ml-2 font-medium'>You send</div>
      </div>
      <div className='flex items-center'>
        <div className='bg-[#F3F3F3] rounded-[17px] py-1.5 pl-1.5 pr-2.5 flex items-center'>
          <img src='/images/home/why-us/india.svg' alt='usd' width={22} height={22} />
          <div className='text-[#232C43] text-[14px]/[27px] font-medium mx-3'>INR</div>
          {/* <img src='/images/home/why-us/down-arrow.svg' alt='usd' width={8} height={4} /> */}
        </div>
        <div className='text-[#232C43] text-[27px]/[27px] font-extrabold ml-auto'>{new Intl.NumberFormat('en-IN').format(1000 * exchangeRate)}.00</div>
      </div>
    </div>
  );
};

const Slide5 = ({ exchangeRate }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.5);
  return (
    <div className='pb-40'>
      <div className='relative bg-[#ADB8FF] h-[250px] z-[1]'>
        <img src='/images/home/mobile/why-us/student.png' alt='slide-5' width={480} height={480} className='absolute top-[-40px] left-1/2 -translate-x-1/2' />
        {/* <Image src='/images/home/mobile/why-us/tuition-fee.svg' alt='converter' width={331} height={83} className='absolute bottom-[-280px] left-1/2 -translate-x-1/2' /> */}
        <ConverterCard exchangeRate={exchangeRate} />
      </div>
      <div className={classNames('transition-all duration-1000', isInView ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0')} ref={ref}>
        <div className='mt-[300px] why-us-title-mobile pl-20 pr-10'>Send Again in Seconds - As Easy as UPI</div>
        <div className='mt-4 why-us-description-mobile pl-20 pr-10'>
          Once you've sent it once, the rest is just a tap. No forms, no repeats, no stress - just money moving at the speed of trust.
        </div>
      </div>
    </div>
  );
};

export default Slide5;
