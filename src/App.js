import React, { useState } from 'react';
import StartScreen from './components/StartGame';
import InGameScreen from './components/InGame';
import EndScreen from './components/EndGame';
import questionsData from './data/questions.json';
function App() {
  const [stage, setStage] = useState('start');
  const [score, setScore] = useState(0);

  const handleStart = () => setStage('in-game');

  const handleEnd = (answers) => {
    const correctAnswers = answers.filter((answer, index) =>
      answer === questionsData[index].answers.findIndex(a => a.correct)
    ).length;
    setScore(correctAnswers);
    setStage('end');
  };

  const handleTryAgain = () => {
    setStage('start');
    setScore(0);
  };

  return (
    <div className="App">
      {stage === 'start' && <StartScreen onStart={handleStart} />}
      {stage === 'in-game' && <InGameScreen onEnd={handleEnd} />}
      {stage === 'end' && <EndScreen score={score} onTryAgain={handleTryAgain} />}
    </div>
  );
}

export default App;
