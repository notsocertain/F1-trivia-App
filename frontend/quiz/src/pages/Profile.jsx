import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuizResults,logout } from '../services/axios.service'; 
import ProfilePic from '../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import DetailedResult from '../components/DetailedResult';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [quizResults, setQuizResults] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedResultId, setSelectedResultId] = useState(null);
  const [selectedResultScore, setSelectedResultScore] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user information
        // const userResponse = await getUserInfo(); // Replace with your API call
        // setUserInfo(userResponse.data);

        // Fetch past quiz results
        let quizResultsResponse = await getQuizResults('profile'); // Replace with your API call
        console.log(quizResultsResponse)

        console.log(quizResultsResponse.fullName)
        const userInfo= {
            fullName: quizResultsResponse.fullName,
            email: quizResultsResponse.email,
            dob:quizResultsResponse.dob,
            favoriteTeam: quizResultsResponse.favoriteTeam   
        }
        delete quizResultsResponse.fullName;
        delete quizResultsResponse.email;
        delete quizResultsResponse.dob;
        delete quizResultsResponse.favoriteTeam

        console.log(quizResultsResponse)
        setUserInfo(userInfo)

    // const dataArray = Object.values(quizResultsResponse.data);
    const dataArray = Object.values(quizResultsResponse).map(result => ({
      _id: result._id,
      questions: result.questions,
      category: result.category,
      email: result.email,
      totalCorrectAnswers: result.totalCorrectAnswers,
      percentage: result.percentageCorrectAnswers,
      date: formatDate(result.createdAt)
      // Add other properties you need from the original object
    }));
    
    console.log(dataArray);
        setQuizResults(dataArray);
      //  setQuizResults(quizResultsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchData();
  }, []);
  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }
  const resultsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;

  const visibleResults = quizResults.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const logoutFunction = async () => {
    try {
      // console.log('log out');
      // Assuming this is an asynchronous logout function
     const loggingout =await logout('logout');
     if(loggingout){
      navigate("/login"); 
    }
    } catch (error) {
      console.error(error.message);
    }
  };

  // useEffect(() => {
    // Call your logout function here or perform any other logic
  //   logoutFunction();
  // }, []); // Empty dependency array means this effect runs once after the initial render

  
  const handleViewDetails = (id,score) => {
    console.log(id);
    console.log(score);
    setSelectedResultId(id);
    setSelectedResultScore(score);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedResultId(null);
  };

  return ( 
    <>
      <div className="w-screen bg-white pl-5 shadow-md rounded-md flex-row space-x-4">
        <div>
          <img
            src={ProfilePic} // Replace with the actual path to your F1 logo
            alt="Profile Picture"
            className="w-30 h-20" // Adjust width, height, and margin as needed
          />
          <p className="text-2xl mb-2 text-red-500">{userInfo.fullName}</p>
  
          <p className="text-lg font-semibold mb-2">Date of Birth:
            <span className="mb-4"> {formatDate(userInfo.dob)}</span>
          </p>
  
          <p className="text-lg font-semibold mb-2">
            Email: <a href={`mailto:${userInfo.email}`} className="text-blue-500">{userInfo.email}</a>
          </p>
          <p className="text-lg font-semibold mb-2">Favorite Team:
            <span className="text-sky-500"> {userInfo.favoriteTeam} Racing </span>
          </p>
        </div>
  
        <div className="w-full p-4 rounded-md">
        <h2 className="text-2xl text-center font-semibold mb-4">Past Quiz Results</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Total Correct Answers</th>
                <th className="py-2 px-4 border-b">Percentage Score</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">View Details</th>
              </tr>
            </thead>
            <tbody>
              {visibleResults.map((result, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-2 text-black px-4 text-center  border-b">{result.category}</td>
                  <td className="py-2 text-black text-center px-4 border-b">{result.totalCorrectAnswers}</td>
                  <td className="py-2 text-black text-center px-4 border-b">{result.percentage.toFixed(2)}%</td>
                  <td className="py-2 text-black text-center px-4 border-b">{result.date}</td>
                  <td className="py-2 text-black text-center px-4 border-b"><button onClick={() => handleViewDetails(result._id,result.percentage)}><FontAwesomeIcon icon={faEye} /></button>  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            <button onClick={logoutFunction} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 block ml-auto m-4 mr-4">
                  Log Out
                </button>
            
      </div>

      {showDetails && (
              <DetailedResult
                resultId={selectedResultId}
                score = {selectedResultScore}
                onClose={handleCloseDetails}
              />
            )}
    </div>
  </>
  );  
};

export default Profile;
