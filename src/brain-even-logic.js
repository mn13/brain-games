import readlineSync from 'readline-sync';
import askName from './ask-name';

const yes = 'yes';
const no = 'no';
const numOfQuestions = 3;
const maxNum = 100;

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = askName();

export default () => {
  for (let i = 0; i < numOfQuestions; i += 1) {
    const randomNum = Math.round(Math.random() * maxNum);
    const correctAnswer = (randomNum % 2) ? no : yes;
    console.log(`Question: ${randomNum}`);
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
