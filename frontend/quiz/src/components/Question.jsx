import React, { useState } from 'react';

const Question = ({ questions, currentQuestionIndex, handleNextQuestion }) => {
  const currentQuestion = questions[currentQuestionIndex];
  const [selected, setSelected] = useState(null);
  const [answerIs, setAnswerIs] = useState("");
  const [questionIs, setQuestionIs] = useState("");
  const [correctAnswerIs, setCorrectAnswerIs] = useState("");

 
  
  // Handle potential errors gracefully
  if (!currentQuestion) {
    return <div className="bg-sky-200 px-4 py-16">Error: Question not found</div>;
  }

  return (
    <div className="w-full px-4 py-16 bg-sky-200" style={{height:'80vh'}}>
      {questions.length > 0 && (
        <div className="mx-auto w-full max-w-md">
          <div key={currentQuestionIndex} className="mb-8">
            <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>

            {/* Use Tailwind CSS for radio button styling */}
            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.name}
                  className={`relative flex items-center cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none ${
                    selected === option ? 'bg-sky-900/75 text-white' : 'bg-white'
                  }`}
                  onClick={() => {setSelected(option),setAnswerIs(option.name),setQuestionIs(currentQuestion.question),setCorrectAnswerIs(currentQuestion.correctAnswer)}}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="question-group"
                        id={option.name}
                        className="w-4 h-4 text-sky-900 border-gray-300 focus:ring-sky-500 rounded"
                        checked={selected === option}
                      />
                      <label htmlFor={option.name} className="ml-3 block text-sm font-medium text-gray-700">
                        {option.name}
                      </label>
                    </div>
                    {selected === option && (
                      
                      <CheckIcon className="h-5 w-5 text-white" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 block ml-auto mt-4"
              onClick={() => {
                handleNextQuestion(answerIs,questionIs,correctAnswerIs);
              }}
            >
              {currentQuestionIndex === questions.length -  1  ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Question;
//  CheckIcon is defined here


function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
