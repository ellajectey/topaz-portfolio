import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faTasks, faToolbox, faPalette, faShapes, faDatabase } from '@fortawesome/free-solid-svg-icons'; // Import the desired Font Awesome icons

function Skill2({ limitToFour }) {
    const skills = [
        { title: 'Git', icon: faCode, description: 'Version control system for tracking changes in code.' },
        { title: 'Responsive Web Design', icon: faDesktop, description: 'Design approach aimed at creating websites that adapt to various screen sizes.' },
        { title: 'Jira', icon: faTasks, description: 'Project management tool for tracking and managing software development projects.' },
        { title: 'Google Tools', icon: faToolbox, description: 'Suite of productivity tools including Gmail, Google Drive, and Google Docs.' },
        { title: 'Tailwind CSS', icon: faPalette, description: 'A utility-first CSS framework for creating custom designs with ease.' },
        { title: 'Material UI', icon: faShapes, description: 'A React UI framework based on Google\'s Material Design.' },
        { title: 'MongoDB', icon: faDatabase, description: 'A NoSQL database used for storing and managing data in modern web applications.' }
    ];

    // If limitToFour is true, only display the first four skills
    const displaySkills = limitToFour ? skills.slice(0, 4) : skills;

    return (
        <section className="py-16 bg-gray-200 text-center">
            <div className="container mx-auto mt-[-20px]">
                <div className="flowbite-card">
                    <div className="flowbite-card-content">
                        <h3 className="text-xl font-semibold mb-4">Tools & expertise:</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {displaySkills.map((skill, index) => (
                                <a key={index} href="/about" className="block max-w-sm p-6 bg-yellow-700 border-4 border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition hover:bg-gray-900">
                                    <FontAwesomeIcon icon={skill.icon} className="text-white text-bold text-2xl mb-2" /> {/* Use skill's specific Font Awesome icon */}
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white hover:text-white">{skill.title}</h5>
                                    <p className="font-meduim text-white dark:text-gray-400">{skill.description}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill2;
