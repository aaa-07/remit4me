import Hero from './hero';
import Journey from './journey';
import Waitlist from './waitlist';
import Strength from './strength';
import Partners from './partners';
import WhyUs from './why-us/index';
import SendMoney from './send-money';
import Footer from './footer';
import Header from './header';

const MobileTemplate = ({exchangeRate}) => {
  return (
    <div>
      {/* <SendMoney exchangeRate={exchangeRate} /> */}
      <Header />
      <Hero />
      <WhyUs exchangeRate={exchangeRate} />
      <Journey />
      <Waitlist />
      <Strength />
      <Partners />
      <Footer />
    </div>
  );
};

export default MobileTemplate;
