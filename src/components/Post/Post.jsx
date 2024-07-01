import React from 'react'
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <img
            className="post-img"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
        />
    <div className="post-info">
      
    <div className="post-cats">
        <span className="post-cat">
            Book Review
        </span>
      </div>
        <hr />  
      <span className="post-title">
          Lorem ipsum dolor sit amet
      </span>
      <hr />
      
    </div>
    <p className="post-desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
    
      <span className="post-date">June 21, 2024</span>
  </div>
  )
}
