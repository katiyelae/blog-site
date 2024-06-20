import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import WebsiteLogo from '../../assets/images/logotextonly.png'

const Navbar = () => {
    return (

        <div className='nav-container'>
            {/* left side navbar */}
            <div className='nav-left'>
                <img 
                src= { WebsiteLogo } 
                alt="Blog Logo" 
                className='nav-logo'/>
            </div>

            {/* center of navbar */}
        <div className="nav-center">
            <ul className="nav-list">
            <li className="nav-list-item">
                <Link className="link" to="/">
                HOME
                </Link>
            </li>
            <li className="nav-list-item">ABOUT</li>
            <li className="nav-list-item">CONTACT</li>
            <li className="nav-list-item">
                <Link className="link" to="/write">
                WRITE
                </Link>
            </li>
            <li className="nav-list-item">LOGOUT</li>
            </ul>
      </div>
        
        {/* right side navbar */}
      <div className="nav-right">
       
          <Link className="link" to="/settings">
            <img
              className="nav-img"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        <i className="nav-search-icon fas fa-search"></i>
      </div>
        </div>
    )
}

export default Navbar