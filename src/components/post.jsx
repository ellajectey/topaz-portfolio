import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function ProjectPost() {

  const [posts, setPosts] = useState([]);

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

    };

    fetchStuff();
  }, []);

  return (
    <>
    <section className="mx-auto px-6 py-10 mt-10  bg-gradient-to-r from-gray-200 to-stone-100">
      <h2 className="text-3xl font-bold mb-8">View Posts Below</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <a
            href={post.link}
            target="_blank"
            key={index}
            className="rounded-lg overflow-hidden bg-white shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover object-center mt-2 "
            />
            <div className="p-6">
              <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 truncate ...">{post.description}</p>
              <div className="mt-4">
                <Link
                  to={post.link}
                  target="_blank"
                  className=" mt-4 transition-500 duration-300  hover:text-2xl"
                >
                  <span className="border-b-2 border-yellow-900 text-black no-underline">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
    </>
  );
}

const projects = [
  {
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*lJ32Bl-lHWmNMUSiSq17gQ.png",
    title: "Why HTML And CSS Is Necessary For Frontend Development",
    category: "HTML|CSS",
    description:
      "HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are essential for frontend development for several reasons",
    link: "https://medium.com/@wknycfqyb/why-html-and-css-is-necessary-for-frontend-development-d0169f498458",
  },
  {
    image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png",
    title: "Unveiling the Power of JavaScript: A Cornerstone of Web Development",
    category: "JAVASCRIPT | WEB DEVELOPMENT",
    description:
      "JavaScript stands as the cornerstone of modern web development, empowering developers to create dynamic and interactive web experiences. Born out of the necessity to bring life to static web pages, JavaScript has evolved into a versatile and ubiquitous programming language that drives the web forward.",
    link: "",
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
