import React from 'react'
import Post from "../Post/Post"
import "./Posts.css"

export default function Posts() {
  return (
    <div>
      <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
    </div>
  )
}
