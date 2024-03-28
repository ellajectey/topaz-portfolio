import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


function Achievement() {
    const [achievements, setAchievements] = useState([]);
    // const [achievements, setAchievements] = useState(['life', 'stess', 'sleep']);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await fetch(`https://topaz-portfolio-api.onrender.com/get-achievement`)
                const achievementResponse = await response.json();
                if (Array.isArray(achievementResponse)) {
                  setAchievements(achievementResponse);
                }
              } catch (error) {
                console.log('Error fetching portfolio:', error);
            }
        };
    
        fetchAchievements();
    }, []);

    return (
        <div>
        <section className="mx-auto px-6 py-10 mt-10  bg-gradient-to-r from-gray-200 to-stone-100">
      <h2 className="text-3xl font-bold mb-8">View Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <a
            href={achievement.link}
            target="_blank"
            key={index}
            className="rounded-lg overflow-hidden bg-white shadow-lg"
          >
            <p
              src={achievement.title}
              alt={achievement.title}
              className=""
            />
            <div className="p-6">
              <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {achievement.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-700 truncate ...">{achievement.description}</p>
              <div className="mt-4">
              <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {achievement.date}
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

export default Achievement;