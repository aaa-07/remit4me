const ConverterCard = ({ exchangeRate }) => {
  return (
    <div className='rounded-[32px] bg-[#BFF229] px-7 pt-7 pb-10 w-[487px]'>
      <div className='py-1 pl-1 pr-4 flex items-center bg-[#F0FFC4] rounded-[32px] w-[300px] mb-4'>
        <div className='flex items-center gap-2 bg-[#AFDE26] rounded-[32px] pl-2 py-2 pr-3'>
          <img src='/images/home/why-us/lock.svg' alt='lock' width={16} height={16} />
          <div className='text-[#232C43] text-[16px]/[16px] font-medium'>23h</div>
        </div>
        <div className='text-[#232C43] text-[20px]/[20px] font-medium ml-3'>1 USD = {exchangeRate} INR</div>
        <img src='/images/home/why-us/right-arrow.svg' alt='arrow' width={8} height={4} className='ml-auto' />
      </div>
      <div className='flex mb-2.5'>
        <img src='/images/home/why-us/download.svg' alt='left' width={20} height={20} />
        <div className='text-[#232C43] text-[20px]/[40px] ml-2 font-medium'>Recipient receive</div>
      </div>
      <div className='flex items-center'>
        <div className='bg-[#F0FFC4] rounded-[32px] py-2 pl-2 pr-4 flex items-center'>
          <img src='/images/home/why-us/us.svg' alt='usd' width={32} height={32} />
          <div className='text-[#232C43] text-[20px]/[40px] font-medium mx-3'>USD</div>
          <img src='/images/home/why-us/down-arrow.svg' alt='usd' width={12} height={6} />
        </div>
        <div className='text-[#232C43] text-[40px]/[40px] font-extrabold ml-auto'>1,000.00</div>
      </div>

      <div className='mt-5 mb-10 bg-[#F0FFC4] rounded-xl py-3 pl-3 flex items-center'>
        <img src='/images/home/why-us/link.svg' alt='info' width={16} height={16} />
        <div className='ml-2 text-[#232C43] text-[15px]/[15px]'>
          Sending over 25,000 USD? <span className='font-medium underline'>We'll discount our fee</span>{' '}
        </div>
      </div>

      <div className='flex mb-2.5'>
        <img src='/images/home/why-us/upload.svg' alt='left' width={20} height={20} />
        <div className='text-[#232C43] text-[20px]/[40px] ml-2 font-medium'>You send</div>
      </div>
      <div className='flex items-center'>
        <div className='bg-[#F0FFC4] rounded-[32px] py-2 pl-2 pr-4 flex items-center'>
          <img src='/images/home/why-us/india.svg' alt='usd' width={32} height={32} />
          <div className='text-[#232C43] text-[20px]/[40px] font-medium mx-3'>INR</div>
          <img src='/images/home/why-us/down-arrow.svg' alt='usd' width={14} height={7} />
        </div>
        <div className='text-[#232C43] text-[40px]/[40px] font-extrabold ml-auto'>{new Intl.NumberFormat('en-IN').format(1000 * exchangeRate)}.00</div>
      </div>
    </div>
  );
};

const SendMoney = ({ exchangeRate }) => {
  return (
    <div className='bg-[#092929] max-w-[1512px] mx-auto'>
      <div className='pr-50 pb-45 pl-28 pt-22 flex justify-between'>
        <div>
          <div className='text-[#ABABAB] text-[24px]/[36px] mb-8'>01</div>
          <div className='text-[#028E75] text-[36px]/[42px] font-semibold'>
            Enter Amount <br /> & Route
          </div>
          <div className='text-white text-[76px]/[86px] font-bold my-8'>
            Send <br />
            money fast,
            <br /> safe and
            <br /> secure
          </div>
          <div className='text-white text-[26px]/[40px]'>
            Whether it’s for education, medicine,
            <br /> meals, or moments - send money
            <br /> across oceans
          </div>
        </div>
        <div className='rounded-[32px] bg-white'>
          <div className='px-2 pt-2 bg-[#F0FFC4] pb-6 rounded-[32px]'>
            <ConverterCard exchangeRate={exchangeRate} />
            <div className='my-8 px-6 flex'>
              <div className='text-[#232C43] text-[18px]/[18px] font-medium'>Bank transaction fee</div>
              <div className='text-[#232C43] text-[18px]/[18px] font-medium ml-auto'>₹ 1,532</div>
            </div>
            <div className='px-6 flex'>
              <div className='text-[#232C43] text-[18px]/[18px] font-medium'>Our transaction fee</div>
              <div className='text-[#289B85] text-[18px]/[18px] font-medium ml-auto line-through'>₹ 1,532</div>
            </div>
            <div className='px-4 py-2.5 mx-2 bg-[#DEEFAC] rounded-[32px] flex mt-5'>
              <div className='text-[#232C43] text-[18px]/[18px] font-medium'>Total transaction fee</div>
              <div className='text-[#232C43] text-[18px]/[18px] font-medium ml-auto '>₹ 1,532</div>
            </div>
          </div>
          <div className='text-[#232C43] text-[18px]/[18px] mt-7 font-medium text-center px-5'>Your one will receive in 5 days (Monday, Aug 4)</div>
          <div className='text-[#232C43] text-[18px]/[18px] mt-4 mb-9 font-medium text-center px-5'>
            You could save up to <strong>₹ 1,532</strong>{' '}
          </div>
          <div className='flex px-8 pb-7 items-center'>
            <div className='text-[#232C43] text-[18px]/[18px] font-semibold underline'>Compare fee</div>
            <button className='bg-[#092A2A] text-white text-[18px]/[18px] font-bold rounded-[32px] px-22 py-5 ml-auto'>Send now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
