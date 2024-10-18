 
 //src/Pages/Home.js
import React, { useContext, useEffect } from 'react'; // Import useContext and useEffect
import imagine from '../Asset/Image/drgnimages.jpeg'; // Import the image
import { BackContext } from '../App'; // Import context
import { Link } from 'react-router-dom';
import '../css/home.css'; // Import styles

const Home = () => {
  // Destructure setBackVisible from context
  const { setBackVisible } = useContext(BackContext);

  // Use effect to hide the back button on the Home page and show it on other pages
  useEffect(() => {
    setBackVisible(false); // Hide back button on Home
    return () => setBackVisible(true); // Show back button when component unmounts
  }, [setBackVisible]);

  return (
    <div className="styled-container">
      <div className='home-grid'>
          {/* Float Grid Section */}
      <div className="float-grid author-section">
        <img src={imagine} alt="Desheye's Work" className="img-fluid circular-image home-img" />
        <p className="info-name">Desheye</p>
        <p className="info-title">
          <span className="location">Product Manager, Designer, Web Developer</span>
        </p>
        <p className="info-description">
          Creating beautiful and engaging digital experiences in{' '}
          <span className="location">Lagos, Nigeria.</span>
        </p>
      </div>
     

      {/* Title Section */}
      <div className="title-section">
      <h1 className="title">
        <Link to="/work" className="title-word">WORK</Link>
        <Link to="/about" className="title-word">ABOUT</Link>
        <Link to="/contact" className="title-word">CONTACT</Link>
      </h1>
    </div>
    </div>
    </div>
  );
};

export default Home;
