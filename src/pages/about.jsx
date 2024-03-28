import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import AboutImage from '../assets/images/about.avif';
import JA_Image from '../assets/images/j_a.jpg';
import EJ_Image from '../assets/images/e_j.jpg';
import SM_Image from '../assets/images/s_m.jpg';
import Skill1 from '../components/skills/skill-1';
import Skill2 from '../components/skills/skill-2';
import Experience from '../components/experience';
import Achievement from '../components/achievement';

function AboutUs() {
    return (
        <>
            <NavBar />
            <section className="relative bg-gray-200 h-screen py-24">
                {/* Background Image */}
                <img src={AboutImage} alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-60" />

                <div className="container mx-auto flex justify-center items-center relative z-10">

                    <div className="text-center ml-10 bg-yellow-900 bg-opacity-60 p-4 rounded-lg">
                        <h2 className="text-5xl font-semibold mb-5">About Us</h2>
                        <h5 className="text-2xl font-medium mb-10">Front-end Developer & <span className="text-yellow-500">Designer</span></h5>
                        <p className="text-lg text-white leading-relaxed mb-8 mx-auto max-w-lg">As passionate web developers and designers, we have acquired a solid foundation in front-end and back-end technologies.
                        With a keen eye for design and a drive to create engaging and user-friendly experiences,
                        We are dedicated to leveraging our skills to craft innovative solutions for the digital world.

                        We believe in the power of collaboration, attention to detail, and a relentless pursuit of excellence.<span>Let's create something amazing together!</span></p>
                        <div className="data">
                            <Link to="/contact" className="hire text-lg bg-yellow-500 text-bold text-black py-2 px-6 rounded-full inline-block transition duration-500 ease-in-out hover:bg-gray-300  ">Hire Me</Link>
                        </div>
                    </div>
                </div>
            </section>

            <h2 className="text-4xl font-semibold mb-5 text-black text-center py-4">Our Team</h2>
            <div className='grid grid-cols-3 gap-2'>
    <div className="col-span-1">
        <div className="max-w-2xl mx-4 mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src={SM_Image} alt='S M' />
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">Samuel Melomey</h2>
                <p className="text-yellow-700 text-xl"> Web Designer</p>
            </div>
            <div className="p-4 border-t mx-8 mt-2">
                <a href='https://www.linkedin.com/in/samuel-melomey-183639158/' target='_blank'><button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button></a>
            </div>
        </div>
    </div>
    <div className="col-span-1">
        {/* Second card content */}
        <div className="max-w-2xl mx-4 mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src={JA_Image} alt='J A' />
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">Jennifer Agbeli</h2>
                <p className="text-yellow-700 text-xl"> Web Designer</p>
            </div>
            <div className="p-4 border-t mx-8 mt-2">
                <a href='https://www.linkedin.com/in/jenniferagbeli/' target='_blank'><button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button></a>
            </div>
        </div>
    </div>
    <div className="col-span-1">
        {/* Third card content */}
        <div className="max-w-2xl mx-4 mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-yellow-800 rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src={EJ_Image} alt='E J' />
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">Emmanuella Jectey-Asare</h2>
                <p className="text-yellow-700 text-xl"> Web Designer</p>
            </div>
            <div className="p-4 border-t mx-8 mt-2">
                <a href='https://www.linkedin.com/in/emmanuellajectey-asare/' target='_blank'><button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button></a>
            </div>
        </div>
    </div>
</div>
            
            <Skill1 />
            <Skill2 />
            <Experience/>
            <Achievement/>

           

        </>
    );
};

export default AboutUs;
