import React, { useState } from "react";
import questionsData from "../data/questions.json";

const ReviewScreen = ({ answers, onRestart }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questionsData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-[#A5B4FC] h-screen text-xl flex flex-col items-center pt-6">
      <div className="flex justify-center w-full max-w-lg px-4 mt-6 space-x-4 pb-10">
        <button
          className="rounded-lg shadow-lg hover:shadow-2xl font-bold py-2.5 px-10 bg-gray-600 hover:bg-[#e5e7eb] text-white disabled:bg-[#e5e7eb] disabled:text-gray-400"
          onClick={handlePrevious}
          disabled={isFirstQuestion}
        >
          Previous
        </button>
        <button
          className="text-black hover:text-white rounded-lg shadow-lg hover:shadow-2xl font-bold py-2.5 px-14 bg-[#9ff9ba] hover:bg-[#6ED5B7] text-white font-bold py-2 px-6 rounded disabled:bg-gray-400"
          onClick={handleNext}
          disabled={isLastQuestion}
        >
          Next
        </button>
        <button
          className="bg-[#F59E0B] hover:bg-yellow-500 text-white shadow-lg hover:shadow-2xl font-bold py-2 px-10 rounded-lg"
          onClick={onRestart}
        >
          Restart
        </button>
      </div>
      <div className="w-full max-w-2xl  relative rounded-lg pb-8 pt-10">
        <div className="pl-6 pr-6">
          <div className="relative bg-white rounded-lg shadow-md pb-8">
            <div className="text-center pt-6 pb-4 p-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full  flex items-center justify-center shadow-lg">
                <div className="text-red-600 font-bold absolute w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <div>End!</div>
                </div>
              </div>
              <p className="text-blue-700 text-lg pt-14">
                Question{" "}
                <span className="font-bold">{currentQuestionIndex + 1}</span>/
                {questionsData.length}
              </p>
              <h2 className="pt-6 text-2xl font-bold text-gray-800">
                {currentQuestion.question_content}
              </h2>
            </div>
          </div>

          {/* Answers */}
          <div className="pl-6 pr-6">
            <div className="flex flex-col gap-4 mt-6 content-center">
              {currentQuestion.answers.map((answer, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg shadow-lg ${
                    answer.correct
                      ? "bg-green-500 text-white"
                      : answers[currentQuestionIndex] === index
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {answer.answer_content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewScreen;
