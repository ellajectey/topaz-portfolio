import React from 'react';
import Hero from '../components/Hero.1.jsx';
import Navbar from '../components/navbar.jsx';
import Skill1 from '../components/skills/skill-1.jsx';
import Skill2 from '../components/skills/skill-2.jsx';
import Footer from '../components/footer.jsx';

function Homepage() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Skill1 limitToFour={true}/>
        <Skill2 limitToFour={true}/>
        <Footer />
        </>
    );
}

export default Homepage;

// bg-[url('./assets/images/contact-bg.avif')]