import React from 'react';

function Footer(props) {
    return (
        <>
        <footer class="flex flex-col space-y-10 justify-center   text-gray-100 bg-black">

<nav class="flex justify-center flex-wrap gap-6  font-medium mt-5">
    <a class="hover:text-gray-100" href="#">Home</a>
    <a class="hover:text-gray-100" href="#">About</a>
    <a class="hover:text-gray-100" href="#">Blog</a>
    <a class="hover:text-gray-100" href="#">Skills</a>
    <a class="hover:text-gray-100" href="#">Experience</a>
    <a class="hover:text-gray-100" href="#">Achievements</a>
    <a class="hover:text-gray-100" href="#">Contact</a>
</nav>

<div class="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt='' />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt='' />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt='' />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt='' />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt=''/>
    </a>
</div>
<p class="text-center bg-black font-medium pb-1">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
        </>
    );
}

export default Footer;