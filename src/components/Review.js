import React from 'react';
import questionsData from '../data/questions.json';

const ReviewScreen = ({ answers, onRestart }) => {
  return (
    <div className="p-4 bg-indigo-200 h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        {questionsData.map((question, index) => (
          <div key={question.id} className="mb-6">
            <h2 className="text-2xl font-bold mb-4">{question.question_content}</h2>
            {question.answers.map((answer, answerIndex) => (
              <div
                key={answerIndex}
                className={`p-4 border rounded mb-2 ${answer.correct ? 'bg-green-500 text-white' : answers[index] === answerIndex ? 'bg-red-500 text-white' : 'bg-white text-gray-800'}`}
              >
                {answer.answer_content}
              </div>
            ))}
          </div>
        ))}
        <button
          className="bg-yellow-500 text-white font-bold py-2 px-6 rounded mt-6"
          onClick={onRestart}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default ReviewScreen;
