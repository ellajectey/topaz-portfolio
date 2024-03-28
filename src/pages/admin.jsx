import React, { useState, useEffect } from "react";
import PostModal from "../components/postModal";
import ExperienceModal from "../components/experienceModal";
import AchievementModal from "../components/achievementModal";
import { useLocation } from "react-router-dom";

function Admin() {
  const location = useLocation();

  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isExperienceModalOpen, setExperienceModalOpen] = useState(false);
  const [isAchievementModalOpen, setAchievementModalOpen] = useState(false);

  const [posts, setPosts] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const openPostModal = () => {
    setPostModalOpen(true);
    // Close other modals
    setExperienceModalOpen(false);
    setAchievementModalOpen(false);
  };

  const closePostModal = () => {
    setPostModalOpen(false);
  };

  const hideModals = () => {
    setExperienceModalOpen(false);
    setPostModalOpen(false);
    setAchievementModalOpen(false);
  }

  const openExperienceModal = () => {
    setExperienceModalOpen(true);
    setPostModalOpen(false);
    setAchievementModalOpen(false);
  };

  const closeExperienceModal = () => {
    setExperienceModalOpen(false);
  };

  const openAchievementModal = () => {
    setAchievementModalOpen(true);
    // Close other modals
    setPostModalOpen(false);
    setExperienceModalOpen(false);
  };

  const closeAchievementModal = () => {
    setAchievementModalOpen(false);
  };

  useEffect(() => {
    const fetchStuff = async () => {
      try {
        const response = await fetch(`https://topaz-portfolio-api.onrender.com/getpost`) //fetch(`${process.env.REACT_APP_PORTFOLIO_API}/get-achievement`);
        const postsResponse = await response.json();
        if (Array.isArray(postsResponse)) {
          setPosts(postsResponse);
        }
      } catch (error) {
        console.log('Error fetching portfolio:', error);
      }

      try {
        const response = await fetch(`https://topaz-portfolio-api.onrender.com/get-achievement`)
        const achievementResponse = await response.json();
        if (Array.isArray(achievementResponse)) {
          setAchievements(achievementResponse);
        }
      } catch (error) {
        console.log('Error fetching portfolio:', error);
      }

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
      <div className="flex h-screen bg-gray-100">
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">
              Portfolio Admin
            </span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <a
                href="#dashboard"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                onClick={() => hideModals()}
              >
                Dashboard
              </a>
              <a
                href="#add-achievement"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                onClick={() => openAchievementModal()}
              >
                Add Achievement
              </a>
              <a
                href="#add-post"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                onClick={openPostModal}
              >
                Add Post
              </a>
              <a
                href="#add-experience"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                onClick={openExperienceModal}
              >
                Add Experience
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            {/* Header content */}
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold">Welcome Topaz</h1>
            <p className="mt-2 text-gray-600">
              {/* Other content */}
            </p>
            {/* Render modals based on state */}
            {(isPostModalOpen || location.hash === '#add-post') && (
              <PostModal isOpen={isPostModalOpen} onClose={closePostModal} />
            )}
            {(isExperienceModalOpen || location.hash === '#add-experience') && (
              <ExperienceModal
                isOpen={isExperienceModalOpen}
                onClose={closeExperienceModal}
              />
            )}
            {(isAchievementModalOpen || location.hash === '#add-achievement') && (
              <AchievementModal
                isOpen={isAchievementModalOpen}
                onClose={closeAchievementModal}
              />
            )}

            {
              (!isAchievementModalOpen && !isExperienceModalOpen && !isPostModalOpen) &&
              <div>
                <h2>Posts</h2>
                {
                  posts.map((post, index) => {
                    return (
                      <div key={index} className="row" style={{marginBottom: '10px'}}>
                        {index + 1}. {post.title}  
                      </div>
                    )
                  })
                }

                <hr />

                <h2>Achievements</h2>
                {
                  achievements.map((achievement, index) => {
                    return (
                      <div key={index} className="row" style={{marginBottom: '10px'}}>
                        {index + 1}. {achievement.title}  
                      </div>
                    )
                  })
                }

                <hr />

                <h2>Experiences</h2>
                {
                  experiences.map((experience, index) => {
                    return (
                      <div key={index} className="row" style={{marginBottom: '10px'}}>
                        {index + 1}. {experience.title}  
                      </div>
                    )
                  })
                }
              </div>
              
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
