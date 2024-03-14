import { useState } from 'react';
import '../../App.css';

export default function SignUp() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
  
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitting(true);
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (!response.ok) {
          throw new Error('Failed to sign up');
        }
  
        // Reset form data and state after successful submission
        setFormData({
          username: '',
          email: '',
          password: ''
        });
        setSubmitting(false);
        setSubmitError('');
        alert('Form submitted successfully!');
      } catch (error) {
        setSubmitting(false);
        setSubmitError('Disconnected, Please try again later.The server resource requested cannot be found');
        console.error(error);
      }
    };
  

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-3xl font-bold mb-4'>SIGN UP</h1>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Sign Up'}
          </button>
        </div>
      </form>
      {submitError && (
        <div className='mt-4 text-red-500'>
          <p className='text-center text-2xl'>{submitError}</p>
        </div>
      )}
    </div>
  );
}
