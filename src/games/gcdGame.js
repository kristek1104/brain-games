import readlineSync from 'readline-sync';
import { userName, randomNumber } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber();
    const number2 = randomNumber();
    const question = (`Question: ${number1} ${number2}`);
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    const arrOfNumber1 = [];
    for (let a = number1; a >= 1; a -= 1) {
      arrOfNumber1.push(a);
    }

    const arrOfNumber2 = [];
    for (let b = number2; b >= 1; b -= 1) {
      arrOfNumber2.push(b);
    }

    const arrOfNumberEnd1 = [];
    for (const item of arrOfNumber1) {
      if (number1 % item === 0) {
        arrOfNumberEnd1.push(item);
      }
    }
    const arrOfNumberEnd2 = [];
    for (const item0 of arrOfNumber2) {
      if (number2 % item0 === 0) {
        arrOfNumberEnd2.push(item0);
      }
    }

    const common = [];
    for (const item1 of arrOfNumberEnd1) {
      for (const item2 of arrOfNumberEnd2) {
        if (item1 === item2) {
          common.push(item1);
        }
      }
    }
    const rightAnswer = common[0];

    if (String(rightAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default gcdGame;
