import React from 'react';

const EndScreen = ({ score, onTryAgain, onReview }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-200">
      <h1 className="text-4xl font-bold mb-8">Your Score: {score}</h1>
      <div className="flex gap-4">
        <button
          className="bg-teal-400 text-white font-bold py-2 px-6 rounded"
          onClick={onTryAgain}
        >
          Try Again
        </button>
        <button
          className="bg-yellow-500 text-white font-bold py-2 px-6 rounded"
          onClick={onReview}
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
