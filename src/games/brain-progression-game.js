import runGame from '../brain-games-api';
import getRandom from '../';

const maxProgressionStart = 10;
const maxProgressionDiff = 10;
const progressionLength = 10;

const getProgression = () => {
  const first = getRandom(0, maxProgressionStart);
  const dif = getRandom(1, maxProgressionDiff);
  const progression = [];
  progression[0] = first;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + dif;
  }
  return progression;
};

const gameDescription = 'What number is missing in this progression?';

const getQuestion = () => {
  const progression = getProgression();
  const questionPos = getRandom(0, progression.length - 1);
  const correctAnswer = progression[questionPos];
  progression[questionPos] = '..';
  return {
    question: progression.join(' '),
    correctAnswer: String(correctAnswer),
  };
};

export default () => runGame(gameDescription, getQuestion);
