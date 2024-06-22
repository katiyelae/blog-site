import React from "react";
import Sidebar from '../components/Sidebar/Sidebar'
import Posts from "../components/Posts/Posts"
import './Home.css'
import HomeHeader from "../components/HomeHeader/homeheader"

const Home = () => {
    return (
        <>
           <HomeHeader />
           <Sidebar />
           <Posts />
        </>
    )
}

export default Home