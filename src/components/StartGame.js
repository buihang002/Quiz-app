import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col  items-center pt-20 h-screen bg-[#A5B4FC]">
      <h1 className="text-4xl font-bold mb-8 text-white">Welcome to the Quiz Game</h1>
      <button
        className=" text-xs bg-[#9ff9ba] hover:bg-[#6ED5B7] hover:text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 font-bold py-2.5 px-10 rounded"
        onClick={onStart}
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
