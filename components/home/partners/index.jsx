import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import Advantages from './advantages';
import styles from './index.module.css';
import Form from './form';

const Partners = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current.getBoundingClientRect().top > 0) {
        return;
      }
      const scrollPercent = ref.current.getBoundingClientRect().top / (ref.current.getBoundingClientRect().height - window.innerHeight);
      setScrollPercentage(Math.min(Math.abs(scrollPercent), 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className={classNames(' bg-blue-500 text-white h-[300vh]')} ref={ref} id='partner'>
        <div className={classNames('sticky top-0 h-screen bg-[#092929]', styles.partners)}>
          <div className='pt-[35vh] text-center text-white'>Become a Partner</div>
          <div className='text-[64px]/[92px] font-bold mt-5 mb-10 text-center'>
            Your Brand. Our Global Rails. <br /> Zero Roadblocks.
          </div>
          <div className='text-[24px]/[36px] text-[#556F6F] mb-24 text-center'>
            Expand your reach, earn effortlessly, and offer world-class
            <br /> remittance services from day one - without building a <br /> single thing yourself.
          </div>
          <div className='flex justify-center'>
            <button className='bg-white text-[#232C43] px-16 py-5 rounded-[32px] font-bold text-lg mx-auto' onClick={() => setShowForm(true)}>
              Become Partner
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-[822px] h-[684px] relative'>
            <div
              className='flex-shrink-0 w-[222px] h-[304px] rounded-[24px] backdrop-blur-[50px] pl-5 pt-8 pr-8 absolute top-0 left-0'
              style={{
                background: 'linear-gradient(110.97deg, rgba(232, 61, 255, 0.5) -4.87%, rgba(232, 61, 255, 0) 103.95%)',
                transform: `translateY(${scrollPercentage * -150}%)`
              }}
            >
              <div className='bg-[#E83DFF80] w-[68px] h-[68px] rounded-[50%] flex justify-center items-center'>
                <img src='/images/home/mobile/light.svg' alt='partner' height={39} width={39} />
              </div>
              <div className='text-[20px]/[28px] font-semibold mt-6'>You keep your brand in the spotlight.</div>
            </div>
            <div
              className='flex-shrink-0 w-[222px] h-[304px] rounded-[24px] backdrop-blur-[50px] pl-5 pt-8 pr-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              style={{
                background: 'linear-gradient(110.97deg, rgba(234, 255, 48, 0.5) -4.87%, rgba(234, 255, 48, 0) 103.95%)',
                transform: `translateY(${scrollPercentage * -100}%)`
              }}
            >
              <div className='bg-[#EAFF30] w-[68px] h-[68px] rounded-[50%] flex justify-center items-center'>
                <img src='/images/home/mobile/chip.svg' alt='partner' height={39} width={39} />
              </div>
              <div className='text-[20px]/[28px] font-semibold mt-6'>We handle compliance, technology, and bank integrations.</div>
            </div>
            <div
              className='flex-shrink-0 w-[222px] h-[304px] rounded-[24px] backdrop-blur-[50px] pl-5 pt-8 pr-8 absolute bottom-0 right-0'
              style={{
                background: 'linear-gradient(110.97deg, rgba(108, 231, 255, 0.5) -4.87%, rgba(108, 231, 255, 0) 103.95%)',
                transform: `translateY(${scrollPercentage * -10}%)`
              }}
            >
              <div className='bg-[#6CE7FF] w-[68px] h-[68px] rounded-[50%] flex justify-center items-center'>
                <img src='/images/home/mobile/expand.svg' alt='partner' height={39} width={39} />
              </div>
              <div className='text-[20px]/[28px] font-semibold mt-6'>You scale without hitting operational walls.</div>
            </div>
            <img
              src='/images/home/partners/meeting.png'
              alt='curve'
              width={172}
              height={157}
              className='absolute top-[145px] right-[50px]'
              style={{ transform: `translateY(${scrollPercentage * -200}%)` }}
            />
            <img
              src='/images/home/partners/call.png'
              alt='curve'
              width={172}
              height={157}
              className='absolute bottom-0 left-[50px]'
              style={{ transform: `translateY(${scrollPercentage * 0}%)` }}
            />
          </div>
        </div>
      </div>
      <Advantages />
      {showForm && <Form setShowForm={setShowForm} />}
    </>
  );
};

export default Partners;
