import React from "react";
import { Link } from "react-router-dom";

function ProjectPost() {
  return (
    <section className="container mx-auto px-6 py-10 mt-10">
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
            <div className="p-6">
              <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <Link
                to={project.link}
                className="block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    image: "https://source.unsplash.com/Lki74Jj7H-U/400x300",
    title: "What Zombies Can Teach You About Food",
    category: "Reliable Schemas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullo dejects corporis commodi aperiam, amet cupiditate?",
    link: "/project/1",
  },
  {
    image: "https://source.unsplash.com/L9_6GOv40_E/400x300",
    title: "Old School Art",
    category: "Client-based Adoption",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus.",
    link: "/project/2",
  },
  {
    image: "https://source.unsplash.com/7JX0-bfiuxQ/400x300",
    title: "5 Things To Do About Rain",
    category: "Intellectual Capital",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.",
    link: "/project/3",
  },
];

export default ProjectPost;
