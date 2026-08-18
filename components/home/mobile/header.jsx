import classNames from 'classnames';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import {useEffect, useState} from 'react';

const inter = Inter({subsets: ['latin']});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
const [isLoginOpen, setIsLoginOpen] = useState(false);
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
        {/* <div className='text-[20px] font-bold  text-white'>remit4me</div> */}
        <div className='text-[20px]/[20px] font-bold' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} ><Image src='/images/home/R4m-logo.png' alt='remit4me logo' width={160} height={90}/></div>
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
          {/* Login */}
          <div className="w-full">
            <div
              className="text-[32px] font-medium cursor-pointer flex items-center justify-between"
              onClick={() => setIsLoginOpen(!isLoginOpen)}
            >
              <span>Login</span>
              <span
                className={classNames(
                  'text-[28px] transition-transform duration-300',
                  isLoginOpen ? 'rotate-180' : 'rotate-0'
                )}
              >
                ⌄
              </span>
            </div>

            {/* Login Options */}
            <div
              className={classNames(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isLoginOpen
                  ? 'max-h-[160px] opacity-100 mt-3'
                  : 'max-h-0 opacity-0 mt-0'
              )}
            >
              {/* Login to Send Money */}
              <div
                className="text-[20px] font-medium py-3 pl-5 cursor-pointer "
                onClick={() => {
                  window.location.href =
                    'https://prod.remit4me.com/indusind/r4m/login';
                }}
              >
                Login to Send Money
              </div>

              {/* Login as Partner */}
              <div
                className="text-[20px] font-medium  py-3 pl-5 cursor-pointer "
                onClick={() => {
                  window.location.href =
                    'https://prod.remit4me.com/operations/';
                }}
              >
                Login as Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
