# Number Guessing Game

## Overview

The Number Guessing Game is a simple web-based game where players try to guess a randomly generated number between 1 and 20. The game provides feedback on each guess, indicating whether the guess was too high, too low, or correct. The player has 20 attempts to guess the correct number, and the game tracks the highest score achieved.

## How to Play

1. **Start the Game**: The game starts with a random secret number between 1 and 20, and the player starts with a score of 20 points.

2. **Make a Guess**: 
   - Enter a number between 1 and 20 in the input field provided.
   - Click the "Check!" button to submit your guess.

3. **Receive Feedback**: 
   - If you haven't entered a number, the game will prompt you with a "No Number!" message.
   - If your guess is correct, you'll see a "Correct Number!" message, the background color will change to green, and your current score will be compared to the high score.
   - If your guess is too high or too low, the game will give you feedback ("Too high!" or "Too low!") and decrease your score by 1.

4. **Winning the Game**: 
   - If you guess the correct number before your score reaches 0, you win the game. 
   - The game will reveal the correct number, and if your score is higher than the previous high score, it will update the high score.

5. **Losing the Game**: 
   - If your score reaches 0 and you haven't guessed the correct number, the game will display "You lost the game!" and end the current round.

6. **Play Again**:
   - Click the "Play again!" button to reset the game. The score will be reset to 20, a new secret number will be generated, and the interface will return to its original state.

## Features

- **Random Number Generation**: A new secret number is generated each time the game starts or is reset.
- **Score Tracking**: The game tracks your current score, decreasing it with each incorrect guess.
- **High Score Tracking**: The game records and displays your highest score across sessions.
- **Responsive Feedback**: The game provides instant feedback based on the player's input, helping guide them toward the correct guess.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling of the game interface.
- **JavaScript**: Game logic and interactivity.

## How to Run

1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser.
3. Start guessing and enjoy the game!
