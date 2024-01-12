import React, { useState, useEffect } from "react";
import Logo from '../assets/f1.png'
import { NavLink,useNavigate } from 'react-router-dom';
import { getCategories } from "../services/axios.service";
import ErrorPage from "./ErrorPage";

const Categories = () => {
    const [categories, setcategories] = useState([]);
    const Navigate = useNavigate();
    const fetchCategories = async()=>{
        try{
            const response = await getCategories("categories");
            console.log(response.status)
            console.log("Full response:", response.data.data);
            if (response.status === 401) {
                // Unauthorized - No token found
                Navigate("/"); // Redirect to the home page
              }
            setcategories(response.data.data);
    
        }catch(error){
            console.error(error);
        }
      }
  useEffect(() => {
    fetchCategories();
}, []);


  return (
    <div className="text-center max-w-md mx-auto mt-4">
      <h1 className="text-2xl font-semibold mb-4">CHOOSE A CATEGORY</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-4 shadow-md rounded-md">
            {/* Add an image for each category */}
            <img
              src={Logo}
              alt={`${category} category`}
              className="w-full h-42 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold">{category.name}</h2>
            {/* Add any other information about the category */}
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <NavLink to={`/categories/${category.name}`}>
                Start Quiz
                </NavLink>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
