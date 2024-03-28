import React from 'react';
import Post from '../components/post';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Experience from '../components/experience';
import Achievement from '../components/achievement';


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