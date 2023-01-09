import evenGame from '../src/games/evenGame.js';

if (evenGame(5) !== 'no') {
  throw new Error('Функция работает неверно!');
}
if (evenGame(6) !== 'yes') {
  throw new Error('Функция работает неверно!');
}
if (evenGame(0) !== 'yes') {
  throw new Error('Функция работает неверно!');
}
console.log('Все тесты пройдены!');
