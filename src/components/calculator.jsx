import React, { Component } from "react";
import Buttons from "./buttons";
import Displayer from "./displayer";

class Calculator extends Component {
  state = {
    symbols: [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", 0, ".", "=", "/"],
    preOperator: "",
    operator: "",
    n1: "",
    n2: "",
    result: 0,
    displayValue: "",
    decimal: "",
    maxDigitShown: 25
  };
  calculateResult(n1_input, preOperator, n2_input) {
    let n1 = !parseFloat(n1_input) ? 0 : parseFloat(n1_input);
    let n2 = !parseFloat(n2_input) ? 0 : parseFloat(n2_input);
    console.log(n1, preOperator, n2);
    if (preOperator === "+" || preOperator === "") return n1 + n2;
    if (preOperator === "-") return n1 - n2;
    if (preOperator === "x") return n1 * n2;
    if (preOperator === "/") return n1 / n2;
  }

  handleClick = action => {
    const {
      preOperator,
      operator,
      n1,
      n2,
      result,
      displayValue,
      decimal,
      maxDigitShown
    } = this.state;
    let previousOperator = preOperator;
    let currentOperator = operator;
    let currentN1 = n1;
    let currentN2 = n2;
    let currentResult = result;
    let currentDisplayValue = displayValue;
    let cuurentDecimal = decimal;

    if (action === "=") {
      currentResult = this.calculateResult(
        currentN1,
        previousOperator,
        currentN2
      );
      currentN1 = "";
      currentN2 = "";
      cuurentDecimal = "";
      currentDisplayValue = currentResult;
    }
    if (["+", "-", "x", "/"].includes(action)) {
      //if the current operation is "operator"
      cuurentDecimal = "";
      if (["+", "-", "x", "/"].includes(currentOperator)) {
        currentOperator = action;
      } else {
        currentOperator = action;
        currentN1 = currentN2;
        currentN2 = 0; // shift n2 to n1 and set n2 to 0
      }
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
      currentDisplayValue = currentN2;
    }
    if (action === ".") {
      if (cuurentDecimal === "") {
        currentN2 += ".";
        cuurentDecimal = ".";
      } else {
        currentN2 = currentN2;
      }
    }
    //limit length of currentN2 and displayValue

    currentN2 = currentN2.toString().slice(0, maxDigitShown);
    currentDisplayValue = currentDisplayValue
      .toString()
      .slice(0, maxDigitShown);

    this.setState({
      preOperator: previousOperator,
      operator: currentOperator,
      n1: currentN1,
      n2: currentN2,
      result: currentResult,
      displayValue: currentDisplayValue,
      decimal: cuurentDecimal
    });
  };

  render() {
    const { symbols, displayValue } = this.state;
    return (
      <div className="calculator">
        <Displayer displayValue={displayValue} />
        <Buttons symbols={symbols} onAction={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
