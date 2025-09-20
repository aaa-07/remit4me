import Image from 'next/image';

const Waitlist = () => {
  return (
    <div className='bg-[#092929] pb-20 flex flex-col items-center' id='waitlist'>
      <div className='text-[#028E75] text-[36px]/[42px] font-semibold'>Welcome bonus</div>
      <div className='text-white text-[64px]/[88px] font-bold mt-6 mb-14 text-center'>
        Join our waiting list and <br />
        get <span className='text-[#EAFF30]'>1500/- discount</span> on <br /> your first transfer
      </div>
      <div className='flex justify-center gap-8 items-center mb-22'>
        <div className='flex w-full justify-center text-white text-[20px]/[42px]'>
          <Image src='/images/home/waitlist.svg' alt='waitlist' width={52} height={24} className='mr-2' /> 32k+ Joined
        </div>
        <div className='text-center'>
          <button className='bg-white text-[#232C43] w-[280px] h-[55px] rounded-[36px] font-bold text-[26px]/[26px]'>Join now</button>
        </div>
      </div>
      <div className='flex w-full gap-25 justify-center'>
        <div className='text-white text-[76px]/[106px] font-bold px-5 py-20 w-[185px] h-[273px]' style={{ backgroundImage: 'url(/images/home/waitlist-border.svg)' }}>
          17D
        </div>
        <div className='text-white text-[76px]/[106px] font-bold px-5 py-20 w-[185px] h-[273px]' style={{ backgroundImage: 'url(/images/home/waitlist-border.svg)' }}>
          23H
        </div>
        <div className='text-white text-[76px]/[106px] font-bold px-5 py-20 w-[185px] h-[273px]' style={{ backgroundImage: 'url(/images/home/waitlist-border.svg)' }}>
          31M
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
