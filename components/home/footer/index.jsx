import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Form from './form';

const inter = Inter({ subsets: ['latin'] });

const linkFacebook = () => {
    window.open('https://www.facebook.com/share/1EL9TbpzmF/', '_blank');
}

const linkLinkedIn = () => {
    window.open('https://www.linkedin.com/company/remit4me/', '_blank'); 
}

const linkInstagram = () => {
    window.open('https://www.instagram.com/remit4me?igsh=ajgxMTI3ZzNrdzVy', '_blank');
}

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className='bg-[#EDF7F7] bottom-0 text-[#092929] overflow-hidden'>
      <div className='max-w-[1512px] mx-auto relative'>
        <div className='px-21 pt-45 pb-60'>
          <div className='rounded-[56px] bg-white p-20 flex justify-between items-center'>
            <div>
              <div className={classNames('text-[48px]/[48px] font-bold mb-4', inter.className)}>remit4me</div>
              <div className='text-[18px]/[28px] mb-8'>
                Whether for education, family, or investments, send <br /> money worldwide with clarity and trust.
              </div>
              <div className='flex gap-8'>
                <Image onClick={linkFacebook} src='/images/home/media/facebook.svg' alt='facebook' width={32} height={32} />
                <Image onClick={linkLinkedIn} src='/images/home/media/linkedin.svg' alt='linkedin' width={32} height={32} />
                <Image onClick={linkInstagram} src='/images/home/media/instagram.png' alt='instagram' width={32} height={32} />
                {/* <Image src='/images/home/media/youtube.svg' alt='youtube' width={32} height={32} /> */}
              </div>
            </div>
            <div className='flex gap-8'>
              <div className='text-[18px]/[28px] cursor-pointer' onClick={() =>{ setShowForm(true)} }>Privacy policy</div>
              <div className='text-[18px]/[28px]'>Terms of service</div>
            </div>
          </div>
        </div>
        <div className={classNames('text-[300px]/[300px] font-bold opacity-5 absolute bottom-[-100px] left-1/2 translate-x-[-50%]', inter.className)}>remit4me</div>
      </div>
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
};

export default Footer;
