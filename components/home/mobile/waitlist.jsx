import Image from 'next/image';

const Waitlist = () => {
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
        <button className='bg-white text-[#232C43] w-[280px] h-[55px] rounded-[36px] font-bold text-[18px]/[26px]'>Join now</button>
      </div>
      <div className='flex w-full justify-around'>
        <div
          className='text-white text-[32px]/[46px] font-bold px-2 py-5 w-[81px] h-[95px]'
          style={{ backgroundImage: 'url(/images/home/mobile/waitlist-border.svg)', backgroundSize: 'contain' }}
        >
          17D
        </div>
        <div
          className='text-white text-[32px]/[46px] font-bold px-2 py-5 w-[81px] h-[95px]'
          style={{ backgroundImage: 'url(/images/home/mobile/waitlist-border.svg)', backgroundSize: 'contain' }}
        >
          23H
        </div>
        <div
          className='text-white text-[32px]/[46px] font-bold px-2 py-5 w-[81px] h-[95px]'
          style={{ backgroundImage: 'url(/images/home/mobile/waitlist-border.svg)', backgroundSize: 'contain' }}
        >
          31M
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
