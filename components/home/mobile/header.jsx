import classNames from 'classnames';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import {useEffect, useState} from 'react';

const inter = Inter({subsets: ['latin']});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    setLastScrollY(window.scrollY);
    setShow(window.scrollY < lastScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={classNames(
          inter.className,
          'fixed top-0 z-[10] w-full px-7 py-3 flex justify-between items-center transition-transform duration-300 ease-in-out',
          show ? 'translate-y-0' : '-translate-y-full',
          lastScrollY > 844 && lastScrollY < 6425 ? 'bg-[#092929]' : lastScrollY > 0 ? 'bg-[#ffffff29] backdrop-blur-md' : 'bg-transparent'
        )}
      >
        <div className='text-[20px] font-bold  text-white'>remit4me</div>
        <img src='/images/home/mobile/menu.svg' alt='menu' width={20} height={16} className='' onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      <div
        className={classNames(
          inter.className,
          'fixed top-0 right-0 p-6 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex justify-end'>
          <Image src='/images/home/close.svg' alt='close' width={20} height={16} className='' onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        <div className='flex flex-col gap-4 mt-10'>
          <div
            className='text-[32px] font-medium'
            onClick={() => {
              window.location.href = '#why-choose-us-mobile';
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Why choose us
          </div>
          <div
            className='text-[32px] font-medium'
            onClick={() => {
              window.location.href = '#waitlist-mobile';
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Send money
          </div>
          <div
            className='text-[32px] font-medium'
            onClick={() => {
              window.location.href = '#partner-mobile';
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Become a partner
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
