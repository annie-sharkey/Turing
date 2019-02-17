import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Square from "./square.js";

const tape = [];
const cursor = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: 0,
      secondNum: 0,
      submit: false
    };
  }

  handleFirstNum = event => {
    this.setState(
      {
        firstNum: parseInt(event.target.value),
        submit: false,
        tape: []
      },
      function() {
        console.log("first number = " + this.state.firstNum);
        console.log(typeof this.state.firstNum);
      }
    );
  };

  handleSecondNum = event => {
    this.setState(
      {
        secondNum: parseInt(event.target.value),
        submit: false,
        tape: []
      },
      function() {
        console.log("second number = " + this.state.secondNum);
      }
    );
  };

  handleSubmit = () => {
    this.setState(
      {
        submit: true
      },
      function() {
        console.log(this.state.submit);
      }
    );
  };

  createTape = (firstNum, secondNum) => {
    tape.push("___ ");
    for (var i = 0; i < firstNum; i++) {
      tape.push(" 1 ");
    }
    tape.push("___");
    for (var i = 0; i < secondNum; i++) {
      tape.push(" 1 ");
    }
    for (var i = 0; i < firstNum; i++) {
      tape.push(" ___ ");
    }
    console.log(tape);
    this.turingAdd();
    return (
      <div>
        {tape}
        <button>Run Machine</button>
      </div>
    );
  };
  /*
Starting position is far left ==> 
check if 1 is the next item
if yes then go until there is another blank -- you've hit blank one, remember
then go until you hit the second blank
write the 1 in that spot
first blank is now false -- could count blanks and reset, could use booleans
then go back
when you hit first blank remember you hit first blank
get to second blank
when you read first 1, erase
when you read second 1, remember and repeat
if you do 1 and replace with blank and then hit another blank aka there isn't another
  1 then you're done

*/
  turingAdd = () => {
    console.log("turingAdd entered");
  };

  checkIfOne = () => {
    if (tape[cursor + 1] === " 1 ") {
      return true;
    } else {
      return <div>Nothing to add</div>;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Turing Machine Examples</h1>
        <h2>Enter two positive numbers you would like to add:</h2>
        <div className="App-input">
          <input
            type="number"
            min="0"
            value={this.state.firstNum}
            onChange={this.handleFirstNum}
          />
          <h2>+</h2>
          <input
            type="number"
            min="0"
            value={this.state.secondNum}
            onChange={this.handleSecondNum}
          />
          <button onClick={this.handleSubmit}>Enter</button>
        </div>
        {this.state.submit &&
          this.createTape(this.state.firstNum, this.state.secondNum)}
      </div>
    );
  }
}

export default App;
