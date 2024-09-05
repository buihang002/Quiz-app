import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col  items-center pt-5 h-screen bg-[#A5B4FC]">
      <h1 className="container text-5xl font-bold mb-8 text-white mx-auto pt-16 text-center">
        Welcome to React Quiz Game!
      </h1>
      <button
        className="text-lg bg-[#9ff9ba] hover:bg-[#6ED5B7] hover:text-white rounded-lg shadow-lg transform hover:scale-105 font-bold py-2.5 px-16 rounded"
        onClick={onStart}
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
