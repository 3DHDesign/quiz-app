 // src/App.js
import React from 'react';
import QuizForm from './components/quiz/QuizForm';

function App() {
  const handleQuizSubmit = (data) => {
    // Handle the submitted quiz data
    console.log('Quiz Data:', data);
  };

  return (
    <div className="App">
      <QuizForm onSubmit={handleQuizSubmit} />
    </div>
  );
}

export default App;
