import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestionsByCategory, storeResult } from '../services/axios.service';

const Quizz = () => {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [userResponses, setUserResponses] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    try {
      const response = await getQuestionsByCategory(`categories/${category}`);
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [category]);

  const handleOptionSelect = (selectedOption) => {
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestionIndex] = { question: currentQuestion.question, response: selectedOption };
      return updatedResponses;
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = () => {
    // You can send the userResponses to your server or perform other actions.
    storeResult(userResponses);
    console.log(userResponses);
    // Optionally, you can navigate to a result page or perform other actions.
    navigate('/result');
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <>
        <p>No more questions!</p>
        <button onClick={handleSubmit}>Finish</button>
      </>
    );
  }

  return (
    <>
      <div className="w-full px-4 py-16 bg-sky-200" style={{ height: '80vh' }}>
        <div className="mx-auto w-full max-w-md">
          <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option) => (
              <li
                key={option._id}
                className="mb-4 p-4 bg-white hover:bg-gray-200 rounded cursor-pointer transition duration-300 ease-in-out"
                onClick={() => handleOptionSelect(option.name)}
              >
                <span className="text-lg font-medium text-gray-800">{option.name}</span>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 block ml-auto mt-4"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Quizz;
