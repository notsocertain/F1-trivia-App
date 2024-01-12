import { Outlet, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { isAuth } from '../services/axios.service';
import { useNavigate } from 'react-router-dom';
import Picture from '../assets/f1-bg.jpg'

const PrivateRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        let response = await isAuth('auth');
        setIsAuthenticated(response.data);
        console.log(response.data);
        console.log(response.message);
      } catch (error) {
        console.error(error);
      }
    };
    // Call the asynchronous function within useEffect
    fetchAuthStatus();
  }, [isAuthenticated]); // Empty dependency array ensures that this effect runs once

  useEffect(() => {
    // Log the updated value after the state has been set
    console.log('isAuthenticated:', isAuthenticated);
  }, [isAuthenticated]); // Dependency array ensures this effect runs whenever isAuthenticated changes
  const f1Facts = [
    'Formula 1 cars can accelerate from 0 to 100 mph and decelerate back to 0 in just four seconds.',
    'The steering wheel of an F1 car is incredibly complex, with numerous buttons and switches used to control various aspects of the car.',
    'The tires used in Formula 1 are designed to withstand speeds of up to 220 mph and temperatures exceeding 100 degrees Celsius.',
    'A Formula 1 engine can rev up to 15,000 revolutions per minute (RPM) or more.',
    'Drivers can lose up to 4 kg of weight during a single race due to intense physical exertion and high temperatures inside the cockpit.',
    'The Formula 1 teams pit crew can change the wheels of the car in under 2'
  ];
  useEffect(() => {
    // Update the current fact index every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % f1Facts.length);
    }, 5000); // 10 seconds
        // Clear the interval when the component unmounts or when isAuthenticated changes
        return () => clearInterval(intervalId);
    }, [isAuthenticated]);

    return (
        <>
          {isAuthenticated === null ? (
            <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Picture})` }}>
              <div className="space-x-4 mt-4"> {/* Add some margin to the top */}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => navigate('/login', { replace: true })}
                >
                  Login
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => navigate('/register', { replace: true })}
                >
                  Sign Up
                </button>
              </div>
              <div className="bg-white p-4 rounded shadow-lg text-black w-full fixed bottom-0"> {/* Glue to bottom */}
                <h2 className="text-2xl font-bold mb-2">Did you know?</h2>
                <p className="text-gray-700">{f1Facts[currentFactIndex]}</p>
              </div>
            </div>
          ) : isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate to="/login" replace />
          )}
        </>
      );
};

export default PrivateRoutes;
