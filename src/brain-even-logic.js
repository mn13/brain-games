import readlineSync from 'readline-sync';
import askName from './ask-name';

const YES = 'yes';
const NO = 'no';
const NUM_OF_QUESTIONS = 3;
const MAX_NUM = 100;

const name = askName();

export default () => {
  for (let i = 0; i < NUM_OF_QUESTIONS; i += 1) {
    const n = Math.round(Math.random() * MAX_NUM);
    const correctAnswer = (n % 2) ? NO : YES;
    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your answer: ');
    if (!correctAnswer.localeCompare(answer.toLowerCase())) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
