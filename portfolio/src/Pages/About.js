import React from 'react'
import imagineDragon from '../Asset/Image/drgnimages.jpeg';
import '../css/about.css';

function About() {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-content'>
          <p className='about-me-title'>
            Desheye Akalla
            <span className='brand'>Imagine Solutions</span>
          </p>
          <div className='about-text-wrapper'>
            <p className='about-me'>
              Hey there! I'm a full-stack software developer hailing
              from the vibrant city of Lagos,
              Nigeria. When I'm not coding up sleek and interactive digital experiences,
              you can find me jamming to some good alte music,
              binge-watching old movies, or cheering on the Super Eagles.
              I'm all about blending creativity with tech, making sure users
              get an unforgettable experience every time they click,
              swipe, or scroll. Whether it's building
              beautiful frontends or optimizing the backend,
              I've got it covered.
              Let's create something amazing together!
            </p>
              <img src={imagineDragon} alt="Desheye's Work" className="about-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;