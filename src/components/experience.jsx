import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Experience() {
    const [experiences, setExperiences] = useState([]);
    // const [experiences, setExperiences] = useState(['life', 'stess', 'sleep']);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await fetch(`https://topaz-portfolio-api.onrender.com/get-experience`)
                const experienceResponse = await response.json();
                if (Array.isArray(experienceResponse)) {
                  setExperiences(experienceResponse);
                }
              } catch (error) {
                console.log('Error fetching portfolio:', error);
            }
        };
    
        fetchExperiences();
    }, []);

    return (
        <div>
<<<<<<< HEAD
          <section className="mx-auto px-6 py-10 mt-10  bg-gradient-to-r from-gray-200 to-stone-100">
      <h2 className="text-3xl font-bold mb-8">View Our Experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience, index) => (
          <a
            href={experience.link}
            target="_blank"
            key={index}
            className="rounded-lg overflow-hidden bg-white shadow-lg"
          >
            <p
              src={experience.title}
              alt={experience.title}
              className=""
            />
            <div className="p-6">
             
              <h3 className="text-xl font-semibold mb-2">{experience.institutionName}</h3>
              <p className="text-gray-700 truncate ...">{experience.description}</p>
              <div className="mt-4">
              <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
            
                {experience.createdAt}
                {experience.location}
              </span>
                
              </div>
=======
            <section className="py-16 bg-gray-100 ">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Experiences</h2>
                <div className="flowbite-card mb-8">
                    <div className="flowbite-card-content">
                        <h3 className="text-xl font-semibold mb-4">Subtopic:</h3>
                        <p className="mb-4 text-m">Descriptions:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            
                            {/* default card */}
                            <a href="/blog" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-700 dark:text-white">Sample Experience</h5>
                                <p className="font-normal text-black dark:text-gray-400">The language of the web, used for both front-end and back-end development.</p>
                            </a>
                            {
                                experiences.map((experience, key) => {
                                    return (
                                        <div key={key}>{experience} {key + 1}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
>>>>>>> 69c26a4a2f96fa1ecd5f3207af1456669663eba3
            </div>
          </a>
        ))}
      </div>
    </section>
        </div>
    );
}

export default Experience;