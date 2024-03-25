
import React from "react";
import bannerImg from "../assets/images/banner.png";

function Homepage() {
  //making some array of objects for card items
  const skills = [
    {
      id: 1,
      name: "HTML",
      description:
        "lorem ipsum irit socu branta lednobum noteuchreih sdjfewj dsivjbb dhgfdich jbdjvbd",
      image: "src/assets/images/html.png",
    },
    {
      id: 2,
      name: "CSS",
      description:
        "lorem ipsum irit socu branta lednobum noteuchreih sdjfewj dsivjbb dhgfdich jbdjvbd",
      image: "src/assets/images/css3.png",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      description:
        "lorem ipsum irit socu branta lednobum noteuchreih sdjfewj dsivjbb dhgfdich jbdjvbd",
      image: "src/assets/images/javascript.png",
    },
    {
      id: 4,
      name: "REACT",
      description:
        "lorem ipsum irit socu branta lednobum noteuchreih sdjfewj dsivjbb dhgfdich jbdjvbd",
      image: "src/assets/images/react.png",
    },
    {
      id: 5,
      name: "NODE.JS",
      description:
        "lorem ipsum irit socu branta lednobum noteuchreih sdjfewj dsivjbb dhgfdich jbdjvbd",
      image: "src/assets/images/node.png",
    },
    {
      id: 6,
      name: "MONGODB",
      description:
        "lorem ipsum irit socu branta lednobum noteuchreih sdjfewj dsivjbb dhgfdich jbdjvbd",
      image: "src/assets/images/mongodb.png",
    },
  ];

  return (
    <>
      {/* imported `import bannerImg from "../assets/images/banner.png`; */}
      <div className="bg-green-100 ">
        <div className="lg:px-12 px-4 flex flex-col md:flex-row items-center justify-between py-24 gap-8">
          <div className="md:w-1/2 w-full mt-5">
            <h3 className="text-xl text-headingColor font-semibold mb-5">
              Welcome to my digital domain! I'm Samuel.
            </h3>
            <h1 className="md:text-6xl text-2xl font-bold text-black leading-snug md:leading-[76px] mb-5">
              A passionate <span className="text-indigo-600">Full Stack</span>{" "}
              Web Developer.
            </h1>
            <p className="text-body text-2xl leading-9 mb-8">
              On a mission to craft immersive digital experiences that blend
              functionality with elegance. With a knack for both front-end
              finesse and back-end wizardry, I thrive on turning complex
              concepts into seamless, user-friendly solutions.
            </p>
            <button className="px-4 py-3 text-white font-bold hover:text-white transition-all duration-300 hover:-translate-y-4 bg-indigo-500 rounded hover:bg-indigo-600">
              Get In Touch
            </button>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={bannerImg} alt="" className="w-full rounded " />
          </div>
        </div>
      </div>
      {/* //skills */}
      <div className="lg:mx-12 mx-4 py-32">
        <div className="text-#282938 mb-20">
          <p className="text-xl font-semibold mb-5">My Skills</p>
          <h3 className="md:text-5xl text-4xl font-bold">My Expertise</h3>

          {/* skills card */}
          <div>
            {
              skills.map[
                (skills) => (
                  <div
                    key={skills.id}
                    className="bg-green-100 p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all duration-300"
                  >
                    <img
                      src={skills.image}
                      alt=""
                      className="w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3"
                    />
                    <h3 className="text-2xl font-bold mb-4">{skills.name}</h3>
                    <p>{skills.description}</p>
                  </div>
                )
              ]
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;

