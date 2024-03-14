import { useState } from 'react';
import '../../App.css';

export default function SignUp() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: ''
      });
  
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setFormErrors({ ...formErrors, [name]: '' });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let errors = {};
      let isValid = true;
      for (const key in formData) {
        if (!formData[key]) {
          errors[key] = 'This field is required';
          isValid = false;
        }
      }
      if (!isValid) {
        setFormErrors(errors);
        return;
      }
  
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
          <label className='block mb-1' htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
          {formErrors.username && <p className='text-red-500'>{formErrors.username}</p>}
        </div>
        <div className='mb-4'>
          <label className='block mb-1' htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
          {formErrors.email && <p className='text-red-500'>{formErrors.email}</p>}
        </div>
        <div className='mb-4'>
          <label className='block mb-1' htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
          {formErrors.password && <p className='text-red-500'>{formErrors.password}</p>}
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {submitError && (
        <div className='mt-4 text-red-500'>
          <p className='text-center text-2xl'>{submitError}</p>
        </div>
      )}
    </div>
  );
}
