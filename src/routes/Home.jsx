import React from "react";
import FeatureImg from '../assets/images/landingpageimg.png'
import PostPreview from '../components/PostPreview/PostPreview'
import User from '../assets/images/circlePlaceholder.png'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="feature-image-section">
                <div className='feature-container'>  
                    <img src={FeatureImg} alt="landing page feature" />
                    <h1 className='feature-text'>Read, Dream, Repeat</h1>
                </div>
            </div>
            <div className="main-content-section">
                
                <div className="post-preview-section">
                    <h3>Recent Posts</h3>
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
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