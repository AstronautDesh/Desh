import React from 'react';
import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope, FaHashtag } from 'react-icons/fa';
//import NavMenu from '../Components/NavMenu';
import '../css/contact.css';

function Contact() {
  return (
    <div className="contact">

      <div className="contact-container">
        {/* Social Icons */}
        <div className="icons">
          <a href="https://github.com/AstronautDesh" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://wa.me/234816718379" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/adesheye?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:thefelainme@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://www.threads.net/@orunmiller?invite=4" target="_blank" rel="noopener noreferrer">
            <FaHashtag className="icon" />
          </a>
        </div>

        {/* Title */}
        <h1 className="contact-title">Let's Get In Touch</h1>
      </div>
    </div>
  );
}

export default Contact;
