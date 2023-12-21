import readLine from 'readline-sync';

const ROCK = 'Камень';
const Scissors = 'Ножницы';
const PAPER = 'Бумага';

let playerChoise = null;
let computerChoise = null;

const WIN = 'Вы победили!';
const LOOSE = 'Бог Рандома выиграл!';
const DRAW = 'Ничья!';

const incorrectInput = 'Некорректное число';

const greeting = 'Добро пожаловать в игру "Камень, Ножницы, Бумага"!';
const showChoice = `\nВыберите вашу фигиру (номер): 
1. Камень
2. Ножницы
3. Бумага

Ваш выбор: `;

console.log(greeting);

const numberToFigure = (inputNumber) => {
  switch (Number(inputNumber)) {
    case 1:
      return ROCK;
    case 2:
      return Scissors;
    case 3:
      return PAPER;
    default:
      console.log(incorrectInput);
      return null;
  }
};

const getResultGame = (firstPlayer, secondPlayer) => {
  if (firstPlayer === secondPlayer) return DRAW;
  if (firstPlayer === ROCK) {
    if (secondPlayer === Scissors) return WIN;
    return LOOSE;
  }
  if (firstPlayer === Scissors) {
    if (secondPlayer === PAPER) return WIN;
    return LOOSE;
  }
  if (firstPlayer === PAPER) {
    if (secondPlayer === ROCK) return WIN;
    return LOOSE;
  }
};

const isRepeat = () => {
  while (true) {
    let answer = readLine.question(`Хотите сыграть еще раз? 
    1 - да
    2 - нет
    `);
    answer = answer.toLowerCase();
    if (answer === '1') return true;
    if (answer === '2') return false;
    console.log(`\n${incorrectInput}\n`);
  }
};

do {
  playerChoise = null;
  computerChoise = null;

  while (!playerChoise) {
    playerChoise = numberToFigure(readLine.question(showChoice));
  }

  computerChoise = numberToFigure(Math.ceil(Math.random() * 3));

  const resultGame = getResultGame(playerChoise, computerChoise);

  console.log(`Вы выбрали: ${playerChoise}\n`);
  console.log(`Компьютер выбирает: ${computerChoise}\n`);
  console.log(`Результат: ${resultGame}\n`);
} while (isRepeat());
