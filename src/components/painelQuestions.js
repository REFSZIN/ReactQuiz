import React, { useState } from 'react';
import styled from 'styled-components';
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className='app'>
      {/* HINT: substitua "falso" pela lógica para exibir o
    pontuação quando o usuário respondeu a todas as perguntas
    */}
      {showScore ? (
        <Score className='score-section'>Você acertou {score} de um total de {questions.length}
          <ButtonShow onClick={() => handleReload()}> Reload </ButtonShow>
        </Score>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>)
            )}
          </div>
        </>
      )}
    </div>
  );
}

const Score = styled.div`
  height: 160px;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  place-content: center flex-start;
  -webkit-box-pack: start;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 80%;
`;

const ButtonShow = styled.button`
  width: 80%;
  margin-top: 20px;
  align-content: center;
  justify-content: center;
`;

