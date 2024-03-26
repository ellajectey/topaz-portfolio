import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className=" w-full flex flex-col space-y-10 justify-center text-gray-100 bg-black z-10">
            <nav className="flex justify-center flex-wrap gap-6 font-medium mt-5">
                <Link className="hover:text-gray-100" to="#">Home</Link>
                <Link className="hover:text-gray-100" to="#">Blog</Link>
                <Link className="hover:text-gray-100" to="#">About</Link>
                <Link className="hover:text-gray-100" to="#">Skills</Link>
                <Link className="hover:text-gray-100" to="#">Experience</Link>
                <Link className="hover:text-gray-100" to="#">Achievements</Link>
                <Link className="hover:text-gray-100" to="#">Contact</Link>
            </nav>

            <div className="flex justify-center space-x-5">
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt='' />
                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt='' />
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt='' />
                </Link>
                <Link to="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt='' />
                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt=''/>
                </Link>
            </div>
            <p className="text-center bg-black font-medium pb-1">&copy; 2022 Company Ltd. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
