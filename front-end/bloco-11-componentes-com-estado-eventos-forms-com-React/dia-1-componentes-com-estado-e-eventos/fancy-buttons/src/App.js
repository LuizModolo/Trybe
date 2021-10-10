import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.printTextOne = this.printTextOne.bind(this);
    this.printTextTwo = this.printTextTwo.bind(this);
    this.printTextThree = this.printTextThree.bind(this);
    this.state = {
      numClickOne: 0,
      numClickTwo: 0,
      numClickThree: 0,
    }
  }

  printTextOne() {
    this.setState((stateBeforeOne, _props) => ({
      numClickOne: stateBeforeOne.numClickOne + 1
    }))
  }

  printTextTwo() {
    this.setState((stateBeforeTwo, _props) => ({
      numClickTwo: stateBeforeTwo.numClickTwo + 1
    }))
  }

  printTextThree() {
    this.setState((stateBeforeThree, _props) => ({
      numClickThree: stateBeforeThree.numClickThree + 1
    }))
  }

  colorButton = (num) => num % 2 === 0 ? 'green' : 'yellow';

  render() {
    const { numClickOne, numClickTwo, numClickThree } = this.state
    return (
      <div>
        <button onClick={this.printTextOne} className={this.colorButton(numClickOne)}>Botão 1. Click: {numClickOne}</button>
        <button onClick={this.printTextTwo} className={this.colorButton(numClickTwo)}>Botão 2 Click: {numClickTwo}</button>
        <button onClick={this.printTextThree} className={this.colorButton(numClickThree)}>Botão 3 Click: {numClickThree}</button>
      </div>
    );
  }
}

export default App;
