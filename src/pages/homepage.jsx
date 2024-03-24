import React from 'react';
import Hero from '../components/Hero.1.jsx';
import Navbar from '../components/navbar.jsx';
import Skill from '../components/skill.jsx';

function Homepage() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Skill/>
        </>
    );
}

export default Homepage;

// bg-[url('./assets/images/contact-bg.avif')]