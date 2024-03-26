import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-gray-300 fixed top-0 w-full z-50 h-12 px-3 rounded-md">
            <div className="container mx-auto h-full flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link className="text-yellow-900 text 5xl text-bold hover:bg-white px-3 py-2 rounded-md" to="/">Team TOPAZ</Link>
                </div>
                <div className="hidden md:block text-bold bg-yellow-900 bg-opacity-30">
                    <div className="flex space-x-4">
                        <Link className="text-black hover:bg-yellow-900 px-3 py-2 rounded-md flex items-center" to="/">Home</Link>
                        <Link className="text-black hover:bg-yellow-900 px-3 py-2 rounded-md flex items-center" to="/about">About</Link>
                        <Link className="block px-4 py-2 text-black hover:bg-yellow-900" to="/projets">Projects</Link>
                        <Link className="block px-4 py-2 text-black hover:bg-yellow-900" to="/blog">Blog</Link>
                        <Link className="text-black hover:bg-yellow-900 px-3 py-2 rounded-md flex items-center" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
