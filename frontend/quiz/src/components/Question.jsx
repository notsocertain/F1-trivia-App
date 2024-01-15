import React, { useState,useEffect } from 'react';

const Question = ({ questions, currentQuestionIndex, handleNextQuestion }) => {
  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  const [selected, setSelected] = useState(null)
  // console.log(currentQuestion.category);
  // console.log(currentQuestion.options[0].name);

  // Set default to first option
  const [answerIs, setAnswerIs] = useState("");
  const [questionIs, setQuestionIs] = useState("");
  const [correctAnswerIs, setCorrectAnswerIs] = useState("");
 
  
  // Handle potential errors gracefully
  if (!currentQuestion) {
    return <div className="bg-sky-200 px-4 py-16">Error: Question not found</div>;
  }
  function optionSelected(option,name){
    setSelected(option),
    setAnswerIs(name);
    // console.log(name);
  }

  function onClickHandler (question,correctAnswer) {
    const currentQuestionText = question;
    const currentCorrectAnswer = correctAnswer;

    setQuestionIs(currentQuestionText);
    setCorrectAnswerIs(currentCorrectAnswer);
    // handleNextQuestion(answerIs || "No option selected", questionIs, correctAnswerIs);
    // setAnswerIs(""); // Reset answerIs to an initial value
  };
    // Move the state update logic outside the onClickHandler function
    useEffect(() => {
        setQuestionIs(currentQuestion.question);
        setCorrectAnswerIs(currentQuestion.correctAnswer);
  
    }, [currentQuestion]);
  
  

  return (
    <div className="w-full px-4 py-16 bg-sky-200" style={{height:'80vh'}}>
      {questions.length > 0 && (
        <div className="mx-auto w-full max-w-md">
          <div key={currentQuestionIndex} className="mb-8">
            <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>

            {/* Use Tailwind CSS for radio button styling */}
            <div className="space-y-4">
              {currentQuestion.options.map((option,index) => (
                <div
                  key={option.name}
                  className={`relative flex items-center cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none ${
                    selected === option ? 'bg-sky-900/75 text-white' : 'bg-white'
                  }`}
                  // onClick={() => { setSelected(option),setAnswerIs(option.name)}}
                  onClick={()=>{optionSelected(option,option.name)}}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="question-group"
                        id={option.name}
                        className="w-4 h-4 text-sky-900 border-gray-300 focus:ring-sky-500 rounded"
                        checked={selected === option}
                        defaultChecked={index === 0} // Add defaultChecked for the first option
                      />
                      <label htmlFor={option.name} className="ml-3 block text-sm font-medium text-gray-700">
                        {option.name}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
                          <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 block ml-auto mt-4"
              onClick={()=>{onClickHandler(currentQuestion.question,currentQuestion.correctAnswer),
                handleNextQuestion(answerIs || "No option selected", questionIs, correctAnswerIs);
                setAnswerIs(""); // Reset answerIs to an initial value
              }}
              
              
            >
              {currentQuestionIndex === questions.length -  1  ? 'Finish' : 'Next'}
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Question;