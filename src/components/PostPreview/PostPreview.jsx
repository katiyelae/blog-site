import React from 'react'
import DummyImage from '../../assets/images/dummyblogimage.jpg'
import './PostPreview.css'

export default function postPreview() {
  return (
    <div className='preview-container'>
        <div className='preview-image'>
            <img src={DummyImage} alt='placeholder pic' className='preview-post-image'/>
        </div>
        <div className='preview-content'>
            <div>March 12, 2024</div>
            <h2>Twisted Lies Review</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae assumenda quisquam repellendus ipsum consequuntur qui delectus. Itaque voluptatibus odio quam. Ullam molestiae ad cumque doloribus rerum esse officiis dignissimos?</p>
            {/* this will link to actualy blog post to read more */}
            <div>Read More...</div> 
        </div>
    </div>
  )
}



// example of how to style the same component differently based on path/location 
// import { useLocation } from "react-router-dom";

// const Home = () => {
//     let location = useLocation();
//     ...
//     return (
//         <>...
//            <Navigation location={location.pathname} styleClass={"homepage-navbar"}/>
//         </>
//     )
// }
// const Navigation = ({location, styleClass}) => {
//    ...
//    return(
//        <nav className={location === "/home" ? styleClass : "default-navbar"}>
//             ...
//        </nav>
//    )
// }
