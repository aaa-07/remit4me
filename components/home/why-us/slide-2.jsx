import Image from 'next/image';
import styles from './index.module.css';
import classNames from 'classnames';

const Slide2 = ({ scrollPercentage }) => {
  return (
    <div className='h-screen flex pr-[395px] bg-white'>
      <div className='h-full flex items-center bg-[#289B85] w-[675px] relative z-[1]'>
        <div className={classNames('w-[668px] h-[708px] relative')}>
          <img
            src='/images/home/why-us/slide.png'
            alt='slide-2'
            className='h-[708px] absolute inset-0 w-[668px] max-w-none left-[200px]'
            style={{ transform: `translateX(${Math.min(scrollPercentage, 0.3) * -100}%)` }}
          />
          <div className='border-white-gradient pl-4 pr-6 py-4 rounded-3xl w-[522px] flex items-center absolute bottom-12 left-[200px]'>
            <div>
              <img src='/images/home/why-us/hat.svg' alt='quote' width={44} height={44} className='mr-3' />
            </div>
            <div className='text-[#232C43] text-[16px]/[24px] font-semibold ml-4'>Paid my son's tuition in the UK without printing a single form - 100% online.</div>
          </div>
        </div>
      </div>
      <div className='ml-[600px]'>
        <div className='h-1/2 pb-[97px] flex flex-col justify-end'>
          <div className='text-[40px]/[56px] text-[#289B85] font-semibold'>
            Backed by <br />
            trusted top banks
          </div>
          <div className='text-[#363636] text-[20px]/[36px] mt-4'>
            Your money moves through <br />
            authorised banks, fully
            <br /> compliant with RBI regulations.
          </div>
        </div>
        {/* <div className='h-1/2 pb-[147px] flex items-end gap-6 mix-blend-multiply'>
          <Image src='/images/home/why-us/icici.png' alt='icici' width={100} height={100} />
          <Image src='/images/home/why-us/sbi.png' alt='sbi' width={150} height={100} />
        </div> */}
      </div>
    </div>
  );
};

export default Slide2;
