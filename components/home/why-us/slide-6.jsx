const Slide6 = () => {
  return (
    <div className='h-screen flex bg-white'>
      <div className='w-[671px] bg-[#C3FFAD] relative z-[1]'>
        <img src='/images/home/why-us/student.png' alt='slide-5' width={753} height={574} className='max-w-none absolute left-[-50px] bottom-0' />
        <div className='border-white-gradient pl-4 pr-5 py-5 rounded-3xl w-[246px] flex items-center absolute bottom-[64px] left-1/2 -translate-x-1/2'>
          <div className='mr-3'>
            <img src='/images/home/why-us/hat.svg' alt='quote' width={44} height={44} className='mr-3' />
          </div>
          <div className='text-[#232C43] text-[18px]/[18px] font-semibold'>Recurring University Fees</div>
        </div>
      </div>
      <div className='w-[1181px] flex justify-center pt-[100px]'>
        <div>
          <div className='text-[40px]/[56px] text-[#289B85] font-semibold mb-[16px]'>
            Transfer globally <br /> without friction
          </div>
          <div className='text-[#363636] text-[20px]/[36px]'>
            Whether you're paying tuition <br />
            fees, buying property abroad,
            <br /> investing, or supporting
            <br /> someone - do it from one place.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
