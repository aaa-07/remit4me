import Image from 'next/image';
import {useState} from 'react';

const Form = ({setShowForm}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setFormData({
        name: '',
        email: '',
        mobile: '',
      });
      setShowForm(false);
      setStatus('Sent');
    } else {
      setStatus('❌ Failed to send email.');
    }
  };

  return (
    <div
      className='bg-white h-screen flex md:items-end items-center justify-center md:pb-10 fixed inset-0 z-50'
      style={{backgroundImage: 'url(/images/home/partners/shade-2.png)', backgroundSize: '100% auto', backgroundPositionY: 'top', backgroundRepeat: 'no-repeat'}}
    >
      <div className='absolute top-4 right-4 text-black bg-opacity-50 cursor-pointer' onClick={() => setShowForm(false)}>
        X
      </div>
      {/* Partner Form Modal */}
      <div className='flex items-center justify-center'>
        <div className='bg-white rounded-4xl p-8 max-w-md mx-4 border-[1px] border-[#DCDCDC]'>
          {/* Title */}
          <h2 className='text-2xl font-bold text-gray-900 text-center mb-4'>Become a partner</h2>

          {/* Descriptive Text */}
          <p className='text-gray-500 text-center mb-8 text-sm'>
            Register now and fill the details at your <br /> convenience by using secured link
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

            {/* Submit Button */}
            <button type='submit' className='w-full bg-[#092929] text-white font-bold py-4 px-6 rounded-4xl'>
              {status === 'Sending...' ? 'Sending...' : status === 'Sent' ? 'Sent' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
