import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact, faNode } from '@fortawesome/free-brands-svg-icons'; // Import the desired Font Awesome icons

function Skill1({ limitToFour }) {
    const skills = [
        { title: 'Javascript', icon: faJs, description: 'The language of the web, used for both front-end and back-end development.' },
        { title: 'C#', icon: faCss3Alt, description: 'A versatile language commonly used for building desktop, web, and mobile applications.' },
        { title: 'HTML5', icon: faHtml5, description: 'The latest version of the markup language used to structure web pages.' },
        { title: 'CSS3', icon: faCss3Alt, description: 'The latest version of Cascading Style Sheets used for styling web pages.' },
        { title: 'React', icon: faReact, description: 'A JavaScript library for building user interfaces, especially for single-page applications.' },
        { title: 'Node.js', icon: faNode, description: 'a JavaScript runtime that enables server-side JavaScript execution, allowing developers to build scalable and high-performance network applications.' }
    ];

    // If limitToFour is true, only display the first four skills
    const displaySkills = limitToFour ? skills.slice(0, 4) : skills;

    return (
        <section className="py-16 bg-gray-200 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Competences</h2>
                <h3 className="text-xl font-semibold mb-4">Languages & Expertise:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {displaySkills.map((skill, index) => (
                        <a key={index} href="/about" className="block max-w-sm p-6 bg-yellow-700 border-4 border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition hover:bg-gray-900">
                            <FontAwesomeIcon icon={skill.icon} className="text-white text-bold text-2xl mb-2" /> {/* Use skill's specific Font Awesome icon */}
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white hover:text-white">{skill.title}</h5>
                            <p className="font-meduim text-bold text-white dark:text-gray-400">{skill.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill1;
