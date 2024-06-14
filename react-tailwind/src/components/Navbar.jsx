import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { MdLanguage } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";


const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setMenuOpen(!isMenuOpen);
  }

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ] // js array of objects

  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary'>
      <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
        <div className='flex space-x-14 items-center'>
        <a className='text-2xl font-semibold flex items-center space-x-3 text-primary' href="/">
          <img className='w-10 inline-block items-center' src={logo} alt="logo" /><span>XYZ</span>
        </a>

        {/* Nav Items */} {/* hide the navbar content using hidden */}
        <ul className='hidden md:flex space-x-12'>
          {
            navItems.map(({link, path}) => <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
          }
        </ul>
        </div>
        <div className='space-x-12 hidden md:flex items-center'>
          <a href="/" className='hidden lg:flex items-center hover:text-secondary'><MdLanguage className='mr-2'/>Languages</a>
          <button className='bg-secondary px-2 py-2 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Signout</button>
        </div>

        {/* Menu btn, only display on Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className='text-primary focus:outline-none focus:text-gray-300'>
            {
                isMenuOpen ?  (<FaXmark className='w-5 h-6 text-primary'/>): (<FaBars/>)
            }
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar