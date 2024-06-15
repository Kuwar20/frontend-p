import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({count}) => {
  return (
    <>
    <div>this is a 'count' state from app.js to navbar.js = {count}</div>
    <NavLink to='/fetch'>Fetch some stuff</NavLink>
    </>
  )
}

export default Navbar