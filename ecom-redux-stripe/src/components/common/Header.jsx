import React from 'react'
import LogoImg from '../../assets/common/logo.png'
import { menulists } from '../../assets/data/data'
import { Badges, CustomLink } from './CustomComponents'
import { IoCartOutline, IoSearch } from 'react-icons/io5'

const Header = () => {
  return (
    <div>
      <header className='header px-12 py-3 bg-white-100 relative z-20'>
        <nav className='p-4 flex justify-between items-center relative'>
          <div className='flex items-center gap-14'>
            <div>
              <img src={LogoImg} alt="LogoImg" className='h-7' />
            </div>
            <div className='hidden lg:flex items-center justify-between gap-8'>
              {menulists.map((menuItem) => (
                <li key={menuItem.id} className='uppercase list-none'>
                  <a href={menuItem.path}>{menuItem.link}</a>
                </li>
              ))
              }
            </div>
          </div>
          <div className='flex items-center gap-8 icons'>
            <div className='uppercase hidden lg:block text-inherit relative z-20'>
              <CustomLink>Login</CustomLink>
              <span className=''>/</span>
              <CustomLink>Register</CustomLink>
            </div>
            <div className='icon flex items-center justify-center gap-6'>
              <IoSearch className='text-2xl' />
              <IoCartOutline className='text-2xl' />
              <div className='absolute top-2 right-1.5'>
                <Badges color='bg-primary-green'>0</Badges>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header