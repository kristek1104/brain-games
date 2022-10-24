import readlineSync from 'readline-sync';
import {rules} from './calcGame.js';
// import { rules, question, number1, number2, symbols, randomSymbol, rightAnswer, check } from './calcGame.js';

// GREETING
console.log('Welcome to the Brain Games!');
export const getName = () => readlineSync.question('May I have your name? ');
export const userName = getName();
export const greeting = () => {
console.log(`Hello, ${ userName }!`)
};
export const randomNumber = () => Math.ceil(Math.random() * 100);


// GAME'S RULES
console.log(rules);

//GAME LOOP
//for (let i = 0; i < 3; i += 1) {
//	console.log(question);
//	const userAnswer = readlineSync.question('Your Answer: ');
//		check();
//		if (check === true) {
//			console.log('Correct!');
//		} else {
//			const gameOverMessage = console.log(`'${ userAnswer }' is wrong answer ;(. Correct answer was '${ rightAnswer }'. Let's try again!`);
//			return gameOverMessage;
//		}
//	}
//
//	console.log(`Congratulations, ${ userName }!`);
//}
