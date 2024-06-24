// import React, { useState } from 'react'
// import toast, { Toaster } from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';

// const notify = () => toast.success('Login Successfully!')
// const notifyError = () => toast.error('All Fields are required')
// const notifyErrorPassword = () => toast.error('Password must be at least 6 characters')

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       notifyError();
//       return;
//     }
//     if (password.length < 6) {
//       notifyErrorPassword();
//       return;
//     }
//     try {
//       const response = await fetch(`http://localhost:3000/api/user/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         notify();
//         navigate('/');
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('email', email);
//         console.log(data);
//       }else{
//         toast.error(data.message); // // the backend sends an 'message' field
//       }
//     } catch (error) {
//       console.log(error);
//       notifyError();
//     }
//   }

//   return (
//     <div className='flex justify-center items-center min-h-screen bg-gray-100 px-4'>
//       <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md md:w-3/4 lg:w-1/2'>
//         <h1 className='text-center text-2xl font-bold mb-6'>Login</h1>
//         <div className='mb-4'>
//           <label className='block text-gray-700 font-bold mb-2'>Email:</label>
//           <input type="email"
//             placeholder='Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className='w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700 font-bold mb-2'>Password:</label>
//           <input type="password"
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className='w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//           />
//         </div>

//         <button type="submit" className=' mb-4 mt-4 w-full bg-green-600 py-3 rounded-md hover:bg-green-700 font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Login</button>
//         <Toaster />
//         <div className='flex justify-center'>
//           <Link to="/signup" className='text-center underline mt-4 w-full max-w-md md:w-3/4 lg:w-1/2 hover:text-blue-500'>Don't have an account? Register</Link>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../features/userDataSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.app);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('All Fields are required');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(() => { });

    try {
      const response = await fetch(`http://localhost:3000/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        notify();
        navigate('/');
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        console.log(data);
      } else {
        toast.error(data.message); // // the backend sends an 'message' field
      }
    } catch (error) {
      console.log(error);
      notifyError();
    }
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

        <button
          type="submit"
          className=' mb-4 mt-4 w-full bg-green-600 py-3 rounded-md hover:bg-green-700 font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        >Submit</button>
        <Toaster />
        <div className='flex justify-center'>
          <Link to="/signup" className='text-center underline mt-4 w-full max-w-md md:w-3/4 lg:w-1/2 hover:text-blue-500'>Don't have an account? Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login