import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to='/'className='home_link'>Bloom Sayiorri</NavLink>
      <nav className='other_links'>
        <NavLink
          to='/'
          className='child_links'
          style={({ isActive }) => {return isActive ? { color: "white", textDecoration: "underline 2px rgb(0, 255, 247)" } : {};}}
        >Home</NavLink>
        <NavLink
          to='/skills'
          className='child_links'
          style={({ isActive }) => {return isActive ? { color: "white", textDecoration: "underline 2px rgb(0, 255, 247)" } : {};}}
        >Skills</NavLink>
        <NavLink
          to='/projects'
          className='child_links'
          style={({ isActive }) => {return isActive ? { color: "white", textDecoration: "underline 2px rgb(0, 255, 247)" } : {};}}
        >Projects</NavLink>
        <NavLink
          to='/contact'
          className='child_links'
          style={({ isActive }) => {return isActive ? { color: "white", textDecoration: "underline 2px rgb(0, 255, 247)" } : {};}}
        >Contact</NavLink>
        {/* <NavLink
          to='/contact'
          className='child_links'
          style={({ isActive }) => {return isActive ? { color: "white", textDecoration: "underline 2px rgb(0, 255, 247)" } : {};}}
        >Contact</NavLink> */}
      </nav>
    </div>
  )
}

export default Navbar