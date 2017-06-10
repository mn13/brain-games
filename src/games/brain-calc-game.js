import runGame from '../brain-games-api';
import getRandom from '../';

const maxNum = 100;
const operations = ['+', '-', '*'];
const question = {};

const message = 'What is the result of the expression?';
const getQuestion = () => {
  question.firstNum = getRandom(0, maxNum);
  question.secondNum = getRandom(0, maxNum);
  question.operation = operations[getRandom(0, operations.length - 1)];
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

export default () => runGame(message, getQuestion, getCorrectAnswer);
