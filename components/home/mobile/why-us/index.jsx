import {BlackConnector, WhiteConnector} from '../../why-us/connector';
import Slide1 from './slide-1';
import Slide2 from './slide-2';
import Slide3 from './slide-3';
import Slide4 from './slide-4';
import Slide5 from './slide-5';
import Slide6 from './slide-6';
import Slide7 from './slide-7';

const WhyUs = ({exchangeRate}) => {
  return (
    <div className='relative overflow-hidden bg-white' id='why-choose-us-mobile'>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 exchangeRate={exchangeRate} />
      <Slide6 />
      <Slide7 />
      <img src='/images/home/mobile/why-us/line.svg' alt='line' width={1} height={6129} className='absolute top-[435px] left-10' />
      <div className='absolute top-[425px] left-10 -translate-x-1/2 z-[1]'>
        <BlackConnector />
      </div>
      <div className='absolute top-[1220px] left-10 -translate-x-1/2 z-[1]'>
        <WhiteConnector />
      </div>
      <div className='absolute top-[2020px] left-10 -translate-x-1/2 z-[1]'>
        <WhiteConnector />
      </div>
      <div className='absolute top-[2980px] left-10 -translate-x-1/2 z-[1]'>
        <WhiteConnector />
      </div>
      <div className='absolute top-[3900px] left-10 -translate-x-1/2 z-[1]'>
        <WhiteConnector />
      </div>
      <div className='absolute top-[4680px] left-10 -translate-x-1/2 z-[1]'>
        <WhiteConnector />
      </div>
    </div>
  );
};

export default WhyUs;
