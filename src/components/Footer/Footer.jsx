import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
        <h3 className='footer-text'>Subsribe here to get my latest post!</h3>
        <form className='email-list-form'>
            <input 
            name="email"
            aria-label='email'
            type='text'
            placeholder='Enter email address here' 
            className='email-input-area'/>
            <button type="submit">Join Now</button>
        </form>
        
        </div>
  )
}
