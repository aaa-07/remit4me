'use client';

import Hero from './hero';
import WhyUs from './why-us';
import Journey from './journey';
import Strength from './strength';
import Partners from './partners';
import Waitlist from './waitlist';
import { useEffect, useState } from 'react';
import MobileTemplate from './mobile';
import Lenis from 'lenis';
import SendMoney from './send-money';
import Footer from './footer';
import Header from './header';

const Home = () => {
  const [exchangeRate, setExchangeRate] = useState(0);

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.5,
  //     easing: (t) => t,
  //     smoothWheel: true,
  //     smoothTouch: false
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   // Cleanup when component unmounts
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    const exchangeRateResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (exchangeRateResponse.ok) {
      const exchangeRate = await exchangeRateResponse.json();
      const { rates } = exchangeRate;
      const { INR } = rates;
      setExchangeRate(INR);
      // console.log('🚀 ~ useEffect ~ INR:', INR);
      // console.log('🚀 ~ useEffect ~ exchangeRate:', exchangeRate);
    }
  };

  return (
    <div>
      <div className='hidden md:block'>
        <Header />
        {/* <SendMoney exchangeRate={exchangeRate} /> */}
        <div className='h-[600vh] relative'>
          <Hero />
          <WhyUs exchangeRate={exchangeRate} />
        </div>
        <Journey />
        <Waitlist />
        <Strength />
        <Partners />
        <Footer />
      </div>
      <div className='block md:hidden'>
        <MobileTemplate exchangeRate={exchangeRate} />
      </div>
    </div>
  );
};

export default Home;
