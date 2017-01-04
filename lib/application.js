import React, { Component } from 'react';
import {render} from 'react-dom';
import InputField from './inputField';
import OutputField from './outputField';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: null,
      min: 0,
      max: 100,
      lastGuess: '',
      initialGame: 'StartMode',
    };
  }

  componentDidMount() {
    this.addNewRandomNumber();
  }

  addNewRandomNumber() {
    this.setState({
      randomNum: Math.floor(Math.random() * 100),
    });
  }

  resetGame() {
    this.setState({ lastGuess: '', initialGame: 'StartMode' });
    this.addNewRandomNumber();
  }

  checkGuess(guess) {
    this.setState({ lastGuess: guess });

    if (guess <= this.state.max && guess >= this.state.min) {
      if (guess > this.state.randomNum) {
        this.setState({ initialGame: 'lower' });
      } else if (guess < this.state.randomNum) {
        this.setState({ initialGame: 'higher' });
      } else {
        this.setState({ initialGame: 'winner', lastGuess: '' });
        this.addNewRandomNumber();
      }
    } else {
      this.setState({ initialGame: 'notGuessRange' });
    }
  }

  render() {
    return (
      <div id='Application'>

        <div id='header'>
          <h1 id='number'>Number</h1>
          <h1 id='guesser'>Guesser</h1>
        </div>

        <div>
          <OutputField
           lastGuess={this.state.lastGuess}
           initialGame={this.state.initialGame}
           min={this.state.min}
           max={this.state.max}
         />
           <InputField
             submitGuess={this.checkGuess.bind(this)}
             handleReset={this.resetGame.bind(this)}
           />
        </div>
      </div>
    );
  }
}
