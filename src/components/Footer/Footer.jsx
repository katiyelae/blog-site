import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
        <h3 className='footer-text'>Subsribe here to get my latest post!</h3>
        <form >
        <input
          type="email"
          placeholder="Enter your email address here"
          className='email-input-box'
          
        />
        <button
          type="submit"
          className='subscribe-button-box'
          
          >
          Subscribe
        </button>
      </form>
      </div>
  );
}
  
