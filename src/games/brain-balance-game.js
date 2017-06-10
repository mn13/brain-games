import runGame from '../brain-games-api';
import getRandom from '../';

const maxNum = 100;
const minNum = 10;

const getMax = numericMas => numericMas.sort((a, b) => a - b)[numericMas.length - 1];
const getMin = numericMas => numericMas.sort((a, b) => a - b)[0];

const balance = (num) => {
  const temp = String(num);
  const digits = [];
  for (let i = 0; i < temp.length; i += 1) {
    digits[i] = +temp[i];
  }
  let maxDigit = getMax(digits);
  let minDigit = getMin(digits);
  while ((maxDigit - minDigit) > 1) {
    digits[0] += 1;
    digits[digits.length - 1] -= 1;
    maxDigit = getMax(digits);
    minDigit = getMin(digits);
  }
  return digits.join('');
};

const description = 'Balance the given number.';
const getQuestion = () => {
  const question = getRandom(minNum, maxNum);
  const correctAnswer = balance(question);
  return {
    question,
    correctAnswer,
  };
};

export default () => runGame(description, getQuestion);
