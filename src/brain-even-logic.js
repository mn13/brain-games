import readlineSync from 'readline-sync';

const yes = 'yes';
const no = 'no';
const numOfQuestions = 3;
const maxNum = 100;

export default (name) => {
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
