import readlineSync from 'readline-sync';

const isCorrect = (answer, correctAnswer) => !(correctAnswer.localeCompare(answer.toLowerCase()));

const numOfQuestions = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${game.description}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! `);

  for (let i = 0; i < numOfQuestions; i += 1) {
    console.log(`Question: ${game.getQuestion()}`);

    const answer = readlineSync.question('Your answer: ');

    if (isCorrect(answer, game.correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${game.correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
