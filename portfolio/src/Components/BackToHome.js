import React, { useContext } from 'react'; // Import React and useContext
import { useNavigate } from 'react-router-dom'; // Import navigation
import { BackContext } from '../App'; // Import context

import { BsArrowLeft } from 'react-icons/bs'; // Left arrow icon
import '../css/backtohome.css'; // Custom styles

const BackToHome = () => {
  const navigate = useNavigate(); // Initialize navigation
  const { isBackVisible } = useContext(BackContext); // Get visibility state from context

  if (!isBackVisible) return null; // Do not render if back button is not visible

  return (
    <div className="back-to-home" onClick={() => navigate('/')}>
      <BsArrowLeft size={30} /> {/* Back to home icon */}
    </div>
  );
};

export default BackToHome;