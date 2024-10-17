// src/App.js
import React, { createContext, useState } from 'react'; // Import React and its hooks
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Import router components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import Home from './Pages/Home'; // Import Home page component
import About from './Pages/About'; // Import About page component
import Work from './Pages/Work'; // Import Work page component
import Contact from './Pages/Contact'; // Import Contact page component
import NavMenu from './Components/NavMenu'; // Import NavMenu component
import BackToHome from './Components/BackToHome'; // Import BackToHome button
import './App.css'; // Import global styles

// Create context to manage back button visibility
export const BackContext = createContext();

const App = () => {
  // State to control the visibility of the back button
  const [isBackVisible, setBackVisible] = useState(true);

  return (
    // Provide the context value to child components
    <BackContext.Provider value={{ isBackVisible, setBackVisible }}>
      {/* Wrap components in Router to enable routing */}
      <Router>
        <div>
          {/* NavAndRoutes handles both navigation and route rendering */}
          <NavAndRoutes />
          {/* BackToHome button is rendered globally across all pages */}
          <BackToHome />
        </div>
      </Router>
    </BackContext.Provider>
  );
};

// Separate component to handle NavMenu visibility and route logic
const NavAndRoutes = () => {
  // Use useLocation to track the current route
  const location = useLocation();

  // Check if the current route is the Home page
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {/* Always show NavMenu on small screens (xs), hidden for larger */}
      <div className="navmenu-xs d-block d-md-none">
        <NavMenu />
      </div>

      {/* Conditionally render NavMenu on medium and large screens (md and lg),
          but hide it when the user is on the Home page */}
      {!isHomePage && (
        <div className="navmenu-md d-none d-md-block">
          <NavMenu />
        </div>
      )}

      {/* Set up route rendering for various pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
