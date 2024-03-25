import React from 'react';
import NavBar from '../components/navbar.jsx';

const ContactForm = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-white bg-center shadow-lg p-8 md:flex md:items-center ">
          <div className="md:w-1/2 md:mr-4 bg-[url('https://40.media.tumblr.com/1b916597d3e174399cb7adadddb66ede/tumblr_nt5uk4psl31ud7rr3o1_1280.jpg')] rounded-lg bg-cover bg-opacity-50 px-10 py-32">
              <h2 className="text-2xl text-white font-bold">Let's Chat</h2>
              <p className="mt-4 text-white">Whether you have a question, want to start a project or simply want to connect.</p>
              <p className="mt-4 text-white">Feel free to send me a message in the contact form.</p>
          </div>
          <div className="md:w-1/2 py-32">
              <form className="text-center">
                  <h2 className="text-2xl font-bold lg-view">Contact Us</h2>
                  <div className="justify-center justify-between mt-4 text-2xl">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-google-plus-g"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  </div>
                  <input type="text" placeholder="Name *" className="rounded-lg p-2 mt-4 w-full border-4 border-yellow-900" required />
                  <input type="email" placeholder="Email *" className="rounded-lg p-2 mt-4 w-full border-4 border-yellow-900" required />
                  <input type="text" placeholder="Company" className="rounded-lg p-2 mt-4 w-full border-4 border-yellow-900" />
                  <input type="phone" placeholder="Phone" className="rounded-lg p-2 mt-4 w-full border-4 border-yellow-900" />
                  <textarea rows="4" placeholder="Message" className="rounded-lg p-2 mt-4 w-full border-4 border-yellow-900"></textarea>
                  <button type="submit" className="bg-yellow-900 text-black px-6 py-2 rounded-lg mt-4">Submit</button>
              </form>
          </div>
      </div>
      </>
  );
}

export default ContactForm;
