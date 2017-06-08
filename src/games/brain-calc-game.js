import runGame from './brain-games-api';

const maxNum = 100;
const operations = ['+', '-', '*'];
const question = {};
// var rand = min - 0.5 + Math.random() * (max - min + 1)
//     rand = Math.round(rand);
//     return rand;
const getRandom = (max) => {
  const temp = Math.random() * (max + 1);
  return Math.round(temp - 0.5);
};

const getQuestion = () => {
  question.firstNum = getRandom(maxNum);
  question.secondNum = getRandom(maxNum);
  question.operation = operations[getRandom(operations.length - 1)];
  return `${question.firstNum} ${question.operation} ${question.secondNum}`;
};
const getCorrectAnswer = () => {
  switch (question.operation) {
    case '+':
      question.correct = question.firstNum + question.secondNum;
      break;
    case '-':
      question.correct = question.firstNum - question.secondNum;
      break;
    case '*':
      question.correct = question.firstNum * question.secondNum;
      break;
    default:
      question.correct = undefined;
  }
  return question.correct;
};
const isCorrect = (answer, correctAnswer) => (+answer === correctAnswer);

export default name => runGame(name, getQuestion, getCorrectAnswer, isCorrect);
