import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import AboutImage from '../assets/images/about.avif';
import Skill from '../components/skill';

const AboutUs = () => {
    return (
        <>
            <NavBar />
            <section className="relative bg-gray-200 h-screen py-24">
                {/* Background Image */}
                <img src={AboutImage} alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />

                <div className="container mx-auto flex justify-center items-center relative z-10">
                    {/* Image within Content */}
                    <img src={AboutImage} alt="Content Image" className="w-96 h-96 object-cover rounded-full border-4 border-yellow-900" />

                    <div className="text-center ml-10 bg-yellow-900 bg-opacity-50 p-4 rounded-lg">
                        <h2 className="text-5xl font-semibold mb-5">About Us</h2>
                        <h5 className="text-2xl font-medium mb-10">Front-end Developer & <span className="text-yellow-700">Designer</span></h5>
                        <p className="text-lg leading-relaxed mb-8 mx-auto max-w-lg">As a passionate web developer and designer, I have acquired a solid foundation in front-end and back-end technologies. 
                        With a keen eye for design and a drive to create engaging and user-friendly experiences, 
                        I am dedicated to leveraging my skills to craft innovative solutions for the digital world. 
                         Through continuous learning and creative exploration, I am committed to pushing boundaries and delivering exceptional results in every project I undertake.
                          I believe in the power of collaboration, attention to detail, and a relentless pursuit of excellence.<span>Let's create something amazing together!</span></p>
                        <div className="data">
                            <Link to="/contact" className="hire text-lg bg-yellow-800 text-bold text-black py-2 px-6 rounded-full inline-block transition duration-500 ease-in-out hover:bg-gray-300 hover:border-black border hover:border-solid border-black">Hire Me</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Skill/>
        </>
    );
};

export default AboutUs;
