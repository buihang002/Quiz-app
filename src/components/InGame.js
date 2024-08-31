import React, { useState } from 'react';
import questionsData from '../data/questions.json';

const InGameScreen = ({ onEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(90);

  const currentQuestion = questionsData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    setAnswers([...answers, selectedAnswer]);
    setSelectedAnswer(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSubmit = () => {
    setAnswers([...answers, selectedAnswer]);
    onEnd(answers);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1]);
    }
  };

  // Bonus: Countdown Timer
  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onEnd(answers);
    }
  }, [timeLeft]);

  return (
    <div className="p-4 bg-indigo-200 h-screen flex flex-col items-center justify-center">
      <div className="flex justify-between mt-6">
          <button
            className="bg-gray-600 text-white font-bold py-2 px-6 rounded"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          {isLastQuestion ? (
            <button
              className="bg-yellow-500 text-white font-bold py-2 px-6 rounded"
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-teal-400 text-white font-bold py-2 px-6 rounded"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              Next
            </button>
          )}
        </div>
      <div className="w-full max-w-lg">
        <div className="flex justify-between mb-4">
          <span className="text-gray-700">Question {currentQuestionIndex + 1}/{questionsData.length}</span>
          <span className="text-gray-700">Time Left: {timeLeft}s</span>
        </div>
        <h2 className="text-2xl font-bold mb-6">{currentQuestion.question_content}</h2>
        <div className="flex flex-col gap-4">
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              className={`p-4 border rounded ${selectedAnswer === index ? 'bg-indigo-800 text-white' : 'bg-white text-gray-800'} hover:bg-indigo-600 hover:text-white`}
              onClick={() => handleAnswerClick(index)}
            >
              {answer.answer_content}
            </button>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default InGameScreen;
