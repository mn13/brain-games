import runGame from '../brain-games-api';
import getRandom from '../';

const yes = 'yes';
const no = 'no';
const maxNum = 100;

const isEven = num => !(num % 2);

const evenGame = {
  description: 'Answer "yes" if number even otherwise answer "no".',
  getQuestion: () => {
    this.question = getRandom(0, maxNum);
    return this.question;
  },
  correctAnswer: isEven(this.question) ? yes : no,
};

export default () => runGame(evenGame);
