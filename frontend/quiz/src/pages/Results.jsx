import React, { useState, useEffect } from 'react';
import Logo from '../assets/f1.png'; // Replace with actual path
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const resultId = location.state?.resultId;
  const totalQuestions = 10; // Replace with the total number of questions
  const totalCorrectAnswers = 7; // Replace with the actual number

  const percentageCorrect = (totalCorrectAnswers / totalQuestions) * 100;

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md mt-8 mb-8 ">
      <div className="flex items-center justify-center flex-col mb-4">
        <FontAwesomeIcon icon={faTrophy} color="yellow" size="3x" />
        <h2 className="text-3xl font-semibold mb-4">Congratulations!</h2>
      </div>
      <p className="text-lg mb-4">
        Quiz Completed Successfully
      </p>
      Result ID: {resultId}
      <p className="text-4xl mb-4 text-green-500 text-center">
        {percentageCorrect.toFixed(2)}% SCORE
      </p>
      <p className="text-lg mb-4">
        You attempted{' '}
        <span className="text-lg mb-4 text-blue-500">{totalQuestions} questions </span>,
        and{' '}
        <span className="text-lg mb-4 text-green-500">{totalCorrectAnswers} </span> answers were correct.
      </p>
      </div>
  );
};

export default Results;
