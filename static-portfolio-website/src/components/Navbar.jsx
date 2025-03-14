import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-slate-100 flex place-content-between w-full h-inherit py-4 px-4 fixed top-0 left-0 z-10">
        <h2 className="">Navbar</h2>
        <nav className="">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/details">Details</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        {/* ICON FOR THEMES */}
    </header>
  )
}

export default Navbar