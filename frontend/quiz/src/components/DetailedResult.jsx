import React, { useState, useEffect } from 'react';
import { getQuizResults } from '../services/axios.service'; 

const DetailedResult = ({ resultId, onClose,score }) => {
    const [details, setDetails] = useState([]);
    console.log(score);
  // Fetch or process detailed result data based on the resultId
  useEffect(() => {
  const fetchData =async()=>{
    try{
    // Fetch past quiz results
    let response = await getQuizResults(`results/${resultId}`); //  API call
   
        ///mapping object to array
        const detail= {
            email: response.email,
            questions: response.questions  
        }

        setDetails(detail.questions)
        

    }catch(error){
        console.error(error)
    }
///mapping object to array


  }
  fetchData();
}, []);

const resultsPerPage = 5;
const [currentPage, setCurrentPage] = useState(1);

const startIndex = (currentPage - 1) * resultsPerPage;
const endIndex = startIndex + resultsPerPage;

const visibleResults = details.slice(startIndex, endIndex);

const handleNextPage = () => {
  setCurrentPage((prevPage) => prevPage + 1);
};
const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Detailed Result Card</h2>
        <p className="text-2xl font-semibold mt-4">Score: {score.toFixed(2)}</p>
        {visibleResults.map((detail) => (
          <div key={detail.id} className="bg-white p-4 shadow-md rounded-md">
            {/* Add an image for each category */}
            <p className="text-lg font-semibold">{detail.question}</p>
            <p className="text-lg font-semibold" style={{ color: detail.isUserAnswerCorrect ? 'green' : 'red' }}>
  {detail.correctAnswer}
</p>

            {/* Add any other information about the category */}
          </div>
        ))}
                    <div className="flex justify-between mt-4">
                {currentPage > 1 && (
                        <button onClick={handlePrevPage} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 block mr-auto ml-4">
                          Back
                        </button>
                      )}
                {visibleResults.length === resultsPerPage && (
                <button onClick={handleNextPage} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 block ml-auto mr-4">
                  Next
                </button>
              )}
            </div>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailedResult;
