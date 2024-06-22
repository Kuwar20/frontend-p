import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-slate-400 p-4 text-xl font-semibold'>
      <div className='flex items-center justify-between'>
        <div className='text-2xl'>
          <a href="/" className='hover:text-slate-600'>Brand Name</a>
        </div>
        <div className='hidden md:flex space-x-5 ml-14'>
          <a href="/" className='hover:text-slate-600'>Home</a>
          <a href="/login" className='hover:text-slate-600'>Login</a>
          <a href="/signup" className='hover:text-slate-600'>Signup</a>
        </div>
        <div className='hidden md:flex ml-auto'>
          <button className='p-1 py-1.5 px-3 bg-blue-500 rounded text-white hover:bg-blue-600'>Signout</button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden mt-4'>
          <a href="/" className='block py-2 hover:text-slate-600'>Home</a>
          <a href="/login" className='block py-2 hover:text-slate-600'>Login</a>
          <a href="/signup" className='block py-2 hover:text-slate-600'>Signup</a>
          <button className='block w-50 text-left p-1 py-1.5 px-3 mt-2 mr-24 bg-blue-500 rounded text-white hover:bg-blue-600'>Signout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
