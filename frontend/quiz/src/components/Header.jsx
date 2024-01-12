// Header.jsx
import React from 'react';
import Logo from '../assets/f1.png'
import { NavLink } from 'react-router-dom';
import ProfilePic from '../assets/profile.jpg'

const Header = () => {
    return (
        <header className="bg-black text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* F1 Logo */}
            <NavLink to="/">
            <img
              src={Logo} // Replace with the actual path to your F1 logo
              alt="F1 Logo"
              className="w-30 h-20 mr-2" // Adjust width, height, and margin as needed
            />
            </NavLink>
                        {/* Heading */}
                        <h1 className="text-4xl font-bold italic">Test Your F1 Knowledge</h1>
            <NavLink to="/profile">
            <img
            src={ProfilePic} // Replace with the actual path to your F1 logo
            alt="Profile Picture"
            className="w-30 h-20 bg-black" // Adjust width, height, and margin as needed
          />
          </NavLink>

    
            {/* Other header content can be added here */}
          </div>
        </header>
      );
};

export default Header;
