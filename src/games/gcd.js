import runGame from '../brain-games-api';
import getRandom from '../get-random';

const maxNum = 100;

const getGcd = (firstNum, secondNum) => {
  let first = firstNum;
  let second = secondNum;
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }
  return first + second;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const firstNum = getRandom(1, maxNum);
  const secondNum = getRandom(1, maxNum);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = `${getGcd(firstNum, secondNum)}`;
  return { question, correctAnswer };
};

export default () => runGame(gameDescription, getQuestion);
