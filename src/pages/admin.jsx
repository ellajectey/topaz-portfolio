import React, { useState } from "react";
// import Addpost from "../components/addpost";
// import AddExperience from "../components/addExperience";
// import Addachievement from "../components/addachievement";
import PostModal from "../components/postModal";
import ExperienceModal from "../components/experienceModal";
import AchievementModal from "../components/achievementModal";

function Admin() {
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isExperienceModalOpen, setExperienceModalOpen] = useState(false);
  const [isAchievementModalOpen, setAchievementModalOpen] = useState(false);

  const openPostModal = () => {
    setPostModalOpen(true);
  };

  const closePostModal = () => {
    setPostModalOpen(false);
  };

  const openExperienceModal = () => {
    setExperienceModalOpen(true);
  };

  const closeExperienceModal = () => {
    setExperienceModalOpen(false);
  };

  const openAchievementModal = () => {
    setAchievementModalOpen(true);
  };

  const closeAchievementModal = () => {
    setAchievementModalOpen(false);
  };

  return (
    <div>
      <div class="flex h-screen bg-gray-100">
        {/* <!-- sidebar --> */}
        <div class="hidden md:flex flex-col w-64 bg-gray-800">
          <div class="flex items-center justify-center h-16 bg-gray-900">
            <span class="text-white font-bold uppercase">Portfolio Admin</span>
          </div>
          <div class="flex flex-col flex-1 overflow-y-auto">
            <nav class="flex-1 px-2 py-4 bg-gray-800">
              <a
                href="#"
                class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                onClick={openAchievementModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                Add Achievement
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                onClick={openPostModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Add Post
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                onClick={openExperienceModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Add Experience
              </a>
            </nav>
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div class="flex flex-col flex-1 overflow-y-auto">
          <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div class="flex items-center px-4">
              <button class="text-gray-500 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {/* <input
                class="mx-4 w-full border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              /> */}
            </div>
            <div class="flex items-center pr-4">
              <button class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-4">
            <h1 class="text-2xl font-bold">Welcome to my dashboard!</h1>
            <p className="mt-2 text-gray-600 ">
              <img src = './src/assets/images/Admin-rafiki.svg'alt= "admin svg illustration"/>
              This is an example dashboard using Tailwind CSS.
            </p>
            {/* Render modals */}
            <PostModal isOpen={isPostModalOpen} onClose={closePostModal} />
            <ExperienceModal isOpen={isExperienceModalOpen} onClose={closeExperienceModal} />
            <AchievementModal isOpen={isAchievementModalOpen} onClose={closeAchievementModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
