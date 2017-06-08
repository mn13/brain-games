import runGame from './brain-games-api';

const yes = 'yes';
const no = 'no';
const maxNum = 100;

const isEven = num => !(num % 2);

const getQuestion = () => Math.round(Math.random() * maxNum);
const getCorrectAnswer = question => (isEven(question) ? yes : no);
const isCorrect = (answer, correctAnswer) => !(correctAnswer.localeCompare(answer.toLowerCase()));

export default name => runGame(name, getQuestion, getCorrectAnswer, isCorrect);
