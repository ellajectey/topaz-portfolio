import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import AboutImage from '../assets/images/about.avif';
import TeamImage from '../assets/images/individual.jpg';
import Skill1 from '../components/skills/skill-1';
import Skill2 from '../components/skills/skill-2';

function AboutUs() {
    return (
        <>
            <NavBar />
            <section className="relative bg-gray-200 h-screen py-20">
                {/* Background Image */}
                <img src={AboutImage} alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />

                <div className="container mx-auto flex justify-center relative z-10">
                    {/* Image at the Top */}
                    <div className="mb-4 flex flex-col justify-between items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-2 border-4 border-yellow-800">
                            <img src={TeamImage} alt="Content Image" className="w-full h-full object-cover" />
                        </div>
                        {/* Two Images Beneath */}
                        <div className="flex flex-row gap-20">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-800">
                                <img src={TeamImage} alt="Content Image" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-800">
                                <img src={TeamImage} alt="Content Image" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center ml-20 bg-yellow-900 bg-opacity-50 p-4 rounded-lg">
                        <h2 className="text-5xl font-semibold mb-5">About Us</h2>
                        <h5 className="text-2xl font-medium mb-10">Front-end Developers & <span className="text-yellow-700">Designers</span></h5>
                        <p className="text-lg leading-relaxed mb-8 mx-auto max-w-lg">As passionate web developers and designers, we have acquired a solid foundation in front-end and back-end technologies. 
                        With a keen eye for design and a drive to create engaging and user-friendly experiences, 
                        We are dedicated to leveraging our skills to craft innovative solutions for the digital world. 
                         
                          We believe in the power of collaboration, attention to detail, and a relentless pursuit of excellence.<span>Let's create something amazing together!</span></p>
                        <div className="button">
                            <Link to="/contact" className="hire text-lg bg-yellow-800 text-bold text-black py-2 px-6 rounded-full inline-block transition duration-500 ease-in-out hover:bg-gray-300 hover:border-black border hover:border-solid border-black">Hire Us</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Skill1/>
            <Skill2/>
        </>
    );
};

export default AboutUs;
