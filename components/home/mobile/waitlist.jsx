import Image from 'next/image';
import { useEffect, useState } from 'react';
import Form from '../waitlist/form';

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
    <div className='bg-[#092929] px-8 pb-20 pt-25 flex flex-col items-center' id='waitlist-mobile'>
      <div className='text-[#028E75] text-[24px]/[42px] font-semibold'>Welcome bonus</div>
      <div className='text-white text-[32px]/[64px] font-bold mt-4 mb-25'>
        Join our waiting <br /> list and get <br />
        <span className='text-[#EAFF30]'>1500/- discount</span> on <br /> your first transfer
      </div>
      <div className='flex w-full justify-center text-white text-[20px]/[42px] mb-9'>
        <Image src='/images/home/waitlist.svg' alt='waitlist' width={52} height={24} className='mr-2' /> 32k+ Joined
      </div>
      <div className='text-center mb-16'>
        <button className='bg-white text-[#232C43] w-[280px] h-[55px] rounded-[36px] font-bold text-[18px]/[26px]' onClick={() => setShowForm(true)}>
          Join now
        </button>
      </div>
      <div className='flex w-full justify-around'>
        <div
          className='text-white text-[32px]/[46px] font-bold px-2 py-5 w-[81px] h-[95px] text-center'
          style={{ backgroundImage: 'url(/images/home/mobile/waitlist-border.svg)', backgroundSize: 'contain' }}
        >
          {timeLeft.days}D
        </div>
        <div
          className='text-white text-[32px]/[46px] font-bold px-2 py-5 w-[81px] h-[95px] text-center'
          style={{ backgroundImage: 'url(/images/home/mobile/waitlist-border.svg)', backgroundSize: 'contain' }}
        >
          {timeLeft.hours}H
        </div>
        <div
          className='text-white text-[32px]/[46px] font-bold px-2 py-5 w-[81px] h-[95px] text-center'
          style={{ backgroundImage: 'url(/images/home/mobile/waitlist-border.svg)', backgroundSize: 'contain' }}
        >
          {timeLeft.minutes}M
        </div>
      </div>
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
};

export default Waitlist;
