import runGame from '../brain-games-api';
import getRandom from '../get-random';

const maxNum = 100;
const operations = ['+', '-', '*'];

const calculate = (firstNum, secondNum, operation) => {
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
};

const gameDescription = 'What is the result of the expression?';
const getQuestion = () => {
  const firstNum = getRandom(0, maxNum);
  const secondNum = getRandom(0, maxNum);
  const operation = operations[getRandom(0, operations.length - 1)];

  const correctAnswer = `${calculate(firstNum, secondNum, operation)}`;
  const question = `${firstNum} ${operation} ${secondNum}`;

  return { question, correctAnswer };
};

export default () => runGame(gameDescription, getQuestion);
