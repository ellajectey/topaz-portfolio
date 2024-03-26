import React from 'react';

function Skill2({ limitToFour }) {
    const skills = [
        { title: 'Git', description: 'Version control system for tracking changes in code.' },
        { title: 'Responsive Web Design', description: 'Design approach aimed at creating websites that adapt to various screen sizes.' },
        { title: 'Jira', description: 'Project management tool for tracking and managing software development projects.' },
        { title: 'Google Tools', description: 'Suite of productivity tools including Gmail, Google Drive, and Google Docs.' },
        { title: 'Tailwind CSS', description: 'A utility-first CSS framework for creating custom designs with ease.' },
        { title: 'Material UI', description: 'A React UI framework based on Google\'s Material Design.' },
        { title: 'MongoDB', description: 'A NoSQL database used for storing and managing data in modern web applications.' }
    ];

    // If limitToFour is true, only display the first four skills
    const displaySkills = limitToFour ? skills.slice(0, 4) : skills;

    return (
        <section className="py-16 bg-gradient-to-bl from-amber-900 via-slate-200 to-slate-500">
            <div className="container mx-auto mt-[-20px]">
                <div className="flowbite-card">
                    <div className="flowbite-card-content">
                        <h3 className="text-xl font-semibold mb-4">Tools & expertise:</h3>
                        <p className="mb-4">Here are the tools and areas in which I have expertise:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {displaySkills.map((skill, index) => (
                                <a key={index} href="/about" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{skill.title}</h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">{skill.description}</p>
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
