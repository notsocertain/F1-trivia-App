import React, { useState, useEffect } from "react";
import Background from '../assets/wallpaper.jpg';
import { NavLink,useNavigate } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const navigate = useNavigate();
const start=()=>{
    navigate("/categories"); 
}

  return (
    <div style={containerStyle}>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={start}>
          Get Started
        </button>

    </div>
  );
};

export default Home;
