import Image from 'next/image';
import {useEffect, useState} from 'react';

const Form = ({setShowForm}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [status, setStatus] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Currency of Remittance');
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
    const data = await response.json();
    const removedCountries = data.data.filter((country) => country.name !== 'India');
    setCountries(removedCountries);
  };

  const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.name);
    setIsModalOpen(false);
    setSearchTerm('');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData);
  //   // Handle form submission here
  //   console.log('Form submitted:', data);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...formData, country: selectedCountry}),
    });

    const data = await res.json();
    if (data.success) {
      setFormData({
        name: '',
        email: '',
        mobile: '',
      });
      setSelectedCountry('Currency of Remittance');
      setShowForm(false);
      setStatus('Sent');
    } else {
      setStatus('❌ Failed to send email.');
    }
  };

  return (
    <div className='backdrop-blur-2xl h-screen flex items-center justify-center fixed inset-0 z-50'>
      {/* Waitlist Form Modal */}
      <div className='flex items-center justify-center'>
        <div className='bg-white rounded-4xl p-8 max-w-md md:w-90 mx-4 border-[1px] border-[#DCDCDC] relative'>
          {!isModalOpen && (
            <>
              <div className='absolute top-6 right-6 text-white bg-opacity-50 cursor-pointer' onClick={() => setShowForm(false)}>
                <Image src='/images/home/close.svg' alt='close' width={11} height={11} />
              </div>
              {/* Title */}
              <h2 className='text-2xl font-bold text-gray-900 text-center mb-4'>Join now</h2>

              {/* Descriptive Text */}
              <p className='text-gray-500 text-center mb-8 text-sm'>
                Join our waiting list and get 1500/- <br /> discount on your first transfer
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Field */}
                <div className='relative'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                    placeholder='Enter your name'
                    required
                  />
                </div>

                {/* Email Field */}
                <div className='relative'>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                    placeholder='Enter your email'
                    required
                  />
                </div>

                {/* Mobile Number Field */}
                <div className='relative'>
                  <input
                    type='tel'
                    name='mobile'
                    value={formData.mobile}
                    onChange={handleInputChange}
                    pattern='[6-9][0-9]{9}'
                    required
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                    placeholder='Enter your mobile number'
                  />
                </div>

                <div className='relative'>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    type='button'
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg bg-transparent text-left text-gray-400 focus:border-teal-600 focus:outline-none flex items-center justify-between'
                  >
                    <span>{selectedCountry}</span>
                    <img src='/images/home/why-us/down-arrow.svg' alt='chevron-down' width={12} height={6} />
                  </button>
                </div>

                {/* Submit Button */}
                <button type='submit' className='w-full bg-[#092929] text-white font-bold py-4 px-6 rounded-4xl'>
                  {status === 'Sending...' ? 'Sending...' : status === 'Sent' ? 'Sent' : 'Join'}
                </button>
              </form>
            </>
          )}
          {isModalOpen && (
            <div className='bg-white w-full max-w-md max-h-[80vh] overflow-hidden'>
              {/* Modal Header */}
              <div className='border-b border-gray-100'>
                <div className='flex items-center justify-between mb-2'>
                  <div className='text-xl font-bold'></div>
                  <button onClick={() => setIsModalOpen(false)} className='font-semibold'>
                    <Image src='/images/home/close.svg' alt='close' width={11} height={11} />
                  </button>
                </div>

                {/* Search Bar */}
                <div className='relative mx-0.5'>
                  <img src='/images/home/search.svg' alt='search' className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                  <input
                    type='text'
                    placeholder='Search Country'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-teal-600'
                  />
                </div>
              </div>

              {/* Country List */}
              <div className='overflow-y-auto max-h-96'>
                {filteredCountries.map((country, index) => (
                  <button
                    key={country.name}
                    onClick={() => handleCountrySelect(country)}
                    className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 text-left transition-colors`}
                  >
                    <Image src={country.flag?.trim()} alt={country.name} width={40} height={32} />
                    <span className='text-lg font-semibold text-[#7F7F7F] ml-4'>{country.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
