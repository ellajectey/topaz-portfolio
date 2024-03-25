
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="bg-gray-300 fixed top-0 w-full z-50 h-12">
            <div className="container mx-auto h-full flex items-center justify-between">
                <div className="flex-shrink-0">
                    <a className="text-black text 3xl text-bold hover:bg-white px-3 py-2 rounded-md" href="http://virtual-dawn.com/index_english.html" target="_blank" rel="noopener noreferrer">Team TOPAZ</a>
                </div>
                <div className="hidden md:block text-bold bg-gray-400 bg-opacity-30">
                    <div className="flex space-x-4">
                        <Link className="text-black hover:bg-white px-3 py-2 rounded-md flex items-center" to="/">Home</Link>
                        <Link className="text-black hover:bg-white px-3 py-2 rounded-md flex items-center" to="/about">About</Link>
                        <div className="relative">
                            <button className="text-black hover:bg-white px-3 py-2 rounded-md cursor-pointer flex items-center" onClick={toggleDropdown}>
                                Blog
                                <svg className="h-5 w-5 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {showDropdown && (
                                <div className="absolute bg-white shadow-lg mt-2 py-2 w-32">
                                    <Link to="/blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Skills</Link>
                                    <Link to="/blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Experience</Link>
                                    <Link to="/blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Achievement</Link>
                                </div>
                            )}
                        </div>
                        <Link className="text-black hover:bg-white px-3 py-2 rounded-md flex items-center" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

