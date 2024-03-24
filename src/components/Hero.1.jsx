import React from 'react';

export default function Hero() {
    return (
        <div className="relative">
            <div className="intro-header bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://40.media.tumblr.com/1b916597d3e174399cb7adadddb66ede/tumblr_nt5uk4psl31ud7rr3o1_1280.jpg')", height: "500px" }}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container mx-auto">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold pt-32 mb-4">Topaz Web Design Studio</h1>
                        <h3 className="text-xl text-bold text-gray-600 text-shadow">Where Awesomeness Is Brought To Life.</h3>
                        <hr className="w-1/3 border-t border-gray-200 border-b border-gray-200 mx-auto" />
                        <ul className="list-inline intro-social-buttons">
                            <li>
                                <a href="https://twitter.com/Ferreir4Thiago" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://github.com/ThiagoFerreir4" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg "><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/thiagoferreir4" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                            </li>
                            <li>
                                <a href="https://www.freecodecamp.com/thiagoferreira" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg"><i className="fa fa-free-code-camp fa-fw"></i> <span className="network-name">freeCodeCamp</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
