import React, { Component } from 'react';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      min: 0,
      max: 100,
    };
  }

  clearInput() {
    this.setState({ guess: '' });
  }

  submitGuess() {
    this.props.submitGuess(this.state.guess);
    this.setState({ guess: '' });
    this.clearInput();
  }

  handleReset() {
    this.setState({ userGuess: '', min: 0, max: 100 });
    this.props.handleReset();
  }

  render() {
    return (
      <div id='inputSection'>
        <input placeholder='Guess a Number!'
               max={this.props.max}
               min={this.props.min}
               value={this.state.guess}
               className='input'
               id='user-guess'
               type='number'
               onChange={(e) => {
                 this.setState({ guess: e.currentTarget.value });
               }}
               >
        </input>
        <button className='button'
                id='user-submit-btn'
                disabled={!this.state.guess}
                onClick={this.submitGuess.bind(this)}
                >Guess</button>
        <button className='button'
                id='clear-input-btn'
                disabled={!this.state.guess}
                onClick={this.clearInput.bind(this)}
                >Clear</button>
        <button className='reset'
                onClick={this.handleReset.bind(this)}
                >Reset</button>
      </div>
    );
  }
}
