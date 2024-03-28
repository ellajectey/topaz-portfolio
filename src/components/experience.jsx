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
            </div>
          </a>
        ))}
      </div>
    </section>
        </div>
    );
}

export default Experience;