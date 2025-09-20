import classNames from 'classnames';

const Advantages = () => {
  const advantages1 = [
    {
      title: 'Co-Branded Digital Portal',
      description: 'Your logo, your voice, your style - we power the backend invisibly.'
    },

    {
      title: 'All Transaction Types in One Place',
      description: 'Education fees, property purchase, travel, investments, family transfers - more reasons for customers to keep coming back to you.'
    }
  ];

  const advantages2 = [
    {
      title: 'Multi-Bank Network Access',
      description: 'Plug in once, serve customers across multiple AD-I banks.'
    },
    {
      title: 'Zero Infrastructure Cost',
      description: 'No dev teams. No servers. No compliance departments.'
    }
  ];

  return (
    <div className='bg-[#092929] text-white py-20 px-6'>
      <div className=''>
        {/* Header Section */}
        <div className='text-center text-white'>
          <p className='text-[24px]/[36px] font-medium mb-3'>Become a Partner</p>
          <h2 className='text-[40px]/[64px] font-medium'>
            Our partners have advantage right <br /> from the day one
          </h2>
        </div>

        {/* 2x2 Grid of Advantages */}
        <div className='flex mt-9 justify-center'>
          <div className='flex-grow'>
            {advantages1.map((advantage, index) => (
              <div key={index} className={classNames('py-[160px] flex flex-col items-end', index === 0 ? 'border-[#104747] border-b-[1px]' : '')}>
                <div className='w-[420px]'>
                  <h3 className='font-medium text-[24px]/[24px] mb-6'>{advantage.title}</h3>
                  <p className='text-[20px]/[36px]  text-[#556F6F] w-[364px]'>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='border-[#104747] border-l-[1px] mx-[100px]' />
          <div className='flex-grow'>
            {advantages2.map((advantage, index) => (
              <div key={index} className={classNames('py-[160px]', index === 0 ? 'border-[#104747] border-b-[1px]' : '')}>
                <h3 className='font-medium text-[24px]/[24px] mb-6'>{advantage.title}</h3>
                <p className='text-[20px]/[36px]  text-[#556F6F] w-[364px]'>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
