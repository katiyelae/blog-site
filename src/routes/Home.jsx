import React from "react";
import PostPreview from '../components/PostPreview/PostPreview'
import User from '../assets/images/circlePlaceholder.png'
import './Home.css'
import HomeHeader from "../components/HomeHeader/homeheader"

const Home = () => {
    return (
        <>
           <HomeHeader />
            <div className="main-content-section">
                
                <div className="post-preview-section">
                    <h3>Recent Posts</h3>
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                    {/* add link to take to blog page of application to see more posts */}
                    <span>See More...</span>
                </div>
                <div className="about-me-section">
                    <div className="about-me-container">
                        <img src={User} alt="placeholder for blogger img" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum, aliquam repellendus eveniet tenetur veniam rem iusto, libero sapiente ut rerum ea alias quas in numquam repudiandae nesciunt. Sint, necessitatibus.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home