import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import Results from './Results';
import { getQuestionsByCategory, storeResult } from '../services/axios.service';

const Quiz = () => {
  const { category } = useParams();
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [finalResponses, setFinalResponses] = useState([]);
  
  const fetchQuestions = async () => {
    try {
      const response = await getQuestionsByCategory(`categories/${category}`);
      console.log(response.data);
      setFilteredQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const navigate = useNavigate();

  const handleNextQuestion = (answer, question, correctAnswer) => {
    console.log('called');
    console.log(question);
    console.log(answer);
    setResponses((prevResponses) => [
      ...prevResponses,
      { question, answer, correctAnswer },
      
    ]  );
 
 
    setCurrentQuestionIndex((current) => {
      console.log(filteredQuestions.length);
      const nextIndex = (current + 1) % filteredQuestions.length;
      console.log(nextIndex);
      if (nextIndex === 0) {

        setFinalResponses([...responses, { question, answer, correctAnswer }]);
      }
      return nextIndex;
    });
  };
  const data = finalResponses;
  // console.log(data);

  useEffect(() => {
    const sendResult = async () => {
      console.log('sentResult is being called');
      try {
         console.log(data);
      const  response = await storeResult("storeResult", { questions:data, category });
      console.log(response);
        if(response.message=="Result Stored Successfully"){
          const id = response.data._id;
            console.log(response.data._id);

        navigate('/results', { state: { resultId: id} });
      }
 
      } catch (error) {
        console.error(error);
      }
    };
    if (finalResponses.length > 0) {
      sendResult(); // Send result only when finalResponses has data
    }
  }, [data,category]);
  

  return (
    <div>
      <Question
        questions={filteredQuestions}
        currentQuestionIndex={currentQuestionIndex}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default Quiz;