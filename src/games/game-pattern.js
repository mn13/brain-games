import readlineSync from 'readline-sync';

const numOfQuestions = 3;

export default (name, getQuestion, getCorrectAnswer, isCorrect) => {
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
