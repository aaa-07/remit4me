import classNames from 'classnames';
import styles from './index.module.css';

const WhiteConnector = () => {
  return (
    <div className='relative'>
      <div
        className={classNames(
          'h-6 w-6 rounded-full bg-[#F7F7F7] flex items-center justify-center border-[0.6px] border-[#C4C4C4] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
          styles.connector
        )}
      ></div>
      <div className='h-1.5 w-1.5 rounded-full bg-[#1F1F1F] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    </div>
  );
};

const BlackConnector = () => {
  return (
    <div className='relative'>
      <div
        className={classNames(
          'h-6 w-6 rounded-full bg-[#323232] flex items-center justify-center border-[0.6px] border-[#D9D9D9] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
          styles.connector
        )}
      ></div>
      <div className='h-1.5 w-1.5 rounded-full bg-[#D9D9D9] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    </div>
  );
};

export { WhiteConnector, BlackConnector };
