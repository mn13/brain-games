import runGame from '../brain-games-api';
import getRandom from '../';

const maxNum = 100;
const operations = ['+', '-', '*'];

const getCorrectAnswer = (firstNum, secondNum, operation) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return undefined;
  }
  // return question.correct;
};

const gameDescription = 'What is the result of the expression?';
const getQuestion = () => {
  const firstNum = getRandom(0, maxNum);
  const secondNum = getRandom(0, maxNum);
  const operation = operations[getRandom(0, operations.length - 1)];

  const correctAnswer = getCorrectAnswer(firstNum, secondNum, operation);
  return {
    question: `${firstNum} ${operation} ${secondNum}`,
    correctAnswer: String(correctAnswer),
  };
};

export default () => runGame(gameDescription, getQuestion);
