import runGame from '../brain-games-api';
import getRandom from '../';

const maxNum = 100;

const getGcd = (first, second) => {
  let frst = first;
  let scnd = second;
  while (frst !== 0 && scnd !== 0) {
    if (frst > scnd) {
      frst %= scnd;
    } else {
      scnd %= frst;
    }
  }
  return frst + scnd;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const firstNum = getRandom(1, maxNum);
  const secondNum = getRandom(1, maxNum);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getGcd(firstNum, secondNum);
  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};

export default () => runGame(gameDescription, getQuestion);
