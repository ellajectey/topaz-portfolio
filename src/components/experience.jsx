import React, {useState, useEffect} from 'react';

function Experience() {
    const [experiences, setExperiences] = useState([]);
    // const [experiences, setExperiences] = useState(['life', 'stess', 'sleep']);

    useEffect(() => {
        const fetchStuff = async () => {
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
    
        fetchStuff();
    }, []);

    return (
        <div>
            <section className="py-16 bg-gray-100 ">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Experiences</h2>
                <div className="flowbite-card mb-8">
                    <div className="flowbite-card-content">
                        <h3 className="text-xl font-semibold mb-4">Subtopic:</h3>
                        <p className="mb-4">Descriptions:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            
                            {/* default card */}
                            <a href="/blog" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sample Experience</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">The language of the web, used for both front-end and back-end development.</p>
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
            </div>
        </section>
        </div>
    );
}

export default Experience;