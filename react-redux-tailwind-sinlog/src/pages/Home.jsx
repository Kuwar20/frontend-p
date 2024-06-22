import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[80vh] bg-slate-500'>
      <div className='mb-4'>
        <h1 className='font-bold'>Welcome to Home page</h1>
      </div>
      <div className=' flex flex-col space-y-2'>
        <Link to="/login" className='text-white hover:underline'>Login</Link>
        <Link to="/signup" className='text-white hover:underline'>Signup</Link>
      </div>
    </div>
  )
}

export default Home