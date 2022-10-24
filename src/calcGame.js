import readlineSync from 'readline-sync';
import { getName, userName, greeting, randomNumber } from './index.js';

//const number1 = randomNumber();
//const number2 = randomNumber();
const symbols = ['+', '-', '*'];
//const randomSymbol = symbols[Math.floor(Math.random() * 3)]
export const rules = 'What is the result of the expression?';
//const question = `Question: ${number1} ${randomSymbol} ${number2}`;

export const calcGame = () => {
//	console.log(rules);
	for (let i = 0; i < 3; i += 1) {
		const randomSymbol = symbols[Math.floor(Math.random() * 3)]
		const number1 = randomNumber();
		const number2 = randomNumber();
		const question = `Question: ${number1} ${randomSymbol} ${number2}`;
		console.log(question);
		const userAnswer = readlineSync.question('Your Answer: ');

		const sum = number1 + number2;
		const min = number1 - number2;
		const mul = number1 * number2;
		
		const check1 = (randomSymbol === '+' && userAnswer === String(sum));
		const check2 = (randomSymbol === '-' && userAnswer === String(min));
		const check3 = (randomSymbol === '*' && userAnswer === String(mul));

		if (check1 === true || check2 === true || check3 === true) {
			console.log('Correct!');
		} else {
			let result = 0;
			if (randomSymbol === '+') {
				result += sum;
			}
			if (randomSymbol === '-') {
				result += min;
			}
			if (randomSymbol === '*') {
				result += mul;
			}
			return console.log(`'${ userAnswer }' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${userName}!`);
		}
	}

	console.log(`Congratulations, ${userName}!`);
};
