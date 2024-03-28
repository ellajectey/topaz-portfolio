import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-black fixed top-0 w-full z-50 h-12 px-3">
            <div className="container mx-auto h-full flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link className="text-yellow-500 text 5xl text-bold font-bold" to="/">TOPAZ PORTFOLIO</Link>
                </div>
                <div className="hidden md:block text-bold ">
                    <div className="flex space-x-4">
                        <Link className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md flex items-center" to="/">Home</Link>
                        <Link className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md flex items-center" to="/about">About</Link>
                        <Link className="block px-4 py-2 text-white hover:bg-yellow-500 rounded-md" to="/projects">Projects</Link>
                        <Link className="block px-4 py-2 text-white hover:bg-yellow-500" to="/blog">Blog</Link>
                        <Link className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md flex items-center" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
