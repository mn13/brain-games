import readlineSync from 'readline-sync';

const yes = 'yes';
const no = 'no';
const numOfQuestions = 3;
const maxNum = 100;

const isEven = num => !(num % 2);

export default (name) => {
  for (let i = 0; i < numOfQuestions; i += 1) {
    const question = Math.round(Math.random() * maxNum);
    const correctAnswer = isEven(question) ? yes : no;
    console.log(`Question: ${question}`);
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
