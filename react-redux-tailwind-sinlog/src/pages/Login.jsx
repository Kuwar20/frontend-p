import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const notify = () => toast.success('Form Filled Successfully!')
const notifyError = () => toast.error('All Fields are required')

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    if (!email || !password) {
      notifyError();
      return;
    }
    notify();
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 px-4'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md md:w-3/4 lg:w-1/2'>
        <h1 className='text-center text-2xl font-bold mb-6'>Login</h1>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Email:</label>
          <input type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Password:</label>
          <input type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <button type="submit" className=' mb-4 mt-4 w-full bg-green-600 py-3 rounded-md hover:bg-green-700 font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Login</button>
        <Toaster />
        <Link to="/signup" className='text-center underline mt-4 block w-full max-w-md md:w-3/4 lg:w-1/2 hover:text-blue-500'>Don't have an account? Register</Link>
      </form>
    </div>
  )
}

export default Login