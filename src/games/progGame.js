import readlineSync from 'readline-sync';
import { userName, randomNumber } from '../index.js';

const rules = 'What number is missing in the progression?';

const progGame = () => {
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const progression = [];
    const lengthMin = 5;
    const lengthMax = 10;
    const lengthProgression = Math.floor(Math.random() * (lengthMax - lengthMin + 1)) + lengthMin;
    const randomPlus = randomNumber();
    const first = randomNumber();
    let nextSymbol = first;
    for (let a = 0; a < lengthProgression; a += 1) {
      progression.push(nextSymbol);
      nextSymbol += randomPlus;
    }
    const index = Math.floor(Math.random() * lengthProgression);
    const progressionWithoutElement = progression.splice(index, 1, '..');
    const joinProgression = progression.join(' ');
    const deletedElement = progressionWithoutElement.toString();
    const question = `Question: ${joinProgression}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (deletedElement === String(userAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${deletedElement}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
export default progGame;
