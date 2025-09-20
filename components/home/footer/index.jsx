import Image from 'next/image';
import { Inter } from 'next/font/google';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

const Footer = () => {
  return (
    <div className='bg-[#EDF7F7] sticky bottom-0 z-[-1] text-[#092929] overflow-hidden'>
      <div className='max-w-[1512px] mx-auto relative'>
        <div className='px-21 pt-45 pb-60'>
          <div className='rounded-[56px] bg-white p-20 flex justify-between items-center'>
            <div>
              <div className={classNames('text-[48px]/[48px] font-bold mb-4', inter.className)}>remit4me</div>
              <div className='text-[18px]/[28px] mb-8'>
                Whether for education, family, or investments, send <br /> money worldwide with clarity and trust.
              </div>
              <div className='flex gap-8'>
                <Image src='/images/home/media/facebook.svg' alt='facebook' width={32} height={32} />
                <Image src='/images/home/media/x.svg' alt='x' width={32} height={32} />
                <Image src='/images/home/media/linkedin.svg' alt='linkedin' width={32} height={32} />
                <Image src='/images/home/media/youtube.svg' alt='youtube' width={32} height={32} />
              </div>
            </div>
            <div className='flex gap-8'>
              <div className='text-[18px]/[28px]'>Privacy policy</div>
              <div className='text-[18px]/[28px]'>Terms of service</div>
            </div>
          </div>
        </div>
        <div className={classNames('text-[300px]/[300px] font-bold opacity-5 absolute bottom-[-100px] left-1/2 translate-x-[-50%]', inter.className)}>remit4me</div>
      </div>
    </div>
  );
};

export default Footer;
