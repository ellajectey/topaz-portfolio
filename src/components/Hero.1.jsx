import React from 'react';

export default function Hero() {
    return (
        <div className="relative">
            <div className="intro-header bg-cover bg-center" style={{ backgroundImage: "url('https://40.media.tumblr.com/1b916597d3e174399cb7adadddb66ede/tumblr_nt5uk4psl31ud7rr3o1_1280.jpg')", height: "550px" }}>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="container mx-auto mt-10 ">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold pt-32 mb-6">Topaz Web Design Studio</h1>
                        <h3 className="text-2xl text-bold text-gray-800 text-shadow">Where Awesomeness Is Brought To Life.</h3>
                        <hr className="w-1/3 border-t border-gray-200 border-b border-gray-200 mx-auto mb-4" />
                        <ul className="list-inline intro-social-buttons text-center flex justify-center">
                            <li>
                                <a href="https://twitter.com/Ferreir4Thiago" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-x-twitter"></i><span className="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://github.com/ThiagoFerreir4" target="_blank" rel="noopener noreferrer" ><i class="fa-brands fa-square-github"></i> <span className="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/thiagoferreir4" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i><span className="network-name">Linkedin</span></a>
                            </li>
                            <li>
                                <a href="https://www.freecodecamp.com/thiagoferreira" target="_blank" rel="noopener noreferrer"><i className="fa fa-free-code-camp fa-fw"></i> <span className="network-name">freeCodeCamp</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
