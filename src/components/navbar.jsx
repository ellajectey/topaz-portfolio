import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-gray-300 fixed top-0 w-full z-50 h-12 px-3 rounded-md">
            <div className="container mx-auto h-full flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link className="text-yellow-700 text 5xl text-bold" to="/">TOPAZ PORTFOLIO</Link>
                </div>
                <div className="hidden md:block text-bold ">
                    <div className="flex space-x-4">
                        <Link className="text-black hover:bg-yellow-700 px-3 py-2 rounded-md flex items-center" to="/">Home</Link>
                        <Link className="text-black hover:bg-yellow-700 px-3 py-2 rounded-md flex items-center" to="/about">About</Link>
                        <Link className="block px-4 py-2 text-black hover:bg-yellow-700" to="/projects">Projects</Link>
                        <Link className="block px-4 py-2 text-black hover:bg-yellow-700" to="/blog">Blog</Link>
                        <Link className="text-black hover:bg-yellow-700 px-3 py-2 rounded-md flex items-center" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
