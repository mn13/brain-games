import runGame from '../brain-games-api';
import getRandom from '../get-random';

const maxNum = 100;

const isPrime = (num) => {
  let i;
  for (i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) break;
  }
  return num === i;
};

const description = 'Whether the number is Prime?';
const getQuestion = () => {
  const question = getRandom(0, maxNum);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame(description, getQuestion);
