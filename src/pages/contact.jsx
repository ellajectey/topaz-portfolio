import React from 'react';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../components/navbar.jsx';

const ContactForm = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-[url('./assets/images/contact-bg.avif')] bg-cover bg-center rounded-lg shadow-lg p-8 md:flex md:items-center">
          <div className="md:w-1/2 md:mr-4 bg-green-700 h-50">
              <h2 className="text-2xl font-bold">Let's Chat</h2>
              <p className="mt-4">Whether you have a question, want to start a project or simply want to connect.</p>
              <p className="mt-4">Feel free to send me a message in the contact form.</p>
          </div>
          <div className="md:w-1/2">
              <form className="text-center">
                  <h2 className="text-2xl font-bold lg-view">Contact</h2>
                  <p className="mt-4">* Required</p>
                  <div className="flex justify-center mt-4">
                      <button className="social mr-2"><FontAwesomeIcon icon={faFacebookF} /></button>
                      <button className="social mr-2"><FontAwesomeIcon icon={faGooglePlusG} /></button>
                      <button className="social"><FontAwesomeIcon icon={faLinkedinIn} /></button>
                  </div>
                  <input type="text" placeholder="Name *" className="rounded-lg p-2 mt-4 w-full border-4 border-green-700" required />
                  <input type="email" placeholder="Email *" className="rounded-lg p-2 mt-4 w-full border-4 border-green-700" required />
                  <input type="text" placeholder="Company" className="rounded-lg p-2 mt-4 w-full border-4 border-green-700" />
                  <input type="phone" placeholder="Phone" className="rounded-lg p-2 mt-4 w-full border-4 border-green-700" />
                  <textarea rows="4" placeholder="Message" className="rounded-lg p-2 mt-4 w-full border-4 border-green-700"></textarea>
                  <button type="submit" className="bg-green-700 text-black px-6 py-2 rounded-lg mt-4">Submit</button>
              </form>
          </div>
      </div>
      </>
  );
}

export default ContactForm;
