import React from 'react'
import FeatureImg from '../../assets/images/landingpageimg.png'
import './featureImage.css'

const FeatureImage = ()  =>{
  return (
    <div className='feature-container'>  
        <img src={FeatureImg} alt="landing page feature" />
        <h1 className='feature-text'>Read, Dream, Repeat</h1>
    </div>
  )
}

export default FeatureImage