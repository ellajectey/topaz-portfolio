import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative">
            <div className="intro-header bg-gray-200">
                <div className="p-10 container mx-auto mt-4 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                <div className="text-center text-white bg-yellow-900 bg-opacity-50 p-4 mt-4 md:p-8 rounded-md">
                        <h1 className="text-5xl font-bold pt-32 pt-5">Topaz Web Design Studio</h1>
                        <h3 className="text-2xl text-bold text-gray-800 text-shadow mt-8">Where Awesomeness Is Brought To Life.</h3>
                        <hr className="w-1/3 border-t border-gray-200 border-b border-gray-200 mx-auto mb-4" />
                        <ul className="list-inline intro-social-buttons text-bold text-white flex justify-center">
                            <li className='mr-4'>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-x-twitter"></i><span className="network-name">Twitter</span></a>
                            </li>
                            <li className='mr-4'>
                                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-square-github"></i> <span className="network-name">Github</span></a>
                            </li>
                            <li className='mr-4'>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i><span className="network-name">Linkedin</span></a>
                            </li>
                            <li className='mr-4'>
                                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer"><i className="fa fas fa-cogs"></i> <span className="network-name">Figma</span></a>
                            </li>
                        </ul>

                        <Link to="/about" className="hire mt-10 text-lg bg-yellow-800 text-bold text-black py-2 px-6 rounded-full inline-block transition duration-500 ease-in-out hover:bg-gray-300 hover:border-black border hover:border-solid border-black">Get to know us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
