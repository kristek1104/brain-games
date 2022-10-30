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
    //const errorMessage = (userAnswer !== 'yes' || userAnswer !== 'no');
    const check1 = (arrHowMuchYes.length === arrOfNumbers.length && userAnswer === 'yes');
    const check2 = (arrHowMuchYes.length !== arrOfNumbers.length && userAnswer === 'no');
    if (check1 === true || check2 === true) {
      console.log('Correct!');
    } else {
      const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
	const errorMessage = (userAnswer !== 'yes' || userAnswer !== 'no');
      if (userAnswer === errorMessage && userAnswer === check1) {
        const gameOverMessage1 = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        return gameOverMessage1;
      }
      if (userAnswer === errorMessage && userAnswer === check2) {
        const gameOverMessage2 = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        return gameOverMessage2;
      }
      const gameOverMessage = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${opposite}'.\nLet's try again, ${userName}!`);
      return gameOverMessage;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default primeGame;
