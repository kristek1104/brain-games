import readlineSync from 'readline-sync';
import { userName, randomNumber } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your Answer: ');

    const check1 = (number % 2 === 0) && (userAnswer === 'yes');
    const check2 = (number % 2 !== 0 && userAnswer === 'no');

    if (check1 === true || check2 === true) {
      console.log('Correct!');
    } else {
      const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
      const errorAnswer = (userAnswer !== 'yes' || userAnswer !== 'no');
      if (userAnswer === errorAnswer && userAnswer === check1) {
        const gameOverMessage1 = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        return gameOverMessage1;
      }
      if (userAnswer === errorAnswer && userAnswer === check2) {
        const gameOverMessage2 = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        return gameOverMessage2;
      }
      const gameOverMessage = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${opposite}'.\nLet's try again, ${userName}!`);
      return gameOverMessage;
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
export default evenGame;
