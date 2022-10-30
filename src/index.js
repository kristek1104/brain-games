import readlineSync from 'readline-sync';

// GREETING
console.log('Welcome to the Brain Games!');
export const getName = () => readlineSync.question('May I have your name? ');
export const userName = getName();
export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};
export const randomNumber = () => Math.ceil(Math.random() * 20 + 1);
