import React, { useState, useEffect } from "react";
import Background from '../assets/f1-bg.jpg';
import { NavLink,useNavigate } from 'react-router-dom';
import { isAuth } from '../services/axios.service';
import Cookies from 'universal-cookie';

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
  const Navigate = useNavigate();
  const cookies = new Cookies();
//   cookies.set('name', 'value', {
//     path: '/', // The cookie will be accessible on all pages
//     expires: new Date('2024-01-01'), // The cookie will expire on this date
//     secure: true, // The cookie will only be sent over HTTPS
//     sameSite: 'none' // The cookie will not be restricted by the SameSite policy
//   });
//THIS IS SO WRONG https is not secure at backend
  
  // Log the cookie value
  console.log(cookies.get('name')); // valu
 console.log(cookies.get('jwtoken'));

 const getStarted = async()=>{
            try{
                const response = await isAuth("auth");
                console.log(response.status)
                if (response.message === "Authorized") {
                    Navigate("/categories"); // Redirect to the home page
                  }
                  if (response.status === 401) {
                    // Handle unauthorized access, for example, redirect to login
                    Navigate("/login");

                  }

//    const userId = cookies.get('jwtoken') ? true : false;    
//    if(!userId){
//     Navigate("/login");

//    }
        
            }catch(error){
                console.error(error);
            }
        
      useEffect(() => {
        isAuthorized();
    }, []);
}

  return (
    <div style={containerStyle}>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getStarted}>
          Get Started
        </button>

    </div>
  );
};

export default Home;
