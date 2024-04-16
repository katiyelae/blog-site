import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import WebsiteLogo from '../../assets/images/daydreamersLogo2.png'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <img src= {WebsiteLogo} alt="Website Logo" className='website-logo'/>
            </div>
            <div className='links-container'>
                <NavLink to="/home" className="navLink--style">
                     <li>Home</li>
                </NavLink>
                <NavLink to="/about" className="navLink--style">
                    <li>About</li>
                </NavLink>
                <NavLink to="/blog" className="navLink--style">
                     <li>Blog</li>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar