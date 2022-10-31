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
    const arrOfNumberEnd1 = arrOfNumber1.filter((number) => number1 % number === 0);
    const arrOfNumberEnd2 = arrOfNumber2.filter((num) => number2 % num === 0);

    const common = [];
    for (let g = 0; g < arrOfNumberEnd1.length; g += 1) {
      for (let j = 0; j < arrOfNumberEnd2.length; j += 1) {
        if (arrOfNumberEnd1[g] === arrOfNumberEnd2[j]) {
          common.push(arrOfNumberEnd1[g]);
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
