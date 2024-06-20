import React from 'react'
import { Routes, Route, Navigate,} from 'react-router-dom';
import About from "./routes/About"
import Home from "./routes/Home"
// import BlogPosts from "./routes/BlogPosts"
import ErrorPage from "./routes/ErrorPage"


//route paths for application
const RoutePaths = () => {
    return (
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/blog" element={<BlogPosts />} /> */}
          
    
            {/* Error paths, keep last */}
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
      );
}
export default RoutePaths
