// this page is the home area of where a single blog post will be displayed after it's clicked on no matter that post clicked on.

import React from 'react'
import SinglePost from "../components/SinglePost/SinglePost"
import Sidebar from "../components/Sidebar/Sidebar"
import "./Single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <Sidebar />
    </div>
  )
}

