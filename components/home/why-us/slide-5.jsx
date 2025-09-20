const ConverterCard = ({ exchangeRate }) => {
  return (
    <div className='converter-shadow rounded-[36px] bg-white px-7 pt-7 pb-10 w-[573px] absolute left-[190px] bottom-[250px]'>
      <div className='py-1 pl-1 pr-4 flex items-center bg-[#F3F3F3] rounded-[30px] w-[350px] mb-4'>
        <div className='flex items-center gap-2 bg-[#E2E2E2] rounded-[30px] pl-2 py-2 pr-3'>
          <img src='/images/home/why-us/lock.svg' alt='lock' width={19} height={19} />
          <div className='text-[#232C43] text-[18px]/[18px] font-medium'>23h</div>
        </div>
        <div className='text-[#232C43] text-[24px]/[24px] font-medium ml-3'>1 USD = {exchangeRate} INR</div>
        {/* <img src='/images/home/why-us/right-arrow.svg' alt='arrow' width={9} height={9} className='ml-auto' /> */}
      </div>
      <div className='flex mb-3'>
        <img src='/images/home/why-us/download.svg' alt='left' width={24} height={24} />
        <div className='text-[#232C43] text-[24px]/[47px] ml-2 font-medium'>Recipient receive</div>
      </div>
      <div className='flex items-center'>
        <div className='bg-[#F3F3F3] rounded-[30px] py-2 pl-2 pr-4 flex items-center'>
          <img src='/images/home/why-us/us.svg' alt='usd' width={38} height={38} />
          <div className='text-[#232C43] text-[24px]/[47px] font-medium mx-3'>USD</div>
          {/* <img src='/images/home/why-us/down-arrow.svg' alt='usd' width={14} height={7} /> */}
        </div>
        <div className='text-[#232C43] text-[47px]/[47px] font-extrabold ml-auto'>1,000.00</div>
      </div>

      <div className='mt-6 mb-12 bg-[#FFFFD9] rounded-2xl py-3 pl-3 flex items-center'>
        <img src='/images/home/why-us/link.svg' alt='info' width={19} height={19} />
        <div className='ml-2 text-[#232C43] text-[18px]/[18px]'>
          Sending over 25,000 USD? <span className='font-medium underline'>We'll discount our fee</span>{' '}
        </div>
      </div>

      <div className='flex mb-3'>
        <img src='/images/home/why-us/upload.svg' alt='left' width={24} height={24} />
        <div className='text-[#232C43] text-[24px]/[47px] ml-2 font-medium'>You send</div>
      </div>
      <div className='flex items-center'>
        <div className='bg-[#F3F3F3] rounded-[30px] py-2 pl-2 pr-4 flex items-center'>
          <img src='/images/home/why-us/india.svg' alt='usd' width={38} height={38} />
          <div className='text-[#232C43] text-[24px]/[47px] font-medium mx-3'>INR</div>
          {/* <img src='/images/home/why-us/down-arrow.svg' alt='usd' width={14} height={7} /> */}
        </div>
        <div className='text-[#232C43] text-[47px]/[47px] font-extrabold ml-auto'>{new Intl.NumberFormat('en-IN').format(1000 * exchangeRate)}.00</div>
      </div>
    </div>
  );
};

const Slide5 = ({ exchangeRate }) => {
  return (
    <div className='h-screen flex bg-white'>
      <div className='w-[671px] bg-[#ADB8FF] relative z-[1]'>
        <img src='/images/home/why-us/student.png' alt='slide-5' width={753} height={574} className='max-w-none absolute left-[-250px] bottom-0' />
        <div className='border-white-gradient pl-4 pr-5 py-5 rounded-3xl w-[363px] flex items-center absolute bottom-[64px] left-[-90px]'>
          <div>
            <img src='/images/home/why-us/hat.svg' alt='quote' width={44} height={44} className='mr-3' />
          </div>
          <div className='text-[#232C43] text-[18px]/[18px] font-semibold'>
            Tuition fee <br /> sent in 2 days
          </div>
          <div className='text-[#232C43] text-[18px]/[18px] font-extrabold ml-auto'>$25,000</div>
        </div>
        <ConverterCard exchangeRate={exchangeRate} />
      </div>
      <div className='w-[1423px] flex justify-center pt-[55vh]'>
        <div>
          <div className='text-[40px]/[56px] text-[#289B85] font-semibold mb-[16px]'>
            Send Again in Seconds - <br /> As Easy as UPI
          </div>
          <div className='text-[#363636] text-[20px]/[36px]'>
            Once you've sent it once, the rest is just a tap.
            <br /> No forms, no repeats, no stress - just money <br />
            moving at the speed of trust.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
