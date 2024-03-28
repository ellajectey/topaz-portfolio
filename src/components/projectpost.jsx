import React from "react";
import { Link } from "react-router-dom";

function ProjectPost() {
  return (
    <section className="mx-auto  px-6 py-10 mt-10 bg-gradient-to-r from-gray-200 to-stone-100 ">
      <h2 className="text-3xl font-bold mb-8">View Projects Below</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            to={project.link}
            key={index}
            className="rounded-lg overflow-hidden bg-white shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6 border-t-4 border-teal-600">
              <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 truncate ...">{project.description}</p>
              <div className="mt-4">
                <Link
                  to={project.link}
                  target="_blank"
                  className=" mt-4 transition-500 duration-300  hover:text-2xl"
                >
                  <span className="border-b-2 border-yellow-900 text-black no-underline">
                    Explore Our Domain
                  </span>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


const projects = [
  {
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Business Landing Page",
    category: "HTML|CSS",
    description:
      "Meltech A/C Services is a reputable provider of air conditioning solutions catering to both residential and commercial clients. At Meltech A/C Services, we're not just about keeping you cool; we're about keeping you comfortable. With our passion for perfect temperatures and our commitment to quality service, we're here to make every space feel like a refreshing oasis. Discover the Meltech difference today!",
    link: "https://meltech.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1598133893847-a3b6858156d6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pet App Insurance",
    category: "HTML | CSS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus.",
    link: "https://pet-insurance-landing-page-39b9.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1602497485099-e41a116a272c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Construction Landing Page",
    category: "HTML | CSS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.",
    link: "https://landing-phi-lyart.vercel.app/",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Topaz Agro Commerce",
    category: "HTML | CSS | JAVASCRIPT",
    description: "Discovering hidden gems in the heart of the city.",
    link: "https://topaz-melomey.vercel.app/#about-landing"
},
{
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "JSE MOVIE APP",
    category: "REACT JS",
    description: "Explore the world of movies at the comfort of your home.",
    link: "https://topaz-movie.vercel.app/movie"
},
{
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Team Portfolio",
    category: "REACT JS | NODE JS | MONGODB",
    description: "Welcome to our domain. We bring your ideas to live with our exceptional skills.",
    link: "/project/6"
}
];

export default ProjectPost;
