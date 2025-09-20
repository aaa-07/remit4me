import classNames from 'classnames';
import Image from 'next/image';
import styles from '../index.module.css';

const Slide7 = () => {
  return (
    <div className='h-[584px] overflow-hidden relative bg-[#FFD2AD] flex justify-center items-end gap-2.5 z-[1]'>
      {/* <img src='/images/home/why-us/flag1.png' alt='flag' width={100} className='h-auto' />
      <img src='/images/home/why-us/flag2.png' alt='flag' width={100} className='h-auto' />
      <img src='/images/home/why-us/flag3.png' alt='flag' width={100} className='h-auto' /> */}
      <div className={classNames(styles.flag1)}>
        <Image src='/images/home/why-us/flag1.png' alt='flag' width={100} height={400} className='h-auto' />
        <Image src='/images/home/why-us/flag1.png' alt='flag' width={100} height={400} className='h-auto' />
      </div>
      <div className={classNames(styles.flag2)}>
        <Image src='/images/home/why-us/flag2.png' alt='flag' width={100} height={400} className='h-auto' />
        <Image src='/images/home/why-us/flag2.png' alt='flag' width={100} height={400} className='h-auto' />
      </div>
      <div className={classNames(styles.flag3)}>
        <Image src='/images/home/why-us/flag3.png' alt='flag' width={100} height={400} className='h-auto' />
        <Image src='/images/home/why-us/flag3.png' alt='flag' width={100} height={400} className='h-auto' />
      </div>
    </div>
  );
};

export default Slide7;
