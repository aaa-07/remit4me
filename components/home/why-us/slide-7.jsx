import classNames from 'classnames';
import Image from 'next/image';
import styles from './index.module.css';

const Slide7 = () => {
  return (
    <div className='h-screen flex bg-white overflow-hidden'>
      <div className='w-[946px] bg-[#FFD2AD] flex gap-5 justify-center items-end relative z-[1]'>
        <div className={classNames(styles.flag1)}>
          <Image src='/images/home/why-us/flag1.png' alt='flag' width={149} height={1171} className='h-[1171px]' />
          <Image src='/images/home/why-us/flag1.png' alt='flag' width={149} height={1171} className='h-[1171px]' />
        </div>
        <div className={classNames(styles.flag2)}>
          <Image src='/images/home/why-us/flag2.png' alt='flag' width={149} height={1171} className='h-[1171px]' />
          <Image src='/images/home/why-us/flag2.png' alt='flag' width={149} height={1171} className='h-[1171px]' />
        </div>
        <div className={classNames(styles.flag3)}>
          <Image src='/images/home/why-us/flag3.png' alt='flag' width={149} height={1171} className='h-[1171px]' />
          <Image src='/images/home/why-us/flag3.png' alt='flag' width={149} height={1171} className='h-[1171px]' />
        </div>
        <div className={classNames(styles.flag4)}>
          <Image src='/images/home/why-us/flag4.png' alt='flag' width={149} height={888} className='h-[888px]' />
          <Image src='/images/home/why-us/flag4.png' alt='flag' width={149} height={888} className='h-[888px]' />
        </div>
        <div className={classNames(styles.flag5)}>
          <Image src='/images/home/why-us/flag5.png' alt='flag' width={149} height={1171} className={classNames('h-[1171px]')} />
          <Image src='/images/home/why-us/flag5.png' alt='flag' width={149} height={1171} className={classNames('h-[1171px]')} />
        </div>
      </div>
    </div>
  );
};

export default Slide7;
