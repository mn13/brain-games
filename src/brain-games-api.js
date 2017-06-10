import readlineSync from 'readline-sync';

const isCorrect = (answer, correctAnswer) => !(correctAnswer.localeCompare(answer.toLowerCase()));

const numOfQuestions = 3;

export default (gameDescription, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);


  for (let i = 0; i < numOfQuestions; i += 1) {
    const gameQuestion = getQuestion();
    console.log(`Question: ${gameQuestion.question}`);

    const answer = readlineSync.question('Your answer: ');

    if (isCorrect(answer, gameQuestion.correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameQuestion.correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
