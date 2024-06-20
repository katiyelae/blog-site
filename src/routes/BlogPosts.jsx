import React from "react";
import PostPreview from '../components/PostPreview/PostPreview'
import BlogLogo from '../assets/images/logonotext.png'

const BlogPosts = () => {
    return (
        <>
            <main className="about-main-section">
                <img src={BlogLogo} className="about-img-logo" alt="about page logo" />
                <h1 className='main-text-title'>Blog Posts</h1>
            </main>
            <div className="posts-container">
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
            </div>
        </>
    )
}

export default BlogPosts