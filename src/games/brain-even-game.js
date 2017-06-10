import runGame from '../brain-games-api';
import getRandom from '../';

const yes = 'yes';
const no = 'no';
const maxNum = 100;

const isEven = num => (!(num % 2) ? yes : no);

const description = 'Answer "yes" if number even otherwise answer "no".';
const getQuestion = () => {
  const question = getRandom(0, maxNum);
  const correctAnswer = isEven(question);
  return {
    question,
    correctAnswer,
  };
};

export default () => runGame(description, getQuestion);
