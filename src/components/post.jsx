import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function ProjectPost() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const  fetchPosts= async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_PORTFOLIO_API}/getpost`);
        const postsResponse = await response.json();
        if (Array.isArray(postsResponse)) {
          setPosts(postsResponse);
        }
      } catch (error) {
        console.log('Error fetching portfolio:', error);
      }

    };

    fetchPosts();
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
                  to={post.url}
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


export default ProjectPost;
