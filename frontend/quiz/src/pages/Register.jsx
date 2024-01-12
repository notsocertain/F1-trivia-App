import React, { useState, useEffect } from 'react';
import { postSignup } from '../services/axios.service';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [fullName, setfullName] = useState("");
    const [dob, setdob] = useState("");
    const [password, setPassword] = useState("");
    const [email, setemail] = useState("");
    const [verify, setverify] = useState("");
    const [favoriteTeam, setfavoriteTeam] = useState("");
    const Navigate = useNavigate();

    const signupHandle = async (e) => {
        e.preventDefault();
        try{
        const response = await postSignup("signup", {
          fullName,
          dob,
          email,
          password,
          favoriteTeam,
        });
        if(response.message=="Account Created Successfully"){
        Navigate("/login");
    }
      
    }catch(e){
        console.error(e);
    };
    }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md text-center">
        <h2 className="text-2xl font-semibold mb-2">CREATE ACCOUNT</h2>

        <form onSubmit={signupHandle} className="w-full text-left">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-md"
              onChange={(e) => setfullName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder="Enter your date of birth"
              className="w-full px-4 py-3 border rounded-md"
              onChange={(e) => setdob(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-md"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="verify"
              name="verify"
              placeholder="Enter the same password"
              className="w-full px-4 py-3 border rounded-md"
              onChange={(e) => setverify(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="favoriteTeam" className="block text-gray-700 text-sm font-bold mb-2">
              Favorite Team
            </label>
            <select
              id="favoriteTeam"
              name="favoriteTeam"
              className="w-full px-4 py-3 border rounded-md"
              onChange={(e) => setfavoriteTeam(e.target.value)}
            >
              <option value="">Choose your favorite team</option>
              <option value="Redbull">Redbull</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Mclaran">Mclaran</option>
              <option value="Aston Martin">Aston Martin</option>
              <option value="Alpine">Alpine</option>
              <option value="Williams">Williams</option>
              <option value="Alpha Tauri">Alpha Tauri</option>
              <option value="Stake F1">Stake F1</option>
              <option value="Haas F1">Haas F1</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex items-center mt-4 pb-2">
            <p className="mr-1">By clicking Register, you agree to our</p>
            <a href="#" className="text-blue-500 underline">
              Terms of Use
            </a>
            <p className="mx-1">and</p>
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
