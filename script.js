'use strict';
let secretNumber;
let score = 20;
let highScore = 0;

const chooseNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
};
const wrongGuess = function (message) {
  if (score > 1) {
    document.querySelector('.message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = `You lost the game!`;
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FE2E2E';
  }
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
chooseNumber();
// check btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //no input
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    //player win
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    //guess too high
    wrongGuess('Too high!');
  } else {
    //guess too low
    wrongGuess('Too low!');
  }
});
// again btn
document.querySelector('.again').addEventListener('click', function () {
  chooseNumber();
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
