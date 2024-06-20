import React from 'react'
import "./homeheader.css"
import HomeImg from "../../assets/images/landingpageimg.png"

export default function homeheader() {
  return (
    <div className="home-header-container">
        <img
            className="home-header-img"
            src={HomeImg}
            alt="landing page img"
        />
        <div class="img-overlay-text">Read. Dream. Escape.</div>
    </div>
  )
}
