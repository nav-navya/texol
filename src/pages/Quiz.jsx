import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Sidebar from "./Sidebar"; 
import { questions } from "./questions"; 

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    const nextQn = currentQuestion + 1;
    if (nextQn < questions.length) {
      setCurrentQuestion(nextQn);
    } else {
      setShowScore(true);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    

    <div className="flex h-screen">
      <ToastContainer position="top-center" autoClose={3000} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        setCurrentQuestion={setCurrentQuestion}
      />

      
      <div className={`flex flex-col justify-center items-center w-full transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}>
        <button
          className="absolute top-4 left-4 p-2 bg-gray-600 text-white rounded"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? "Close" : "Open"}
        </button>

        {!showScore && (<div className="p-2 text-center  mb-2  text-[#2A586F]  underline decoration-amber-300 text-3xl font-bold">
           Asses your Intelligence 
        </div>)}

        <div className="w-full max-w-lg bg-gray-200 p-5 rounded shadow-lg">
          {showScore ? (
            <div className="text-center text-xl font-semibold">
              <div>
                <div className="flex justify-center">
                <img src="/tick.png" className="w-[100px]"/>
                </div>
              <p>Congratulations You have succesfully completed the task</p>
              Your Score: <span className="bg-amber-300 px-4 rounded-xl"> {score} /{questions.length} </span>

              </div>
             
            </div>
          ) : (
            <div>
              <div className="flex items-center text-lg font-semibold mb-4">
                <div className="rounded-full w-6 h-6 flex items-center justify-center bg-[#2A586F] text-white mr-4">
                  {currentQuestion + 1}
                </div>
                {questions[currentQuestion].questionText}
              </div>

              <div className="bg-white p-6 rounded">
                {questions[currentQuestion].answerOptions.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-2 mt-8 rounded cursor-pointer w-full ${
                      selectedAnswer === index ? "bg-green-200" : "bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="quizOption"
                      className="mr-2"
                      checked={selectedAnswer === index}
                      onChange={() => handleAnswerOption(index, option.isCorrect)}
                      disabled={selectedAnswer !== null}
                    />
                    {option.answerText}
                  </label>
                ))}
              </div>

              <button
                className="mt-8 block w-auto p-2 text-white rounded bg-[#2A586F]"
               
                onClick={nextQuestion}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
