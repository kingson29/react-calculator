import React, { Component } from "react";
import Buttons from "./buttons";
import Displayer from "./displayer";

class Calculator extends Component {
  state = {
    symbols: [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", 0, ".", "=", "/"],
    preOperator: "",
    operator: "",
    n1: "0",
    n2: "0",
    result: 0
  };
  calculateResult(n1_input, preOperator, n2_input) {
    let n1 = parseFloat(n1_input);
    let n2 = parseFloat(n2_input);
    console.log(n1, preOperator, n2);
    if (preOperator === "+") return n1 + n2;
    if (preOperator === "-") return n1 - n2;
    if (preOperator === "x") return n1 * n2;
    if (preOperator === "/") return n1 / n2;
  }

  handleClick = action => {
    const { preOperator, operator, n1, n2, result } = this.state;
    let previousOperator = preOperator;
    let currentOperator = operator;
    let currentN1 = n1;
    let currentN2 = n2;
    let currentResult = result;
    if (action === "=") {
      currentResult = this.calculateResult(
        currentN1,
        previousOperator,
        currentN2
      );
    }
    if (["+", "-", "x", "/"].includes(action)) {
      //if the current operation is "operator"
      currentOperator = action;
      currentN1 = currentN2;
      currentN2 = 0; // shift n2 to n1 and set n2 to 0
    }
    if (typeof action === "number") {
      //if the current operation is "number"
      if (["+", "-", "x", "/"].includes(currentOperator)) {
        //if there exist a previous operator
        previousOperator = currentOperator;
        currentOperator = ""; //reset operator
        currentN2 = action.toString();
      } else {
        currentN2 += action.toString();
      }
    }
    this.setState({
      preOperator: previousOperator,
      operator: currentOperator,
      n1: currentN1,
      n2: currentN2,
      result: currentResult
    });
  };

  render() {
    const { symbols } = this.state;
    return (
      <div className="calculator">
        <Displayer />
        <Buttons symbols={symbols} onAction={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
