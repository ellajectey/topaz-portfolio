import React from 'react';
import Post from '../components/post';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


function Blog() {
    return (
        <div>
            <NavBar/>
            <Post/>
            <Footer/>
        </div>
    );
}

export default Blog;