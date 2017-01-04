import React from 'react';

const Output = ({ lastGuess, initialGame, min, max }) => {
  let message;

  switch (initialGame) {
    case 'gameStart':
      message = 'Guess a number!';
      break;
    case 'lower':
      message = 'Sorry, that guess is too high. Try a lower number.';
      break;
    case 'higher':
      message = 'Sorry, that guess is too low. Try a higher number.';
      break;
    case 'winner':
      message = 'You Win!';
      break;
    case 'notGuessRange':
      message = `Please guess a number between ${min} and ${max}`;
      break;
    default:
      message = '';
  }

  let lastGuessResponse;

  if (lastGuess) {
    lastGuessResponse = (
      <div>
        <p>Your last guess was</p>
        <span>{lastGuess}</span>
      </div>
    );
  }

  return (
    <div className='response-field'>
      {lastGuessResponse}
      <p>{message}</p>
    </div>
  );
};

export default Output;
