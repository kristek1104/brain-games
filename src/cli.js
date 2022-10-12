import readlineSync from 'readline-sync';

export var askAboutName = () => {
	const userName = readlineSync.question('May I have your name? ');
	console.log('Hi, ' + userName + '!');
}
