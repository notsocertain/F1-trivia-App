import React, { useState } from "react";
import Register from "./Register"
import { NavLink,useNavigate } from 'react-router-dom';
import { postLogin } from '../services/axios.service';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
    const [email,setemail]= useState("");
    const [password,setpassword] = useState("");
    const Navigate = useNavigate();

    const loginHandle= async(e)=>{
        e.preventDefault();
        try{
        const response = await postLogin("login",{
            email,
            password
        });
        console.log(response.message);
        if(response.message=="Successfully Logged In"){
            const loginData = {
                email: response.data.email,
                favoriteTeam: response.data.favoriteTeam,
                dob: response.data.dob,
                fullName: response.data.fullName,
                token: response.data.token,
              };
        Navigate("/categories");
    }
    return response;
    }catch(error){
        console.error(error);
    }
    }

  return (
    <div className="flex justify-center items-center bg-rose-10">
      <div className=" text-center max-w-md mx-auto w-full">
        <h1 className="text-2xl font-semibold mb-4 mt-4">SIGN IN</h1>
        <form onSubmit={loginHandle} className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block text-left">
              Email 
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border rounded-md"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-md"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full"
          >
            Sign in
          </button>
        </form>
        <div className="text-center mt-4">Or continue with other ways</div>

        <div className="flex justify-center text-center mt-2">
          <button className="mr-4">
          <FontAwesomeIcon icon={faGoogle} size="2x" />

          </button>
          <button className="mr-4">
          <FontAwesomeIcon icon={faApple} size="2x" />
          </button>
          <button className="mr-4">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          </button>
        </div>

        <div className="flex items-center mt-4">
          <p className="mr-1">Don't have an account yet?</p>
           <NavLink to="/register" className="text-blue-500 underline">
            Register with us
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
