import React from 'react';

const EndScreen = ({ score, onTryAgain, onReview }) => {
  return (
    <div className=" text-lg flex flex-col items-center h-screen bg-[#A5B4FC]">
      <h1 className="text-4xl text-white mb-8 pt-24">Your score is: <span className='font-bold'>{score}</span></h1>
      <div className="flex gap-4">
        <button
          className= "bg-[#9ff9ba] hover:bg-[#6ED5B7] hover:text-white  font-bold py-2 px-6 rounded"
          onClick={onTryAgain}
        >
          Try Again
        </button>
        <button
          className=" bg-[#e14c4c] hover:bg-[#f87171] text-white shadow-lg hover:shadow-2xl transform hover:scale-105 font-bold py-2 px-6 rounded"
          onClick={onReview}
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
