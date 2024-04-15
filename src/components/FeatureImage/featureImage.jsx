import React from 'react'
import FeatureImg from '../../assets/images/landingpageimg.png'
import './featureImage.css'

const FeatureImage = ()  =>{
  return (
    <div className='feature-container'>  
         <div className='content-container'>
            <img src={FeatureImg} alt="landing page feature" />
            <h1>Read, Dream, Repeat</h1>
        </div>
    </div>
  )
}

export default FeatureImage