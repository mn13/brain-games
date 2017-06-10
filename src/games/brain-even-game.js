import runGame from '../brain-games-api';
import getRandom from '../';

const yes = 'yes';
const no = 'no';
const maxNum = 100;

const isEven = num => !(num % 2);

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const getQuestion = () => getRandom(0, maxNum);
const getCorrectAnswer = question => (isEven(question) ? yes : no);

export default () => runGame(gameDescription, getQuestion, getCorrectAnswer);
