const ConverterCard = ({ exchangeRate }) => {
  return (
    <div className='rounded-[16px] bg-[#BFF229] px-4 pt-4 pb-5'>
      <div className='py-1 pl-1 pr-4 flex items-center bg-[#F0FFC4] rounded-[32px] w-[220px] mb-4'>
        <div className='flex items-center gap-2 bg-[#AFDE26] rounded-[32px] pl-2 py-2 pr-3'>
          <img src='/images/home/why-us/lock.svg' alt='lock' width={11} height={11} />
          <div className='text-[#232C43] text-[11px]/[11px] font-medium'>23h</div>
        </div>
        <div className='text-[#232C43] text-[13px]/[13px] font-medium ml-3'>1 USD = {exchangeRate} INR</div>
        <img src='/images/home/why-us/right-arrow.svg' alt='arrow' width={5} height={3} className='ml-auto' />
      </div>

      <div className='flex mb-2.5'>
        <img src='/images/home/why-us/download.svg' alt='left' width={13} height={13} />
        <div className='text-[#232C43] text-[13px]/[26px] ml-2 font-medium'>Recipient receive</div>
      </div>

      <div className='flex items-center'>
        <div className='bg-[#F0FFC4] rounded-[32px] py-2 pl-2 pr-4 flex items-center'>
          <img src='/images/home/why-us/us.svg' alt='usd' width={21} height={21} />
          <div className='text-[#232C43] text-[13px]/[26px] font-medium mx-3'>USD</div>
          <img src='/images/home/why-us/down-arrow.svg' alt='usd' width={12} height={6} />
        </div>
        <div className='text-[#232C43] text-[26px]/[26px] font-extrabold ml-auto'>1,000.00</div>
      </div>

      <div className='mt-3 mb-6 bg-[#F0FFC4] rounded-xl py-3 pl-3 flex items-center'>
        <img src='/images/home/why-us/link.svg' alt='info' width={10} height={10} />
        <div className='ml-2 text-[#232C43] text-[10px]/[10px]'>
          Sending over 25,000 USD? <span className='font-medium underline'>We'll discount our fee</span>{' '}
        </div>
      </div>

      <div className='flex mb-2.5'>
        <img src='/images/home/why-us/upload.svg' alt='left' width={13} height={13} />
        <div className='text-[#232C43] text-[13px]/[26px] ml-2 font-medium'>You send</div>
      </div>

      <div className='flex items-center'>
        <div className='bg-[#F0FFC4] rounded-[32px] py-2 pl-2 pr-4 flex items-center'>
          <img src='/images/home/why-us/india.svg' alt='usd' width={21} height={21} />
          <div className='text-[#232C43] text-[13px]/[26px] font-medium mx-3'>INR</div>
          <img src='/images/home/why-us/down-arrow.svg' alt='usd' width={14} height={7} />
        </div>
        <div className='text-[#232C43] text-[26px]/[26px] font-extrabold ml-auto'>{new Intl.NumberFormat('en-IN').format(1000 * exchangeRate)}.00</div>
      </div>
    </div>
  );
};

const SendMoney = ({ exchangeRate }) => {
  return (
    <div className='bg-[#092929] px-7 pt-14 pb-25'>
      <div>
        <div className='text-[#ABABAB] text-[24px]/[36px] mb-8'>01</div>
        <div className='text-[#028E75] text-[24px]/[42px] font-semibold'>
          Enter Amount <br /> & Route
        </div>
        <div className='text-white text-[36px]/[52px] font-bold my-8'>Send money fast, safe and secure</div>
        <div className='text-white text-[20px]/[36px]'>Whether it's for education, medicine, meals, or moments - send money across oceans</div>
      </div>
      <div className='rounded-[16px] bg-white mt-6'>
        <div className='px-1 pt-1 bg-[#F0FFC4] pb-4 rounded-[16px]'>
          <ConverterCard exchangeRate={exchangeRate} />
          <div className='my-5 px-5 flex'>
            <div className='text-[#232C43] text-[12px]/[12px] font-medium'>Bank transaction fee</div>
            <div className='text-[#232C43] text-[12px]/[12px] font-medium ml-auto'>₹ 1,532</div>
          </div>
          <div className='px-5 flex'>
            <div className='text-[#232C43] text-[12px]/[12px] font-medium'>Our transaction fee</div>
            <div className='text-[#289B85] text-[12px]/[12px] font-medium ml-auto line-through'>₹ 1,532</div>
          </div>
          <div className='px-2.5 py-1.5 mx-2.5 bg-[#DEEFAC] rounded-[32px] flex mt-3'>
            <div className='text-[#232C43] text-[12px]/[12px] font-medium'>Total transaction fee</div>
            <div className='text-[#232C43] text-[12px]/[12px] font-medium ml-auto '>₹ 1,532</div>
          </div>
        </div>
        <div className='text-[#232C43] text-[12px]/[12px] mt-4 font-medium text-center'>Your one will receive in 5 days (Monday, Aug 4)</div>
        <div className='text-[#232C43] text-[12px]/[12px] mt-2.5 mb-6 font-medium text-center'>
          You could save up to <strong>₹ 1,532</strong>{' '}
        </div>
        <div className='flex px-4 pb-4 items-center'>
          <button className='bg-[#092A2A] text-white text-[12px]/[12px] font-bold rounded-[32px] w-full py-3 ml-auto'>Send now</button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
