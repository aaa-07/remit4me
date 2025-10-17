import Image from 'next/image';
import { useState, useEffect } from 'react';
import Form from './form';

const Waitlist = () => {
  const [showForm, setShowForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, 11, 31, 23, 59, 59); // December 31st at 23:59:59

      // If December 31st has passed this year, target next year
      if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every minute
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bg-[#092929] pb-20 flex flex-col items-center' id='waitlist'>
      <div className='text-[#028E75] text-[36px]/[42px] font-semibold'>Welcome bonus</div>
      <div className='text-white text-[64px]/[88px] font-bold mt-6 mb-14 text-center'>
        Join our waiting list and <br />
        get <span className='text-[#EAFF30]'>1500/- discount</span> on <br /> your first transfer
      </div>
      <div className='flex justify-center gap-8 items-center mb-22'>
        <div className='flex w-full justify-center text-white text-[20px]/[42px]'>
          {/* <Image src='/images/home/waitlist.svg' alt='waitlist' width={52} height={24} className='mr-2' /> 32k+ Joined */}
        </div>
        <div className='text-center'>
          <button className='bg-white text-[#232C43] w-[280px] h-[55px] rounded-[36px] font-bold text-[26px]/[26px]' onClick={() => setShowForm(true)}>
            Join now
          </button>
        </div>
      </div>
      <div className='flex w-full gap-25 justify-center'>
        <div className='text-white text-[76px]/[106px] font-bold py-20 w-[185px] h-[273px] text-center' style={{ backgroundImage: 'url(/images/home/waitlist-border.svg)' }}>
          {timeLeft.days}D
        </div>
        <div className='text-white text-[76px]/[106px] font-bold py-20 w-[185px] h-[273px] text-center' style={{ backgroundImage: 'url(/images/home/waitlist-border.svg)' }}>
          {timeLeft.hours}H
        </div>
        <div className='text-white text-[76px]/[106px] font-bold py-20 w-[185px] h-[273px] text-center' style={{ backgroundImage: 'url(/images/home/waitlist-border.svg)' }}>
          {timeLeft.minutes}M
        </div>
      </div>
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
};

export default Waitlist;
