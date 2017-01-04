import React, { Component } from 'react';
import {render} from 'react-dom';
import InputField from './inputField';
import Output from './outputField';

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
      randomNum: Math.floor(Math.random() *
    (+this.state.max - +this.state.min + 1)) + +this.state.min,
    });
  }

  resetGame() {
    this.setState({ lastGuess: '', initialGame: 'StartMode' });
    this.addNewRandomNumber();
  }

  checkGuess(guess) {
    this.setState({ lastGuess: guess });

    if (guess < this.state.max && guess > this.state.min) {
      if (guess > this.state.randomNum) {
        this.setState({ initialGame: 'Sorry, that guess is too high. Try a lower number.' });
      } else if (guess < this.state.randomNum) {
        this.setState({ initialGame: 'Sorry, that guess is too low. Try a higher number.' });
      } else {
        this.setState({ initialGame: 'You Win!', lastGuess: '' });
        this.addNewRandomNumber();
      }
    } else {
      this.setState({ initialGame: 'Please guess between 1-100' });
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
          <Output
           lastGuess={this.state.lastGuess}
           State={this.state.initialGame}
           min={this.state.min}
           max={this.state.max}
         />
           <InputField
             submitGuess={this.checkGuess.bind(this)}
             handleReset={this.resetGame.bind(this)}
           />
        </div>

        <h1>{this.state.initialGame}</h1>
      </div>
    );
  }
}
