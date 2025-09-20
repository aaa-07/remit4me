const Slide1 = ({ scrollY }) => {
  return (
    <div className='flex' style={{ backgroundColor: scrollY > 982 ? '#1f1f1f' : 'transparent', opacity: scrollY - 482 > 0 ? Math.min((scrollY - 482) / 482, 1) : 0 }}>
      <div className='flex flex-col justify-center ml-[138px] h-screen'>
        <div className='font-medium text-[20px]/[40px] text-white text-left'>Why choose us?</div>
        <div className='text-[64px]/[92px] text-[#E9E9E9]'>
          A Smarter & secure <br /> Way to Send Your
          <br /> Money Across
          <br /> Borders
        </div>
      </div>
      <div className='pt-[50vh] mt-[75px] ml-[910px] mr-[310px]'>
        <div className='text-[40px]/[56px] text-[#289B85] font-semibold'>
          End-to-End <br /> Simplicity
        </div>
        <div className='text-[#ABABAB] text-[20px]/[36px] mt-4'>
          No multiple logins, branch
          <br /> visits, or paperwork,
          <br /> complete your transfer in <br />
          one smooth journey, from
          <br /> start to confirmation.
        </div>
      </div>
    </div>
  );
};

export default Slide1;
