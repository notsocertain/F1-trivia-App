import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getScore } from '../services/axios.service';

import { useLocation } from 'react-router-dom';

const Results = () => {
  const [score, setScore] = useState([]);
  const location = useLocation();
  const resultId = location.state?.resultId;
 const navigate = useNavigate();


  const fetchResult = async()=>{
    try{
      const response = await getScore(`score/${resultId}`);
        // console.log(response.status)
        console.log("Full response:", response);
        setScore(response.data);

    }catch(error){
        console.error(error);
    }
  }
useEffect(() => {
fetchResult();
}, []);

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md mt-8 mb-8 ">
      <div className="flex items-center justify-center flex-col mb-4">
        <FontAwesomeIcon icon={faTrophy} color="yellow" size="3x" />
        <h2 className="text-3xl font-semibold mb-4">Congratulations!</h2>
      </div>
      <p className="text-lg mb-4">
        Quiz Completed Successfully
      </p>
      <p className="text-2xl mb-4 text-green-500 text-center">
        Category: <span className='text-blue-500'> {score.category} </span>
      </p>
      <p className="text-4xl mb-4 text-green-500 text-center">
        {score.percentageCorrectAnswers}% SCORE
      </p>
      </div>
  );
};

export default Results;
