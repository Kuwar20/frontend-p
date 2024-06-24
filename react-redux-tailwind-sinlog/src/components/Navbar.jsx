import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-slate-400 p-4 text-xl font-semibold'>
      <div className='flex items-center justify-between'>
        <div>
          <a className='hover:text-slate-600'>Brand Name</a>
        </div>
        <div className='hidden md:flex space-x-5 ml-14'>
          <Link to="/" className='hover:text-slate-600'>Home</Link>
          <Link to="/login" className='hover:text-slate-600'>Login</Link>
          <Link to="/signup" className='hover:text-slate-600'>Signup</Link>
        </div>
        <div className='hidden md:flex ml-auto'>
          <button className='p-1 py-1.5 px-3 bg-blue-500 rounded text-white hover:bg-blue-600'>Signout</button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
            {isOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden mt-4'>
          <a href="/" className='block py-2 hover:text-slate-600'>Home</a>
          <a href="/login" className='block py-2 hover:text-slate-600'>Login</a>
          <a href="/signup" className='block py-2 hover:text-slate-600'>Signup</a>
          <button className='block w-50 text-left p-1 py-1.5 px-3 mt-2 bg-blue-500 rounded text-white hover:bg-blue-600'>Signout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;