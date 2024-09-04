import React, { useState, useEffect } from "react";
import questionsData from "../data/questions.json";

const InGameScreen = ({ onEnd }) => {
  const totalTime = 90;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questionsData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedAnswer;
      return newAnswers;
    });
    setSelectedAnswer(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSubmit = () => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedAnswer;
      return newAnswers;
    });
    onEnd(answers);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] || null);
    }
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      onEnd(answers);
    }
  }, [timeLeft]);

  return (
    <div className="bg-[#A5B4FC] h-screen text-xl flex flex-col items-center pt-6">
      <div className="flex justify-center w-full max-w-lg px-4 mt-6 space-x-4 pb-10">
        <button
          className="rounded-lg shadow-lg hover:shadow-2xl font-bold py-2.5 px-10 bg-gray-600 text-white disabled:bg-[#e5e7eb]"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="text-black hover:text-white rounded-lg shadow-lg hover:shadow-2xl font-bold py-2.5 px-10 bg-[#9ff9ba] hover:bg-[#6ED5B7] text-white font-bold py-2 px-6 rounded disabled:bg-gray-400"
          onClick={handleNext}
          disabled={selectedAnswer === null || isLastQuestion}
        >
          Next
        </button>
        {isLastQuestion && (
          <button
            className=" bg-[#F59E0B] hover:bg-yellow-500 text-white shadow-lg hover:shadow-2xl font-bold py-2 px-6 rounded disabled:bg-gray-400"
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
          >
            Submit
          </button>
        )}
      </div>

      <div className="w-full max-w-2xl pt-10">
        <div className="relative bg-white rounded-lg shadow-md pb-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg">
            <div
              className={`text-xl font-bold ${
                timeLeft <= 10 ? "text-red-600" : "text-black"
              }`}
            >
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="text-center pt-24 pb-16 p-2">
            <p className="text-blue-700 text-lg">
              Question{" "}
              <span className="font-bold">{currentQuestionIndex + 1}</span>/
              {questionsData.length}
            </p>
            <h2 className="pt-6 text-2xl font-bold text-gray-800">
              {currentQuestion.question_content}
            </h2>
          </div>
        </div>
        <div className="pl-6 pr-6">
          <div className="flex flex-col gap-4 mt-6 content-center">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                className={`p-4 border rounded-lg shadow-lg ${
                  selectedAnswer === index
                    ? "bg-indigo-800 text-white"
                    : "bg-white text-gray-800 hover:bg-indigo-800 hover:text-white transition"
                }`}
                onClick={() => handleAnswerClick(index)}
              >
                {answer.answer_content}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InGameScreen;
