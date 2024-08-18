'use strict';

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initialize score to 20
let score = 20;
// Initialize highscore to 0
let highscore = 0;

// Function to display messages to the user
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Add event listener to the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  // Get the value from the input field and convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No Number!');
    // When player guesses correctly and wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // Change background color and adjust number box width
    document.querySelector('body').style.backgroundColor = '#8ACE00';
    document.querySelector('.number').style.width = '30rem';
    // Update highscore if the current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    // If the player still has score left
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
      // If the player runs out of score
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#c60000';
    }
  }
});

// Add event listener to the "Again" button for restarting the game
document.querySelector('.again').addEventListener('click', function () {
  // Reset the score and generate a new secret number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset the UI to the initial state
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#152238';
  document.querySelector('.number').style.width = '15rem';
});
