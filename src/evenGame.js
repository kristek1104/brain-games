import readlineSync from 'readline-sync';


console.log('Welcome to the Brain Games!');

export const getName = () => readlineSync.question('May I have your name? ');

export const userName = getName();

export const greeting = () => {
	console.log(`Hello, ${ userName }!`);
}

export const evenGame = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	for (let i = 0; i < 3; i += 1) {
		const number = Math.ceil(Math.random() * 100);
		console.log(`Question: ${number}`);
		const userAnswer = readlineSync.question('Your Answer: ');

		const check1 = (number % 2 === 0) && (userAnswer === 'yes');
		const check2 = (number % 2 !== 0 && userAnswer === 'no');
		
		if (check1 === true || check2 === true) {
			console.log('Correct!');
		} else {
			const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
			const gameOverMessage = console.log(`'${ userAnswer }' is wrong answer ;(. Correct answer was '${ opposite }'. Let's try again!`);
			return gameOverMessage;
		}
	}

	console.log(`Congratulations, ${ userName }!`);
}

			
		//if (randomNumber % 2 === 0 && userAnswer === 'yes') {
		//	console.log('Correct!');
		//		count = count + 1;
		//	}
		//	if (randomNumber % 2 !== 0 && userAnswer === 'no') {
		//		console.log('Correct!');
		//		count = count + 1;
		//	}
		//	if (randomNumber % 2 === 0 && userAnswer === 'no') {
		//		return console.log("'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again!");
		//	}
		//	if (randomNumber % 2 !== 0 && userAnswer === 'yes') {
		//		return console.log("'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again!");
		//	}
		//	else {
		//		return console.log("It's wrong answer ;(. Let's try again!");
		//	}
	//	}
//	}
//		return console.log("Congratulations!");
//};
