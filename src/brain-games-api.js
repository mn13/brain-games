import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! `);
  return name;
};
const isCorrect = (answer, correctAnswer) => !(String(correctAnswer)
                                              .localeCompare(answer.toLowerCase()));

const numOfQuestions = 3;

export default (gameDescription, getQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}`);

  const name = askName();

  for (let i = 0; i < numOfQuestions; i += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (isCorrect(answer, correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
