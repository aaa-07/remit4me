import useInView from '@/components/hooks/inView';
import classNames from 'classnames';
import {useRef, useState} from 'react';
import Form from '../partners/form';

const Partners = () => {
  const [showForm, setShowForm] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const isInView1 = useInView(ref1, 0.5);
  const isInView2 = useInView(ref2, 0.5);
  const isInView3 = useInView(ref3, 0.5);
  const isInView4 = useInView(ref4, 0.5);
  const isInView5 = useInView(ref5, 0.5);
  const isInView6 = useInView(ref6, 0.5);
  const isInView7 = useInView(ref7, 0.5);

  return (
    <>
      <div className='bg-[#092929] text-white pb-60 overflow-x-hidden rounded-b-[56px]' id='partner-mobile'>
        <img src='/images/home/mobile/handshake.png' alt='partners' height={311} className='w-full' />
        <div className={classNames('transition-all duration-1000', isInView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-25')} ref={ref1}>
          <div className={classNames('text-[16px]/[36px] font-medium mb-4 px-8')}>Become a Partner</div>
          <div className={classNames('text-[36px]/[52px] font-bold mb-6 px-8')}>Your Brand. Our Global Rails. Zero Roadblocks.</div>
          <div className={classNames('text-[20px]/[36px] mb-16 px-8 text-[#556F6F]')}>
            Expand your reach, earn effortlessly, and offer world-class remittance services from day one - without building a single thing yourself.
          </div>
        </div>

        <div
          className={classNames(
            'flex overflow-x-scroll gap-6 px-8 mb-18 scrollbar-hide transition-all duration-1000',
            isInView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25'
          )}
          ref={ref2}
        >
          <div
            className='flex-shrink-0 w-[222px] h-[304px] rounded-[24px] backdrop-blur-[50px] pl-5 pt-8 pr-8'
            style={{background: 'linear-gradient(110.97deg, rgba(232, 61, 255, 0.5) -4.87%, rgba(232, 61, 255, 0) 103.95%)'}}
          >
            <div className='bg-[#E83DFF80] w-[68px] h-[68px] rounded-[50%] flex justify-center items-center'>
              <img src='/images/home/mobile/light.svg' alt='partner' height={39} width={39} />
            </div>
            <div className='text-[20px]/[28px] font-semibold mt-6'>You keep your brand in the spotlight.</div>
          </div>
          <div
            className='flex-shrink-0 w-[222px] h-[304px] rounded-[24px] backdrop-blur-[50px] pl-5 pt-8 pr-8'
            style={{background: 'linear-gradient(110.97deg, rgba(234, 255, 48, 0.5) -4.87%, rgba(234, 255, 48, 0) 103.95%)'}}
          >
            <div className='bg-[#EAFF30] w-[68px] h-[68px] rounded-[50%] flex justify-center items-center'>
              <img src='/images/home/mobile/chip.svg' alt='partner' height={39} width={39} />
            </div>
            <div className='text-[20px]/[28px] font-semibold mt-6'>We handle compliance, technology, and bank integrations.</div>
          </div>
          <div
            className='flex-shrink-0 w-[222px] h-[304px] rounded-[24px] backdrop-blur-[50px] pl-5 pt-8 pr-8'
            style={{background: 'linear-gradient(110.97deg, rgba(108, 231, 255, 0.5) -4.87%, rgba(108, 231, 255, 0) 103.95%)'}}
          >
            <div className='bg-[#6CE7FF] w-[68px] h-[68px] rounded-[50%] flex justify-center items-center'>
              <img src='/images/home/mobile/expand.svg' alt='partner' height={39} width={39} />
            </div>
            <div className='text-[20px]/[28px] font-semibold mt-6'>You scale without hitting operational walls.</div>
          </div>
        </div>

        <div className='flex justify-center mb-43'>
          <button className='bg-white text-[#232C43] w-[280px] h-[55px] rounded-[36px] font-bold text-[18px]/[26px]' onClick={() => setShowForm(true)}>
            Become Partner
          </button>
        </div>
        <div className={classNames('transition-all duration-1000', isInView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-25')} ref={ref3}>
          <div className='text-[16px]/[36px] font-medium mb-3 px-8'>Become a Partner</div>
          <div className='text-[36px]/[52px] font-medium mb-18 px-8'>Our partners have advantage right from the day one</div>
        </div>
        <div className={classNames('transition-all duration-1000', isInView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25')} ref={ref4}>
          <div className='font-medium text-[20px]/[20px] mb-3 px-8'>Co-Branded Digital Portal</div>
          <div className='text-[16px]/[28px] text-[#C5C5C5]  px-8 mb-14'>Your logo, your voice, your style - we power the backend invisibly.</div>
        </div>
        <div className={classNames('transition-all duration-1000', isInView5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25')} ref={ref5}>
          <div className='font-medium text-[20px]/[20px] mb-3 px-8'>All Transaction Types in One Place</div>
          <div className='text-[16px]/[28px] text-[#C5C5C5] px-8 mb-14'>
            Education fees, property purchase, travel, investments, family transfers - more reasons for customers to keep coming back to you.
          </div>
        </div>
        <div className={classNames('transition-all duration-1000', isInView6 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25')} ref={ref6}>
          <div className='font-medium text-[20px]/[20px] mb-3 px-8'>Multi-Bank Network Access</div>
          <div className='text-[16px]/[28px] text-[#C5C5C5] px-8 mb-14'>Plug in once, serve customers across multiple AD-I banks.</div>
        </div>
        <div className={classNames('transition-all duration-1000', isInView7 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-25')} ref={ref7}>
          <div className='font-medium text-[20px]/[20px] mb-3 px-8'>Zero Infrastructure Cost</div>
          <div className='text-[16px]/[28px] text-[#C5C5C5] px-8'>No dev teams. No servers. No compliance departments.</div>
        </div>
      </div>
      {showForm && <Form setShowForm={setShowForm} />}
    </>
  );
};

export default Partners;
