import React, { useState } from "react";
import PostModal from "../components/postModal";
import ExperienceModal from "../components/experienceModal";
import AchievementModal from "../components/achievementModal";

function Admin() {
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isExperienceModalOpen, setExperienceModalOpen] = useState(false);
  const [isAchievementModalOpen, setAchievementModalOpen] = useState(false);

  const openPostModal = () => {
    setPostModalOpen(true);
    // Close other modals
    setExperienceModalOpen(false);
    setAchievementModalOpen(false);
  };

  const closePostModal = () => {
    setPostModalOpen(false);
  };

  const openExperienceModal = () => {
    setExperienceModalOpen(true);
    // Close other modals
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
                href="#"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                onClick={openAchievementModal}
              >
                Add Achievement
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                onClick={openPostModal}
              >
                Add Post
              </a>
              <a
                href="#"
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
            {isPostModalOpen && (
              <PostModal isOpen={isPostModalOpen} onClose={closePostModal} />
            )}
            {isExperienceModalOpen && (
              <ExperienceModal
                isOpen={isExperienceModalOpen}
                onClose={closeExperienceModal}
              />
            )}
            {isAchievementModalOpen && (
              <AchievementModal
                isOpen={isAchievementModalOpen}
                onClose={closeAchievementModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
