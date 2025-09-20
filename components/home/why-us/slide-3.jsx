import Image from 'next/image';

const Slide3 = ({ scrollPercentage }) => {
  return (
    <div className='h-screen flex relative bg-white'>
      <div className='w-[873px] h-full relative z-[1]'>
        <Image src='/images/home/why-us/hotel.png' alt='hotel' fill />
      </div>
      <Image
        src='/images/home/why-us/slide-3.png'
        alt='hotel'
        width={668}
        height={469}
        className='absolute bottom-[19%] left-[387px] z-[1]'
        style={{ transform: `translateX(${Math.min(scrollPercentage - 0.2, 0.3) * -100}%)` }}
      />
      <div className='border-white-gradient pl-4 pr-6 py-4 rounded-3xl w-[522px] flex items-center absolute z-[1] bottom-[24%] left-[387px]'>
        <div>
          <img src='/images/home/why-us/hat.svg' alt='quote' width={44} height={44} className='mr-3' />
        </div>
        <div className='text-[#232C43] text-[16px]/[24px] font-semibold'>
          My ₹12 lakh investment abroad was safely
          <br />
          processed and fully handled under RBI guidelines
        </div>
      </div>
      <div className='ml-[490px] mr-[350px] pt-[56vh]'>
        <div className='text-[40px]/[56px] text-[#289B85] font-semibold'>
          More Than Just <br /> Family Transfers
        </div>
        <div className='text-[#363636] text-[20px]/[36px] mt-4'>
          Whether you're paying tuition <br />
          fees, buying property abroad,
          <br /> investing, or supporting
          <br />
          someone - do it from one place.
        </div>
      </div>
    </div>
  );
};

export default Slide3;
