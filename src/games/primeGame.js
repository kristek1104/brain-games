import readlineSync from 'readline-sync';
import { userName, randomNumber } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    const question = `Question: ${number}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your Answer: ');

    const arrOfNumbers = [];
    for (let a = number - 1; a > 1; a -= 1) {
      arrOfNumbers.push(a);
    }

    const arrHowMuchYes = [];
    for (const item of arrOfNumbers) {
      if (number % item !== 0) {
        arrHowMuchYes.push(item);
      }
    }

    const errorMessage = (userAnswer !== 'yes' || userAnswer !== 'no');
    if (arrHowMuchYes.length === arrOfNumbers.length && userAnswer === 'yes') {
      console.log('Correct!');
    }
    if ((arrHowMuchYes.length === arrOfNumbers.length) && (userAnswer === 'no' || userAnswer === errorMessage)) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    }
    if (arrHowMuchYes.length !== arrOfNumbers.length && userAnswer === 'no') {
      console.log('Correct!');
    }
    if ((arrHowMuchYes.length !== arrOfNumbers.length) && (userAnswer === 'yes' || userAnswer === errorMessage)) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congranulations, ${userName}!`);
};
export default primeGame;
