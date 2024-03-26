import React from 'react';

function Skill1({ limitToFour }) {
    const skills = [
        { title: 'Javascript', description: 'The language of the web, used for both front-end and back-end development.' },
        { title: 'C#', description: 'A versatile language commonly used for building desktop, web, and mobile applications.' },
        { title: 'HTML5', description: 'The latest version of the markup language used to structure web pages.' },
        { title: 'CSS3', description: 'The latest version of Cascading Style Sheets used for styling web pages.' },
        { title: 'React', description: 'A JavaScript library for building user interfaces, especially for single-page applications.' },
        { title: 'Node.js', description: 'a JavaScript runtime that enables server-side JavaScript execution, allowing developers to build scalable and high-performance network applications.' }
    ];

    // If limitToFour is true, only display the first four skills
    const displaySkills = limitToFour ? skills.slice(0, 4) : skills;

    return (
        <section className="py-16 bg-gradient-to-tl from-amber-900 via-gray-200 to-slate-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Competences</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {displaySkills.map((skill, index) => (
                        <a key={index} href="/about" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{skill.title}</h5>
                            <p className="font-normal text-black dark:text-gray-400">{skill.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill1;
