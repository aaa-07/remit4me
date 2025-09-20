import Image from 'next/image';

const Slide4 = ({ scrollPercentage }) => {
  return (
    <div className='h-screen flex bg-white'>
      <div className='w-[1646px] shrink-0 relative z-[1] pl-15 flex items-center' style={{ background: 'linear-gradient(90deg, #F4FFAD 0 65%, #FFFFFF 65% 100%)' }}>
        {/* <>
          <img src='/images/home/why-us/education.png' alt='education' width={443} height={423} className='absolute top-[3%] left-[67px]' />
          <div className='absolute z-[1] top-[38%] left-[200px]'>
            <img src='/images/home/mobile/why-us/education.svg' alt='quote' width={191} height={56} />
          </div>
        </>
        <img src='/images/home/why-us/investment.png' alt='investment' width={673} height={423} className='absolute bottom-[2%] left-[67px]' />
        <div className='absolute z-[1] bottom-[8%] left-[300px]'>
          <img src='/images/home/mobile/why-us/investment.svg' alt='quote' width={204} height={56} />
        </div>
        <img
          src='/images/home/why-us/gift.png'
          alt='gift'
          width={432}
          height={253}
          className='absolute bottom-0 left-[841px]'
          style={{ transform: `translateX(${Math.min(scrollPercentage - 0.3, 0.3) * -75}%)` }}
        />
        <div className='absolute z-[1] bottom-[2%] left-[850px]'>
          <img src='/images/home/mobile/why-us/gift.svg' alt='quote' width={123} height={56} />
        </div>
        <img
          src='/images/home/why-us/travel.png'
          alt='travel'
          width={411}
          height={548}
          className='absolute top-[5%] left-[910px]'
          style={{ transform: `translateX(${Math.min(scrollPercentage - 0.3, 0.3) * -150}%)` }}
        />
        <div className='absolute z-[1] top-[38%] left-[950px]'>
          <img src='/images/home/mobile/why-us/travel.svg' alt='quote' width={146} height={56} />
        </div>
        <img
          src='/images/home/why-us/family.png'
          alt='family'
          width={352}
          height={427}
          className='absolute top-[25%] left-[534px]'
          style={{ transform: `translateX(${Math.min(scrollPercentage - 0.3, 0.3) * -100}%)` }}
        />
        <div className='absolute z-[1] top-[60%] left-[500px]'>
          <img src='/images/home/mobile/why-us/family.svg' alt='quote' width={294} height={56} />
        </div> */}
        <Image
          src='/images/home/why-us/group.png'
          alt='group'
          width={1646}
          height={900}
          className='h-[min(900px,100%)]'
          // style={{ transform: `translateX(${Math.min(scrollPercentage - 0.3, 0.3) * -20}%)` }}
        />
      </div>
      {/* <div className='flex items-center mr-[353px] ml-[256px] relative z-[1]'>
        <Image src='/images/home/why-us/medical.png' alt='medical' width={353} height={253} />
        <div className='absolute z-[1] bottom-[38%] right-[70px]'>
          <img src='/images/home/mobile/why-us/medical.svg' alt='quote' width={166} height={56} />
        </div>
      </div> */}
      <div className='mt-[140px] mr-[485px] ml-[353px]'>
        <div className='text-[40px]/[56px] text-[#289B85] font-semibold mb-[16px]'>
          Transparent from <br />
          Start to Finish
        </div>
        <div className='text-[#363636] text-[20px]/[36px]'>
          Know exactly how much your
          <br /> recipient will get before you
          <br /> send, with no hidden surprises.
        </div>
      </div>
    </div>
  );
};

export default Slide4;
