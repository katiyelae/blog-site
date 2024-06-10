import React from "react";
import './About.css'
import BlogLogo from '../assets/images/logonotext.png'
import BlankImg from '../assets/images/roundedSquarePlaceholder.png'

const About = () => {
    return (
        <>
            <main className="about-main-section">
                <img src={BlogLogo} className="about-img-logo" alt="about page logo" />
                <h1 className='main-text-title'>About Me</h1>
            </main>
            <section className="about-content-section">
                <div className="blogger-img">
                    <img src={BlankImg} className="blogger-pic"alt="blog creator" />
                </div>
                <div className="about-text-content">
                    <h1 className="about-text-intro">Welcome to Daydreamers Book Haven...</h1>
                    <p className="about-text-body">I’m Kati and books have been a part of my life for quite some time. During the summers of my preteen years,  my dad would take my sister and I to the Borders Book Store and we would spend hours in there...daily! lol and then end the day going out for lunch <br /><br />

                    During that time, I was introduced to so many worlds, characters and feelings that shaped my imagination, and in the end, fell in love with reading. The Twilight, Perfect Chemistry and Kimani Tru book series had a serious hold on me back then. But once I hit high school, I stepped away... for a while (you know, doing what teenagers are supposed to do, right? ) . I read a book here and there while in college, but not like when I was a kid. <br /><br />

                    Fast forward to now and here I am, designing and building my own book blog after picking it back up and and falling in love with reading all over again. I can’t believe I put it on pause for so long. It’s been an exciting journey and I’m super excited to share this project and my thoughts with you on this platform. <br /><br />

                    Books for me these days are one of the best getaways and forms of self care that I can provide myself. Working and having a family can really take a lot out of you some days and reading is always a nice pick me up after a long day.

</p>
                </div>
            </section>
        </>
    )
}

export default About